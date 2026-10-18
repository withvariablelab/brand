# Contributing

The brand repository takes fixes to the guideline, the tokens and the templates, and reports of a Variable Lab page or README that breaks a rule. To set up the repo and run its checks, see the [development guide](development.md).

## Issues

- A report names the chapter, the token or the file, and says what is wrong or missing.
- A new rule or token, or a change to the Logo, a Class stamp or the type scale, starts as an issue before any pull request.

## Pull requests

1. Branch from `main` with a prefix: `feat/`, `fix/`, `docs/`, `chore/` or `test/`.
2. Write commits as [Conventional Commits](https://www.conventionalcommits.org), such as `docs: fix a link in logo.md`. The pull request title takes the same form, because it becomes the squash commit.
3. Run `pnpm check` before you push. It fails when a generated file is out of date.

CI has to pass, and a maintainer squash-merges.

## Changesets

A change to `skills/`, `tokens/`, `assets/`, `templates/`, `BRAND-USE.md` or the `exports` in `package.json` needs a changeset: run `pnpm changeset`. A change to the README, the LICENSE, the agent docs, `docs/` or CI needs none.

- Major: a token, an export path or an asset path is removed or renamed.
- Minor: one is added, or a chapter.
- Patch: a value or a text changes.

Nobody edits versions or `CHANGELOG.md` by hand.

## Releases

When changesets land on `main`, `vland-bot` opens or updates a "chore: update versions" pull request. A maintainer merges it, and that publishes `@variablelab/brand` to npm through trusted publishing.

Agents install the skill from `main` on GitHub, not from npm, so a change to `skills/` reaches them when it merges, before any release.
