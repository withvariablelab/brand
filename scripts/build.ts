// Writes every generated file in this repo from its source:
//   tokens/tokens.json  → tokens/tokens.css, tokens/theme.css,
//                         the tables in skills/vlab-brand/color.md (an installed skill can't read tokens.json),
//                         the palette in README.md and its swatches in .github/readme/,
//                         templates/product/brand/sign-readme.svg
//   assets/stamps/*.svg → the stamp previews in .github/readme/
//   assets/logo.svg     → .github/readme/logo.svg
// Generated blocks inside Markdown sit between <!-- build:<name> --> and <!-- /build:<name> -->.
// --check exits 1, without writing, when any generated file is out of date.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";

type Token = { value: string; use: string; vesper?: string };
type Group = "color" | "syntax" | "font";
type Tokens = Record<Group, Record<string, Token>>;

const root = new URL("../", import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), "utf8");
const tokens: Tokens = JSON.parse(read("tokens/tokens.json"));
const outputs: Record<string, string> = {};

// CSS

const cssHeader = "/* Generated from tokens/tokens.json by scripts/build.ts. Edit the JSON, not this file. */\n";
const cssName = (group: Group, name: string) => (group === "color" ? name : `${group}-${name}`);
const themeName = (group: Group, name: string) => (group === "font" ? `font-${name}` : `color-${cssName(group, name)}`);
const each = (render: (group: Group, name: string, token: Token) => string) =>
  (["color", "syntax", "font"] as const).flatMap((group) =>
    Object.entries(tokens[group]).map(([name, token]) => render(group, name, token)),
  );

outputs["tokens/tokens.css"] =
  `${cssHeader}:root {\n${each((group, name, token) => `  --vlab-${cssName(group, name)}: ${token.value};`).join("\n")}\n}\n`;
outputs["tokens/theme.css"] =
  `${cssHeader}@import "./tokens.css";\n\n@theme inline {\n${each((group, name) => `  --${themeName(group, name)}: var(--vlab-${cssName(group, name)});`).join("\n")}\n}\n`;

// README images: a swatch per color, and each Class stamp in ink on a ground square

const swatchPath = (group: Group, name: string) => `.github/readme/${group}-${name}.svg`;
for (const group of ["color", "syntax"] as const) {
  for (const [name, token] of Object.entries(tokens[group])) {
    outputs[swatchPath(group, name)] =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24"><rect x=".5" y=".5" width="47" height="23" fill="${token.value}" stroke="${tokens.color["rule-strong"].value}"/></svg>\n`;
  }
}

// A 24×24 shape in ink on a 32×32 ground square: the README form of a Class stamp or a Sign.
const onGround = (d: string, note = "") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${note}<rect width="32" height="32" fill="${tokens.color.ground.value}"/><path transform="translate(4 4)" fill="${tokens.color.ink.value}" fill-rule="evenodd" d="${d}"/></svg>\n`;

const stamps = readdirSync(new URL("assets/stamps/", root)).filter((file) => file.endsWith(".svg"));
for (const file of stamps) {
  const d = read(`assets/stamps/${file}`).match(/ d="([^"]+)"/)?.[1];
  if (!d) throw new Error(`assets/stamps/${file}: no path d attribute`);
  outputs[`.github/readme/stamp-${file}`] = onGround(d);
}
outputs["templates/product/brand/sign-readme.svg"] = onGround("", "<!-- Paste the d attribute of sign.svg into the path's d. -->");

// The Logo on a ground square with a sixth of its height around it, so it never sits on a light background.
const logo = read("assets/logo.svg");
const logoBox = logo.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
const logoBody = logo.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1];
if (!logoBox || !logoBody) throw new Error("assets/logo.svg: expected viewBox 0 0 w h and a body");
const [logoWidth, logoHeight] = [Number(logoBox[1]), Number(logoBox[2])];
const side = Math.round(logoHeight * (4 / 3));
const at = (size: number) => ((side - size) / 2).toFixed(2);
outputs[".github/readme/logo.svg"] =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${side} ${side}"><rect width="${side}" height="${side}" fill="${tokens.color.ground.value}"/><g transform="translate(${at(logoWidth)} ${at(logoHeight)})">${logoBody}</g></svg>\n`;

// Markdown blocks

const table = (head: string[], rows: string[][]) =>
  [head, head.map(() => "---"), ...rows].map((cells) => `| ${cells.join(" | ")} |`).join("\n");
const swatch = (group: Group, name: string) => `<img src="${swatchPath(group, name)}" width="48" height="24" alt="">`;
const rows = (group: Group, render: (name: string, token: Token) => string[]) =>
  Object.entries(tokens[group]).map(([name, token]) => render(name, token));

const blocks: Record<string, Record<string, string>> = {
  "skills/vlab-brand/color.md": {
    color: table(["Token", "Value", "Use"], rows("color", (name, t) => [name, `\`${t.value}\``, t.use])),
    syntax: table(
      ["Token", "Value", "Vesper", "Use"],
      rows("syntax", (name, t) => [name, `\`${t.value}\``, `\`${t.vesper}\``, t.use]),
    ),
  },
  "README.md": {
    color: table(["", "Token", "Value", "Use"], rows("color", (name, t) => [swatch("color", name), `\`${name}\``, `\`${t.value}\``, t.use])),
    syntax: table(["", "Token", "Value", "Use"], rows("syntax", (name, t) => [swatch("syntax", name), `\`${name}\``, `\`${t.value}\``, t.use])),
  },
};

for (const [path, fills] of Object.entries(blocks)) {
  let text = read(path);
  for (const [name, content] of Object.entries(fills)) {
    const block = new RegExp(`(<!-- build:${name} -->)[\\s\\S]*?(<!-- /build:${name} -->)`);
    if (!block.test(text)) throw new Error(`${path}: missing <!-- build:${name} --> block`);
    text = text.replace(block, (_, open, close) => `${open}\n${content}\n${close}`);
  }
  outputs[path] = text;
}

// Write or check

const stale = Object.entries(outputs).filter(([path, content]) => {
  try {
    return read(path) !== content;
  } catch {
    return true;
  }
});

if (process.argv.includes("--check")) {
  for (const [path] of stale) console.error(`out of date: ${path} (run pnpm build)`);
  process.exit(stale.length ? 1 : 0);
}
for (const [path, content] of stale) writeFileSync(new URL(path, root), content);
console.log(stale.length ? `wrote ${stale.map(([path]) => path).join(", ")}` : "up to date");
