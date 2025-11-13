## Quick orientation — what this repo is

- This is a small static frontend layout project (product card) using BEM, SCSS and Parcel bundler.
- Visual regression tests are configured with BackstopJS (see `backstopConfig.js` and `backstop_data/`).

## Key files and where to look

- Source HTML/CSS/SCSS: `src/` — main HTML at `src/index.html`, SCSS entry in `src/styles/index.scss`.
- SCSS partials live in `scss/` and `src/styles/` (examples: `scss/_variables.scss`, `src/styles/_card.scss`, `src/styles/_stars.scss`).
- Build/test scripts: `package.json` (uses `@mate-academy/scripts` and Parcel). Important npm scripts: `npm start`, `npm run build`, `npm test`, `npm run lint`, `npm run format`.
- Visual tests: `backstopConfig.js` defines scenarios and points at `backstop_data/engine_scripts/puppet` for onBefore/onReady scripts.

## What an AI coding agent should know (short actionable bullets)

- Project type & tooling: This is a static layout project wired to Parcel and Mate Academy helper scripts. Use `npm start` to run a dev server and `npm run build` to produce a bundle.
- SCSS linking: The HTML links SCSS directly (Parcel compiles it). Background images referenced in SCSS must be relative to `index.scss` and start with `../images` (see README checklist). Follow existing pattern when adding image URLs.
- BEM & file-per-block: Blocks are implemented in separate SCSS files. Two primary blocks here are `card` and `stars` (search for `.product-card` and `.stars`). When adding or editing, follow the existing naming and nesting conventions in `src/styles` and `scss/`.
- Stars pattern: The `stars` block uses modifier classes like `stars--4` to highlight the first N stars — keep using this modifier approach rather than JavaScript.
- Data hooks for visual tests: Backstop scenarios target elements by `data-qa` attributes. Preserve or add `data-qa="card"` and `data-qa="hover"` where appropriate if you change markup (see `backstopConfig.js`).
- Linting & formatting: Use `npm run format` then `npm run lint` (or `npm test` which runs both). The repository expects Prettier and stylelint rules from `@mate-academy` configs.

## Examples (copy-paste friendly)

- Start dev server:

  - `npm start`

- Run project tests (format + lint + unit/backstop via mate scripts):

  - `npm test`

- Run formatter only:

  - `npm run format`

## Patterns and conventions to follow

- SCSS structure: variables in `_variables.scss`, block styles in their own `_<block>.scss` files and imported into `index.scss`.
- BEM naming: blocks, elements and modifiers follow the canonical BEM style used across `src/` files (e.g., `.product-card__image`, `.stars--4`). Keep nesting shallow and use SCSS nesting for elements and pseudo-classes.
- No JS for stars: The `stars` block is implemented with modifiers to reflect state; avoid adding JS to set visual states unless strictly required.

## Integration points and external dependencies

- Parcel is used for bundling — configured through `package.json` and `@parcel/transformer-sass` in devDependencies.
- Visual testing uses BackstopJS and the Mate Academy backstop config wrapper (`@mate-academy/backstop-config`). Backstop scenarios live in `backstopConfig.js` and test outputs are stored under `backstop_data/bitmaps_test` and the `html_report` folder.

## If merging existing agent guidance

- If a pre-existing `.github/copilot-instructions.md` is present, preserve any repo-specific examples and merge these bullets into that file. Keep commands and any hard-coded URL or user-specific DEMO links intact.

## Quick checklist for edits an AI might perform

1. Update or add SCSS in `src/styles` or `scss/` following BEM and file-per-block rules.
2. Run `npm run format` and `npm run lint` locally to match repository style.
3. If changing markup, ensure `data-qa` attributes used by `backstopConfig.js` are present.
4. Run `npm test` to validate lint/tests; run `npm start` to visually validate changes in the browser.

---
If anything is unclear or you want me to call out additional examples (component scaffolds, more code snippets, or sample Backstop scenarios), tell me which area and I'll expand the file.
