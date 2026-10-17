# Iconography

Two families, and nothing else: filled shapes, which are the Signs and the Class stamps ([project-brand.md](project-brand.md)), and outlined UI icons. No emoji anywhere.

## UI icons

This guideline holds the rules for drawing a UI icon, not the icons: a site draws the icons it needs and keeps their geometry in its own specs. Every UI icon follows these rules:

- `viewBox 0 0 16 16`, shown at 14px. Stroke 1.5, no fill, `stroke-linecap: square`, `stroke-linejoin: miter`: square corners, like every other shape.
- `currentColor`: `dim` at rest, `ink` on hover.
- Decorative, so `aria-hidden="true"`. The control that holds the icon carries the accessible name.
- Outlined, so a UI icon never reads as a Sign, which is filled.

Before an icon ships, set it at 14px beside every Project's `brand/sign.svg` and both Class stamps: it must not be mistaken for any of them.

## Shapes beside text

A Sign or a Class stamp next to text is 16px, centered on the line, 10px from the text.
