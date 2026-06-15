# Product cards

Create a page with product card using `flexbox`, `BEM` and `SCSS` based on [this mockup](https://www.figma.com/file/ojkArVazq7vsX0nbpn9CxZ/Moyo-%2F-Catalog-(ENG)?node-id=11325%3A2287&mode=dev).

> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

### Requirements:

- reset the browser's default margins
- card width is `200px` including border
- use images from [src/images](src/images)
- change link styles on `:hover`
- add `data-qa="card"` attribute to the card block
- add `data-qa="hover"` attribute to the link `BUY`
- `background-image: url()` should be relative to the `index.scss`. So it should start with `../images`.
- Rewrite the `stars` block from the [Stars task](https://github.com/mate-academy/layout_stars) with SCSS and use it
- Find the required font on [google fonts](https://fonts.google.com/) and use.

*Important note*: In this task, you are allowed to link `*.scss` files directly in HTML `<link>` tags using `href` attribute.
This is possible because [we use the Parcel library](https://parceljs.org/languages/sass/) to bundle your solution's source code.

## Suggested folder structure

```text
src/
	index.html
	main.js
	images/
	styles/
		index.scss
		utils/
			_variables.scss
		blocks/
			_card.scss
			_stars.scss
```

## What should be done in each part

### `src/index.html`

- add the semantic markup for the card layout
- keep the `card` block ready for styling with BEM
- add `data-qa="card"` to the main card block
- add `data-qa="hover"` to the `BUY` link

### `src/main.js`

- keep this file as the entry point for the page
- import the styles that are used by Parcel

### `src/styles/index.scss`

- reset the browser default margin
- import shared variables and block styles
- keep only global styles here

### `src/styles/utils/_variables.scss`

- store the main colors, font values and spacing tokens
- reuse these values across the card and stars blocks

### `src/styles/blocks/_card.scss`

- build the `card` block styles with SCSS nesting
- set the card width to `200px` including the border
- handle hover states for the link styles
- use the product image from `src/images`

### `src/styles/blocks/_stars.scss`

- rewrite the `stars` block from the separate task
- keep the block reusable and split into modifiers
- make all `stars--N` modifiers highlight the first `N` stars

### `src/images/`

- keep all source images here
- use the product and star assets from this folder

### Font and assets

- choose the required font from Google Fonts
- use relative paths like `../images/...` inside `index.scss`

## Checklist

❗️ Replace `<your_account>` with your GitHub username and copy the links to the `Pull Request` description:

- [DEMO LINK](https://<your_account>.github.io/layout_product-cards/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_product-cards/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [ ] there 2 BEM blocks `card` and `stars` each in their own file
- [ ] SCSS Nesting is used for `elements`, `modifiers` and `pseudo-classes`
- [ ] SCSS Variables are used for main values and placed in a **separate file**
- [ ] all `stars--N` modifiers work as expected (Highlight first `N` stars)
- [ ] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)
