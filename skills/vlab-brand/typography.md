# Typography

## Families

- IBM Plex Sans, 400 and 500, for text.
- IBM Plex Mono, 400 and 500, only for code, commands, URLs, package and executable names, labels and meta.

Two weights: 500 for names and titles, 400 for everything else.

The files come from Fontsource (`@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`), unmodified and self-hosted: woff2 on sites, woff in server-rendered images. A subset or conversion made here could not keep the name "IBM Plex", which its license reserves.

## Scale

| Step | Size / line height | Weight | Tracking | Family |
| --- | --- | --- | --- | --- |
| display | 42px / 1 | 500 | `-0.035em` | sans |
| title | 26px / 1.2 | 500 | `-0.025em` | sans |
| heading | 22px / 1.15 | 500 | `-0.025em` | sans |
| lead | 20px / 1.3 | 400 | `-0.02em` | sans |
| body | 16px / 1.55 | 400 | 0 | sans |
| small | 14px / 1.5 | 400 | 0 | sans |
| ui | 13px | 400, 500 for a name | 0 | sans |
| inline code | 13px | 400 | 0 | mono, in `ink` |
| code | 12.5px / 20px | 400 | 0 | mono |
| meta | 12px | 400 | 0 | mono |
| label | 11px | 400 | 0 | mono |

The bigger the size, the tighter the tracking: each step carries its own value.

## Text flow

- Titles and one-line statements: `text-wrap: balance`. Paragraphs: `text-wrap: pretty`. No block ends on a single word.
- A hyphenated word that is one term (`type-check`) is `white-space: nowrap`.
- Code never wraps. A block whose lines don't fit scrolls horizontally on its own, and the page never does. In a shell command each token stays whole (`--no-install`).