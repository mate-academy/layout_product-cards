# Product cards

Create a page with product card using `flexbox`, `BEM` and `SCSS` based on [this mockup](<https://www.figma.com/file/ojkArVazq7vsX0nbpn9CxZ/Moyo-%2F-Catalog-(ENG)?node-id=11325%3A2287&mode=dev>).

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

_Important note_: In this task, you are allowed to link `*.scss` files directly in HTML `<link>` tags using `href` attribute.
This is possible because [we use the Parcel library](https://en.parceljs.org/scss.html) to bundle your solution's source code.

## Checklist

❗️ Replace `nnazariypanochko` with your GitHub username and copy the links to the `Pull Request` description:

- [DEMO LINK](https://nnazariypanochko.github.io/layout_product-cards/)
- [TEST REPORT LINK](https://nnazariypanochko.github.io/layout_product-cards/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [ ] there 2 BEM blocks `card` and `stars` each in their own file
- [ ] SCSS Nesting is used for `elements`, `modifiers` and `pseudo-classes`
- [ ] SCSS Variables are used for main values and placed in a **separate file**
- [ ] all `stars--N` modifiers work as expected (Highlight first `N` stars)
- [ ] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)
