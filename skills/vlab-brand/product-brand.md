# Product brand

A Product's brand is its Sign, and nothing more. This chapter says how a Sign is drawn and where it lives. Which Sign a Product has belongs to the Product.

## Class stamp first

A new Product carries its Class stamp until it earns a Sign. It never gets a letter, a color or a second house in the meantime. Both stamps are in the brand repository, in `assets/stamps/`.

| Class | File | The shape |
| --- | --- | --- |
| App | `app.svg` | A body on a base, not an arrow going out. |
| Library | `library.svg` | A closed frame. |

## Drawing a Sign

- `viewBox 0 0 24 24`, filled geometry on a 4px module, in one ink: `ink`, written as `fill="currentColor"`.
- Straight rectangles only: no circles, no letters, no rounded corners.
- It draws an idea of what the Product does. It is never a mascot, an animal or a picture of the name.
- **Covered-names test**: at 16px, with the names hidden, every Sign and Class stamp is told apart from every other. A new Sign passes it before it ships, against every other Product's `brand/sign.svg` and both Class stamps.
- If a new Sign can't pass, the family has a problem: review the Signs together. A Sign is never redrawn alone.

## The Product's `brand/` folder

Once it has a Sign, a Product keeps it in a `brand/` folder next to its `package.json`. Start from `templates/product/brand/` in the brand repository.

| File | What it holds |
| --- | --- |
| `brand/sign.svg` | The Sign, 24×24, in `currentColor`. Sites and images use this file. |
| `brand/sign-readme.svg` | The Sign in `ink` on a 32×32 `ground` square, inset 4. READMEs use it because GitHub and npm may show them on a light background. |
| `brand/README.md` | What the Sign draws, in a sentence or two, and the notice that these files aren't under the repository's code license. |

A site that shows the Sign keeps its own copy of `sign.svg`. When a Sign changes, its copies change in the same pass.

## In a README

Link `sign-readme.svg` by its absolute URL, so GitHub and npm show the same file:

```
https://raw.githubusercontent.com/withvariablelab/<repo>/HEAD/<package dir>/brand/sign-readme.svg
```

npm rewrites a relative image path to this same URL, and GitHub resolves a relative path against the branch. Writing it absolute keeps both explicit.
