# Color

A dark, warm palette in flat planes.

## Palette

<!-- build:color -->
| Token | Value | Use |
| --- | --- | --- |
| ground | `#14120e` | Page background. |
| surface | `#1b1914` | Code blocks, command boxes and panels. |
| ink | `#f3f0e8` | Main text, Signs and Class stamps. |
| ink-muted | `#bdb7ab` | Secondary prose, such as the paragraph under a title. |
| dim | `#a39e93` | Subtitles, meta, labels and secondary links. |
| rule | `#2e2a24` | 1px rules and borders. |
| rule-strong | `#3a362f` | Link underlines, hover borders, selection and scrollbars. |
| logo | `#36d399` | The Logo, and nothing else. |
<!-- /build:color -->

- Green lives only in the Logo. A Product has no color of its own.
- Signs and Class stamps are `ink`: one ink.
- Contrast on `ground` and `surface`: `ink` 16:1, `ink-muted` 9:1, `dim` 6.5:1. All text stays at 4.5:1 or more. Only decorative marks hidden from assistive technology, such as line numbers and the `$` prompt, sit below that.

## Syntax: soft Vesper

Code takes its roles and its two accents, peach and mint, from [Vesper](https://github.com/raunofreiberg/vesper), with the accents desaturated. The neutrals and the background are the page's: Vesper's `#101010` and cool grays clashed with the warm `ground`. Code blocks sit on `surface`. Whatever Vesper leaves in its default color is `text`.

<!-- build:syntax -->
| Token | Value | Vesper | Use |
| --- | --- | --- | --- |
| text | `#f3f0e8` | `#FFFFFF` | Identifiers, punctuation and flags. |
| keyword | `#a39e93` | `#A0A0A0` | `import`, `from`, `const`, `export`, `as` and operators; JSX attributes; a code block's file name. |
| function | `#e8bf98` | `#FFC799` | Function calls and declarations; HTML tags and attributes; the first token of a shell command (`pnpm`). |
| string | `#a3d9ca` | `#99FFE4` | Strings; the arguments of a shell command (`init`, package names). |
| comment | `#8a857b` | `#8b8b8b94` | Comments; a code block's language label. |
| gutter | `#5f5a52` | `#505050` | Line numbers and the `$` prompt. |
<!-- /build:syntax -->

## In code

- CSS: `@variablelab/brand/tokens.css` defines `--vlab-<token>`, `--vlab-syntax-<token>` and `--vlab-font-<token>` on `:root`.
- Tailwind v4: `@import "@variablelab/brand/theme.css"` adds the colors `ground`, `ink`, `syntax-keyword` and the rest, and the fonts `sans` and `mono` (`bg-ground`, `text-dim`, `font-mono`).
- Anything else, such as a server-rendered image: read `@variablelab/brand/tokens.json`.
