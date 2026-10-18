# Development

How to work on the brand repository in a clone. The [contributing guide](contributing.md) covers how a change gets in.

## Layout

- `skills/vlab-brand/`: the guideline, as an Agent Skill. `SKILL.md` routes each task to a chapter, and `glossary.md` holds the terms.
- `tokens/tokens.json`: the only source of colors, fonts and the type scale.
- `assets/`: the Logo and the Class stamps.
- `templates/project/`: what a new Project copies: its README, its docs and its `brand/` folder.
- `scripts/build.ts`: writes every generated file.
- `.github/readme/`: the images in the README. Generated.

## Setup

[mise](https://mise.jdx.dev) pins Node 24 and pnpm in `mise.toml`, with checksums in `mise.lock`:

```sh
mise install
pnpm install
```

After changing a version in `mise.toml`, run `mise lock` and commit both files.

## Tasks

```sh
pnpm build   # write every generated file from its source
pnpm check   # exit 1 when a generated file is out of date
```

## Generated files

Edit the source, then run `pnpm build`.

| Source | Generated |
| --- | --- |
| `tokens/tokens.json` | `tokens/tokens.css`, `tokens/theme.css`, the tables in `color.md`, the scale in `typography.md`, the palette in `README.md` with its swatches in `.github/readme/`, and `templates/project/brand/sign-readme.svg` |
| `assets/stamps/*.svg` | The stamp previews in `.github/readme/` |
| `assets/logo.svg` | `.github/readme/logo.svg`, the Logo on `ground` that READMEs link |

Inside Markdown, a generated block sits between `<!-- build:<name> -->` and `<!-- /build:<name> -->`. Write around the markers, never inside them.

## CI

- **On each pull request to `main`:** `pnpm check` (CI), and zizmor on the workflows (Workflow audit).
- **On each push to `main`:** the release job opens or updates the "chore: update versions" pull request, or publishes when that pull request merges.
- **Every Monday:** `pnpm audit`, which keeps an issue labeled `dependency-audit` open while it finds known vulnerabilities (Dependency audit).
