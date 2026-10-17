# Typography

## Families

- IBM Plex Sans, 400 and 500, for text.
- IBM Plex Mono, 400 and 500, only for code, commands, URLs, package and executable names, labels and meta.

Two weights: 500 for names and titles, 400 for everything else.

The files come from Fontsource (`@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`), unmodified and self-hosted: woff2 on sites, woff in server-rendered images. A subset or conversion made here could not keep the name "IBM Plex", which its license reserves.

## Scale

<!-- build:scale -->
| Step | Size / line height | Weight | Tracking | Family |
| --- | --- | --- | --- | --- |
| display | 42px / 1 | 500 | `-0.035em` | sans |
| title | 26px / 1.2 | 500 | `-0.025em` | sans |
| heading | 22px / 1.15 | 500 | `-0.025em` | sans |
| lead | 20px / 1.3 | 400 | `-0.02em` | sans |
| body | 16px / 1.55 | 400 | 0 | sans |
| small | 14px / 1.5 | 400 | 0 | sans |
| ui | 13px | 400 | 0 | sans |
| inline-code | 13px | 400 | 0 | mono |
| code | 12.5px / 20px | 400 | 0 | mono |
| meta | 12px | 400 | 0 | mono |
| label | 11px | 400 | 0 | mono |
<!-- /build:scale -->

- `ui` sets 500 for a name.
- `inline-code` is set in `ink`.
- A step with no line height (`ui`, `inline-code`, `meta`, `label`) keeps the one of the text it sits in.

The bigger the size, the tighter the tracking: each step carries its own value.

## In code

- CSS: `@variablelab/brand/tokens.css` defines five properties per step on `:root`: `--vlab-type-<step>-size`, `-line-height`, `-weight`, `-tracking` and `-family`, such as `--vlab-type-title-size`. A step with no line height has no `-line-height`. `-family` is `var(--vlab-font-sans)` or `var(--vlab-font-mono)`.
- Tailwind v4: `@import "@variablelab/brand/theme.css"` adds each step as a font size with its line height, tracking and weight (`text-title`, `text-meta`). The family goes beside it: `text-meta font-mono`.
- Anything else, such as a server-rendered image: read `type` in `@variablelab/brand/tokens.json`. There a step's `family` is the name of a font token, `sans` or `mono`, not a stack: the stack is that token's `value` under `font`.

## Text flow

- Titles and one-line statements: `text-wrap: balance`. Paragraphs: `text-wrap: pretty`. No block ends on a single word.
- A hyphenated word that is one term (`type-check`) is `white-space: nowrap`.
- Code never wraps. A block whose lines don't fit scrolls horizontally on its own, and the page never does. In a shell command each token stays whole (`--no-install`).