---
"@variablelab/brand": minor
---

The type scale is tokens. `tokens.css` defines `--vlab-type-<step>-size`, `-line-height`, `-weight`, `-tracking` and `-family` for each step of the scale in `typography.md`, `theme.css` adds each step to Tailwind as `text-<step>`, and `tokens.json` holds the scale under `type`. The step `inline code` is now spelled `inline-code`, as its tokens are.
