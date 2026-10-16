# Iconography

Two families, and nothing else: filled shapes, which are the Signs and the Class stamps ([project-brand.md](project-brand.md)), and outlined UI icons. No emoji anywhere.

## UI icons

- `viewBox 0 0 16 16`, shown at 14px. Stroke 1.5, no fill, `stroke-linecap: square`, `stroke-linejoin: miter`: square corners, like every other shape.
- `currentColor`: `dim` at rest, `ink` on hover.
- Decorative, so `aria-hidden="true"`. The control that holds the icon carries the accessible name.
- Outlined, so a UI icon never reads as a Sign, which is filled.

| Icon | Use | Geometry |
| --- | --- | --- |
| Copy | Copies a command. | `<rect x="5.75" y="5.75" width="8.5" height="8.5"/>` and `<path d="M2.75 10.25V2.75h7.5"/>` |
| Copied | Replaces Copy for a moment after a copy. | `<path d="M3 8.5l3.25 3.25L13 5"/>` |

A new icon follows the stroke rules. Before it ships, set it at 14px beside every Project's `brand/sign.svg` and both Class stamps: it must not be mistaken for any of them.

## Shapes beside text

A Sign or a Class stamp next to text is 16px, centered on the line, 10px from the text.
