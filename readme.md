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

## Checklist

- [DEMO LINK](https://Andrew17-2006.github.io/layout_product-cards/)
- [TEST REPORT LINK](https://Andrew17-2006.github.io/layout_product-cards/report/html_report/)


- [ ] there 2 BEM blocks `card` and `stars` each in their own file
- [ ] SCSS Nesting is used for `elements`, `modifiers` and `pseudo-classes`
- [ ] SCSS Variables are used for main values and placed in a **separate file**
- [ ] all `stars--N` modifiers work as expected (Highlight first `N` stars)
- [ ] Code follows all the [Code Style Rules ❗️](https://mate-academy.github.io/layout_task-guideline/html-css-code-style-rules)
