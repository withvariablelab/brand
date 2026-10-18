<p align="center">
  <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/logo.svg" width="80" alt="The Logo: a green hexagon with a V">
</p>

<h1 align="center">Brand guideline</h1>

<p align="center">How everything Variable Lab publishes looks and reads.<br>Variable Lab is the open source arm of Variable Land.</p>

## At a glance

- **Dark, warm and flat.** One dark palette, no gradients, no shadows, square corners.
- **One Signature.** The green Logo with "Variable Land" beside it. It signs everything Variable Lab publishes, set apart from a Project's Sign. No Project uses it as its own mark.
- **A Sign per Project.** A Project starts with its Class stamp and earns a Sign: filled rectangles in one ink.
- **Facts, in English.** Short declarative sentences a reader can check in the code.

## Palette

<!-- build:color -->
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/color-ground.svg" width="48" alt="" align="absmiddle">&nbsp;`ground` `#14120e`. Page background.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/color-surface.svg" width="48" alt="" align="absmiddle">&nbsp;`surface` `#1b1914`. Code blocks, command boxes and panels.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/color-ink.svg" width="48" alt="" align="absmiddle">&nbsp;`ink` `#f3f0e8`. Main text, Signs and Class stamps.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/color-ink-muted.svg" width="48" alt="" align="absmiddle">&nbsp;`ink-muted` `#bdb7ab`. Secondary prose, such as the paragraph under a title.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/color-dim.svg" width="48" alt="" align="absmiddle">&nbsp;`dim` `#a39e93`. Subtitles, meta, labels and secondary links.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/color-rule.svg" width="48" alt="" align="absmiddle">&nbsp;`rule` `#2e2a24`. 1px rules and borders.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/color-rule-strong.svg" width="48" alt="" align="absmiddle">&nbsp;`rule-strong` `#3a362f`. Link underlines, hover borders, selection and scrollbars.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/color-logo.svg" width="48" alt="" align="absmiddle">&nbsp;`logo` `#36d399`. The Logo, and nothing else.
<!-- /build:color -->

Code is colored with soft Vesper: the roles and the peach and mint accents of [Vesper](https://github.com/raunofreiberg/vesper), on the palette's own warm neutrals.

<!-- build:syntax -->
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/syntax-text.svg" width="48" alt="" align="absmiddle">&nbsp;`text` `#f3f0e8`. Identifiers, punctuation and flags.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/syntax-keyword.svg" width="48" alt="" align="absmiddle">&nbsp;`keyword` `#a39e93`. `import`, `from`, `const`, `export`, `as` and operators; JSX attributes; a code block's file name.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/syntax-function.svg" width="48" alt="" align="absmiddle">&nbsp;`function` `#e8bf98`. Function calls and declarations; numbers, booleans, types and other `support.*` names; HTML tags and attributes; JSON keys; the first token of a shell command (`pnpm`).
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/syntax-string.svg" width="48" alt="" align="absmiddle">&nbsp;`string` `#a3d9ca`. Strings, symbols and `constant.other.key`; the arguments of a shell command (`init`, package names).
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/syntax-comment.svg" width="48" alt="" align="absmiddle">&nbsp;`comment` `#8a857b`. Comments; a code block's language label.
- <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/syntax-gutter.svg" width="48" alt="" align="absmiddle">&nbsp;`gutter` `#5f5a52`. Line numbers and the `$` prompt.
<!-- /build:syntax -->

## Type

IBM Plex Sans for text and IBM Plex Mono for code, both in 400 and 500. Two weights: 500 for names and titles, 400 for everything else.

## Shapes

<p>
  <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/stamp-app.svg" width="48" alt="The App Class stamp">
  &nbsp;
  <img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/stamp-library.svg" width="48" alt="The Library Class stamp">
</p>

The Class stamps of an App and a Library: a body on a base, and a closed frame. Each Project's Sign is drawn on the same 24×24 grid and lives in that Project's own repository, in `brand/`.

## The guideline

| Chapter | Covers |
| --- | --- |
| [Principles](https://github.com/withvariablelab/brand/blob/main/skills/vlab-brand/principles.md) | The rules every other chapter follows. |
| [Logo](https://github.com/withvariablelab/brand/blob/main/skills/vlab-brand/logo.md) | Color, the Signature, sizes and what to avoid. |
| [Color](https://github.com/withvariablelab/brand/blob/main/skills/vlab-brand/color.md) | The palette, soft Vesper and contrast. |
| [Typography](https://github.com/withvariablelab/brand/blob/main/skills/vlab-brand/typography.md) | Families, scale and text flow. |
| [Voice](https://github.com/withvariablelab/brand/blob/main/skills/vlab-brand/voice.md) | Tone, names and how to say what a Project is. |
| [Iconography](https://github.com/withvariablelab/brand/blob/main/skills/vlab-brand/iconography.md) | UI icons and shapes beside text. |
| [Project brand](https://github.com/withvariablelab/brand/blob/main/skills/vlab-brand/project-brand.md) | Class stamps, how a Sign is drawn and a Project's `brand/` folder. |
| [README](https://github.com/withvariablelab/brand/blob/main/skills/vlab-brand/readme.md) | The structure of each kind of README and the rules they share. |

The guideline is also an [Agent Skill](https://agentskills.io), `vlab-brand`, so agents read the same text people do.

## Use it

In any repository that publishes something for Variable Lab, install the skill and pick your agents:

```sh
npx skills add withvariablelab/brand --skill vlab-brand
```

For the tokens and the assets in code, add the package with the IBM Plex fonts beside it:

```sh
pnpm add @variablelab/brand @fontsource/ibm-plex-sans @fontsource/ibm-plex-mono
```

```css
@import "@variablelab/brand/theme.css"; /* Tailwind v4: bg-ground, text-ink, font-mono… */
@import "@variablelab/brand/tokens.css"; /* plain CSS: var(--vlab-ground)… */
```

## Contributing

The [contributing guide](https://github.com/withvariablelab/brand/blob/main/docs/contributing.md) covers issues, pull requests and releases, and the [development guide](https://github.com/withvariablelab/brand/blob/main/docs/development.md) covers setting up the repo and running its checks.

## License

The code and the tokens are [MIT](https://github.com/withvariablelab/brand/blob/main/LICENSE). The Logo, the Class stamps and the Signs are not: see [BRAND-USE.md](https://github.com/withvariablelab/brand/blob/main/BRAND-USE.md).

<p align="center">
  <a href="https://lab.variable.land"><img src="https://raw.githubusercontent.com/withvariablelab/brand/HEAD/.github/readme/logo.svg" width="24" alt="" align="absmiddle">&nbsp;Variable Land</a>
</p>
