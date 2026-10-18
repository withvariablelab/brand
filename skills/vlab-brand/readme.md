# README

How a README is built in every Variable Lab repository, and the two docs beside it: `docs/contributing.md` and `docs/development.md`.

## Where a README is read

- GitHub shows the README at the root of a repository, and the README of a folder when someone opens that folder.
- npm shows a package's README on its page. The page changes only when a new version is published.

A Project inside a monorepo is read in both places, from one file: its package README.

## Rules for every README

### Voice and names

[voice.md](voice.md) applies. Titles are in sentence case. A scoped package name goes in backticks, so no title holds one: in a title, GitHub shows the backticks as a gray block the size of the title.

### Sections

These names, in this order where they appear: `Install`, `Usage`, `Documentation`, `Contributing`, `License`. Never `Installation`, `Prerequisites` or `Development`.

### No badges

npm shows the version, GitHub shows CI on every commit, and open source is never a badge ([principles.md](principles.md)).

### Images

An `<img>` takes a `width` and no `height`. With both, on an absolute URL, GitHub rounds its corners and puts a gray background behind it. An SVG keeps its proportions from its `viewBox`.

### Links

- In a README that npm shows, every link and image is absolute. npm rewrites relative links from `repository` and `repository.directory` in `package.json`, and one missing field breaks them.
- In a README that only GitHub shows, links are relative, so they follow the branch.
- Anchors, such as `#install`, stay relative everywhere.

### Tables

When a table is wider than the page, GitHub narrows its columns. A sentence wraps, but an image shrinks and a hyphenated name breaks at the hyphen: `my-project/` becomes `my-` over `project/`. A README can't prevent it.

- A table may hold sentences when no other cell holds an image or a hyphenated name.
- A table with images or hyphenated names holds only short cells: a name, a command, a value.
- When it needs both, it is a list.

### The Signature

Every README at the root of a repository or on an npm page ends with the Signature, centered and apart from the Sign:

```html
<p align="center">
  <a href="https://lab.variable.land"><img src="https://cdn.jsdelivr.net/gh/withvariablelab/brand@v0.3.1/.github/readme/logo.svg" width="24" alt="" align="absmiddle">&nbsp;Variable Land</a>
</p>
```

- The image is the Logo on a `ground` square, the one the brand repository's README uses, pinned to a tag. jsDelivr keeps a pinned tag for good. When the Logo changes, the tag changes in every README in the same pass.
- At 24px, the square holds the Logo at about 16×18, the smallest size in [logo.md](logo.md).
- `alt=""`, because the link text already says Variable Land.
- The name takes the site's font and link color, not IBM Plex Sans 500 in `ink`. GitHub and npm strip `style`, so a README can't set either.
- A folder README in a repository that isn't a package, such as a GitHub Action's, has no Signature.

### License

A `## License` section, in one of two forms:

- A Project: ``The code is [MIT](<LICENSE>). The Sign in `brand/` is not: its use is set by [BRAND-USE.md](https://github.com/withvariablelab/brand/blob/main/BRAND-USE.md).``
- Anything else: `[MIT](<LICENSE>).`

The link goes to the `LICENSE` at the repository root. The README never names the holder: the `LICENSE` does. Each published package in a monorepo keeps a copy of that `LICENSE` in its folder, because npm puts only the package folder's `LICENSE` in the tarball.

### Contributing

A README at the root of a repository has a `## Contributing` section that links the two docs:

```markdown
## Contributing

The [contributing guide](docs/contributing.md) covers issues, pull requests and releases, and the [development guide](docs/development.md) covers setting up the repo and running its checks.
```

In a repository that doesn't publish, the first part ends at "issues and pull requests". A package README has no `## Contributing`: the docs belong to the repository.

## The header of a Project

```html
<p align="center">
  <img src="https://raw.githubusercontent.com/withvariablelab/<repo>/HEAD/<package dir>/brand/sign-readme.svg" width="64" alt="">
</p>

<h1 align="center"><a href="https://lab.variable.land/<project>"><project></a></h1>

<p align="center"><tagline></p>
```

- The Sign at 64px, linked as [project-brand.md](project-brand.md) says.
- The name, linked to the Project's page at `https://lab.variable.land/<project>`. It takes the site's link color, like the name in the Signature.
- The tagline, word for word as on the Project's page.

## The structures

### A Project in its own repository

Read on GitHub and on npm, from one file.

1. The header.
2. An opening of one to three sentences: what it does and how, in the words its code uses. It doesn't repeat the tagline. A short list of behaviors may follow.
3. `## Install`: the install command from the Project's page, word for word, and the requirement in one sentence, taken from `engines` or the peers in `package.json`. Then anything to install beside it.
4. `## Usage`: the smallest example that runs as written. If the Project has a `CLI.md`, Usage links it as "CLI reference".
5. The Project's own sections, such as Styling or Troubleshooting.
6. `## Documentation`, when the Project has docs.
7. `## Contributing`.
8. `## License`, in the Project form.
9. The Signature.

### A Project's package inside a monorepo

Read on npm and in its folder on GitHub. The same as a Project in its own repository, without `## Contributing`.

### The root of a monorepo that is one Project

Read only on GitHub. It carries the Project's header and links the package README instead of repeating it.

1. The header, the same as the package's.
2. One sentence: what the repository holds.
3. The install command, and a sentence that sends Usage to the package README and the rest to the docs.
4. `## Repository`: a list of the folders and what each holds.
5. `## Contributing`.
6. `## License`, in the Project form.
7. The Signature.

### The root of a monorepo with several Projects

Read only on GitHub. The monorepo isn't a Project: it has no Sign and no tagline, and its title sits on the left.

1. `# <repo>`, and the repository's GitHub description as its first sentence.
2. `## Projects`: one item per Project, with its Sign at 24px, its name linked to its README, its tagline and its page.
3. `## Repository`: a list of folders, not of packages, so adding a package doesn't change the root.
4. `## Contributing`.
5. `## License`.
6. The Signature.

### A package that isn't a Project

A plugin, a preset or an internal package, read on npm and in its folder on GitHub. It has no Sign.

1. `# <folder>`, the name of its folder. The first sentence names the package in backticks and the Project it belongs to, linked to that Project's README. Then what it adds.
2. `## Install`: the command, what it does and what it needs.
3. What it provides: a table of capabilities and commands, or its presets.
4. `## Usage` or `## Configuration`.
5. Its own sections.
6. `## Removal`, when installing it changed files.
7. `## License`: `[MIT](<LICENSE>).`
8. The Signature.

An internal package says so in its opening: it is published because the Projects that use it depend on it, and it isn't meant for use outside them.

### A Variable Lab repository

The repositories of the guideline, the site and the shared GitHub Actions.

1. `# <repo>`, and the repository's GitHub description as its first sentence. The brand repository opens with the Logo instead, because the Logo is its subject.
2. What the repository offers to whoever uses it.
3. `## Contributing`.
4. `## License`.
5. The Signature.

What matters only to whoever works in the repository goes to `docs/development.md`. A folder README inside it, such as a GitHub Action's, takes the folder's name as its title, the name used in `uses:`, and has no License or Signature.

## What is copied and what is linked

- Copied word for word from the Project's page: the tagline and the install command.
- Taken from `package.json`: the requirement.
- Linked, never copied: the docs, the CLI reference, the Project's page and the license.
- A list that grows, such as a monorepo's plugins or examples, lives in one README. The others link it, and no doc counts its items.
- The Project's page takes its text from the README's opening and its example from Usage. The README never copies them back.

## docs/contributing.md and docs/development.md

Every repository has both, in `docs/`, in lowercase. GitHub takes `docs/contributing.md` as the repository's contributing guide and links it when someone opens an issue or a pull request. A monorepo has one pair for the whole repository, and its packages have none.

### docs/contributing.md

How a change gets in, for whoever proposes one.

1. `# Contributing`: what the repository takes, and a link to `development.md`.
2. `## Issues`: what a bug report includes, and that a new feature or an API change starts as an issue.
3. `## Pull requests`: the branch prefixes, Conventional Commits, the pull request title as the squash commit, the checks to run, green CI and who merges. Preview releases, where the repository has them.
4. `## Changesets`, in a repository that publishes: when a change needs one, which bump, and that nobody edits versions or `CHANGELOG.md` by hand.
5. `## Releases`, in a repository that publishes: the "chore: update versions" pull request, and what merging it publishes.
6. The repository's own sections.

### docs/development.md

How to work in a clone, for a person or an agent.

1. `# Development`: one sentence, and a link to `contributing.md`.
2. `## Layout`, in a repository with more than one part: the folders and what each holds.
3. `## Setup`: what mise pins, and how to install everything the first time.
4. `## Tasks`: the everyday commands: dev, check, test and build.
5. `## CI`: what runs on a pull request, and what the git hooks run.
6. The repository's own sections, such as generated files, deploys or troubleshooting.

Each section comes from the repository's own files: `mise.toml`, `package.json`, the workflows and `lefthook.yml`. Both docs are read only on GitHub, so their links are relative.

## Starting a Project

The brand repository's `templates/project/` holds what a new Project copies: `README.md`, `docs/contributing.md`, `docs/development.md` and the `brand/` folder.
