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

[mise](https://mise.jdx.dev) 2026.10.19 or later pins Node 24, pnpm 12 and [gitleaks](https://github.com/gitleaks/gitleaks) in `mise.toml`, with checksums in `mise.lock`:

```sh
mise install
pnpm install
```

`pnpm install` also installs the git hooks: lefthook's postinstall writes them. With `CI` set, that postinstall skips them, so after a `CI=1 pnpm install` run `pnpm lefthook install` to add them.

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

- **On each pull request to `main`:** CI sets up mise 2026.10.19 and the locked tools with [mise-action](https://github.com/jdx/mise-action), then runs `pnpm install --frozen-lockfile` and `pnpm check`. Beside it, gitleaks scans the pull request's commits for secrets. The required `Check` check passes when both do. Workflow audit runs [zizmor](https://docs.zizmor.sh) on the workflows.
- **Git hooks** ([lefthook](https://lefthook.dev)): on each commit, `lefthook.yml` runs gitleaks on the staged changes and `pnpm check`, in parallel.
- **On each push to `main`:** the release job opens or updates the "chore: update versions" pull request, or publishes when that pull request merges.
- **Every Monday:** `pnpm audit`, which keeps an issue labeled `dependency-audit` open while it finds known vulnerabilities (Dependency audit).
