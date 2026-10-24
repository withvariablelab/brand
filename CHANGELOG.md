# @variablelab/brand

## 0.4.1

### Patch Changes

- [#17](https://github.com/withvariablelab/brand/pull/17) [`1ba5fa3`](https://github.com/withvariablelab/brand/commit/1ba5fa3bb40fe2dab74c46333c91615ae15d35f6) Thanks [@rqbazan](https://github.com/rqbazan)! - The `vlab-brand` skill says, in its description and its opening, that the guideline is for Variable Lab and its open source Projects only, and that Variable Land's own products use their own brand.

## 0.4.0

### Minor Changes

- [#15](https://github.com/withvariablelab/brand/pull/15) [`c2c9e48`](https://github.com/withvariablelab/brand/commit/c2c9e4892311b5371505d30aa1dc71831823203d) Thanks [@rqbazan](https://github.com/rqbazan)! - Add the `readme.md` chapter: the rules every README follows, the structure of each kind of README, and the `docs/contributing.md` and `docs/development.md` every repository keeps. `templates/project/` now holds a README and those two docs beside the `brand/` folder. `logo.md` says which Logo a README links, and `project-brand.md` that a README's `<img>` takes a width and no height.

## 0.3.1

### Patch Changes

- [#11](https://github.com/withvariablelab/brand/pull/11) [`9bf78b0`](https://github.com/withvariablelab/brand/commit/9bf78b0da28012b634c6a95e6a07255efe4edd3b) Thanks [@rqbazan](https://github.com/rqbazan)! - The Typography chapter says that a step's `family` in `tokens.json` names a font token, `sans` or `mono`, and that its stack is that token's `value` under `font`.

- [#9](https://github.com/withvariablelab/brand/pull/9) [`908b3bb`](https://github.com/withvariablelab/brand/commit/908b3bb08cb656a338f132f977d2ed913f6cbd6d) Thanks [@rqbazan](https://github.com/rqbazan)! - The Iconography chapter keeps the rules for drawing a UI icon and no longer lists icons: the Copy and Copied icons, with their geometry, move to the site that uses them.

## 0.3.0

### Minor Changes

- [#7](https://github.com/withvariablelab/brand/pull/7) [`16b4e3b`](https://github.com/withvariablelab/brand/commit/16b4e3bfde93c0dbd612b8c0a4b5af237f7aadf4) Thanks [@rqbazan](https://github.com/rqbazan)! - The type scale is tokens. `tokens.css` defines `--vlab-type-<step>-size`, `-line-height`, `-weight`, `-tracking` and `-family` for each step of the scale in `typography.md`, `theme.css` adds each step to Tailwind as `text-<step>`, and `tokens.json` holds the scale under `type`. The step `inline code` is now spelled `inline-code`, as its tokens are.

## 0.2.1

### Patch Changes

- [#5](https://github.com/withvariablelab/brand/pull/5) [`f10c68a`](https://github.com/withvariablelab/brand/commit/f10c68abd66cf3f9c1b28555071b4604bace7149) Thanks [@rqbazan](https://github.com/rqbazan)! - Code coloring follows Vesper's scopes with the two accents: numbers, booleans, types, `support.*` names and JSON keys take `function`, symbols and `constant.other.key` take `string`, and Vesper's third accent is `text`. The Logo chapter says that a Project's page or docs carry the Signature, set apart from the Sign.

## 0.2.0

### Minor Changes

- [#3](https://github.com/withvariablelab/brand/pull/3) [`66a2a1f`](https://github.com/withvariablelab/brand/commit/66a2a1f457e7d3f701021fa9b14f19d9a6c97796) Thanks [@rqbazan](https://github.com/rqbazan)! - Rename the term Product to Project. The Project brand chapter moves from `skills/vlab-brand/product-brand.md` to `skills/vlab-brand/project-brand.md`, and the template for a Project's `brand/` folder moves from `templates/product/brand/` to `templates/project/brand/`.

## 0.1.0

### Minor Changes

- [#1](https://github.com/withvariablelab/brand/pull/1) [`5ff0415`](https://github.com/withvariablelab/brand/commit/5ff0415f31aee34d6dcb6f3f84372a3d165fae6b) Thanks [@rqbazan](https://github.com/rqbazan)! - First release: the `vlab-brand` skill, the design tokens as CSS and JSON, the Logo, the Class stamps and the template for a Product's `brand/` folder.
