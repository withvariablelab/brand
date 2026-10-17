# brand

Variable Lab's brand guideline, design tokens and shared assets, the package `@variablelab/brand`. [README.md](./README.md) is the front page for people; this file is for agents working in this repo.

## Layout

- `skills/vlab-brand/`: the guideline, as an Agent Skill. `SKILL.md` routes each task to one chapter; `glossary.md` holds the terms.
- `tokens/tokens.json`: the only source of colors, fonts and the type scale.
- `assets/`: the Logo and the Class stamps. No Project's Sign lives here.
- `templates/project/brand/`: what a Project copies into its own `brand/` folder.
- `.github/readme/`: the images in the README. Generated.

## Rules

- The guideline states rules for every Project. One Project's specifics, such as its Sign or its copy, belong in that Project's repository or in the site that shows it.
- Before changing a chapter, read [principles.md](./skills/vlab-brand/principles.md): every chapter follows it.
- The skill folder stands alone. An installed skill carries only `skills/vlab-brand/`, so its chapters link only to each other and state values, such as hex codes, instead of pointing outside the folder.
- Everything here is written in English, for any harness: say "agents", not one tool's name, and keep install commands free of agent flags.

## Generated files

Edit the source, then run `pnpm build`. `pnpm check` exits 1 when a generated file is out of date.

| Source | Generated |
| --- | --- |
| `tokens/tokens.json` | `tokens/tokens.css`, `tokens/theme.css`, the tables in `skills/vlab-brand/color.md`, the scale in `skills/vlab-brand/typography.md`, the palette in `README.md` and its swatches in `.github/readme/`, `templates/project/brand/sign-readme.svg` |
| `assets/stamps/*.svg` | The stamp previews in `.github/readme/` |
| `assets/logo.svg` | `.github/readme/logo.svg`, the Logo on `ground` for the README |

Inside Markdown, a generated block sits between `<!-- build:<name> -->` and `<!-- /build:<name> -->`. Write around the markers, never inside them. Whole generated files are marked `linguist-generated` in `.gitattributes`; a new one gets a line there too.

## Tools

mise installs node and pnpm, locally and in CI: run `mise install`, then `pnpm install`. `mise.toml` names the versions and `mise.lock` pins them with checksums; after changing a version in `mise.toml`, run `mise lock` and commit both.

## Releasing

- Changes to `skills/`, `tokens/`, `assets/`, `templates/`, `BRAND-USE.md` or the `exports` in `package.json` carry a changeset: run `pnpm changeset`. Changes to the README, LICENSE, this file or CI don't.
- Major: a token, an export path or an asset path is removed or renamed. Minor: one is added, or a chapter. Patch: a value or a text changes.
- Merging a change with a changeset to `main` opens or updates the "chore: update versions" pull request. Merging that pull request publishes to npm through trusted publishing.
- Agents install the skill from `main` on GitHub, not from npm, so a change to `skills/` reaches them when it merges, before any release.
