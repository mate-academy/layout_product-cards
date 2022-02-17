# Product cards
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://ivan-kadykalo.github.io/layout_product-cards/)
- [TEST REPORT LINK](https://ivan-kadykalo.github.io/layout_product-cards/report/html_report/)

> Follow [this instructions](https://mate-academy.github.io/layout_task-guideline)
___

<!-- > Disable `Multiplayer Cursors` in figma to hide other cursors ([Learn how](https://mate-academy.github.io/layout_task-guideline/figma.html#multiplayer-cursors))
___ -->

## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/layout_product-cards/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️

<!-- ## The task
Create a pages with product card using `flexbox` basing on [the mockup](https://www.figma.com/file/euXjY316CHKYkPRO1K0kjLsF/Moyo-Catalog?node-id=11325%3A2288). -->

### Requirements:
<!-- - reset browser's default margins -->
<!-- - card width is `200px` including border -->
<!-- - use images from [src/images](src/images) -->
<!-- - change link styles on `:hover` -->
<!-- - follow styles from the mock -->
<!-- - add `data-qa="card"` attribute to the card block -->
<!-- - add `data-qa="hover"` attribute to the link -->

<!-- --> [CHECKLIST](https://github.com/mate-academy/layout_product-cards/blob/master/checklist.md) -->

### Tips & Hints
<!-- - Add **ALL** `data-qa` attributes required in the task -->
<!-- - Reuse `stars` block from [Stars task](https://github.com/mate-academy/layout_stars)
and keep it operational. If you change `score__stars--4` modifier to `stars--2` or
other - number of selected stars should change correctly. -->
<!-- - Item with text 'Купить' should be a link. -->
<!-- - Check font styles on the mockup. Use [google fonts](https://fonts.google.com/) -->

---
<!-- ![screenshot](./references/card-example.png) -->

<!-- [STYLES] - Get used to style all elements using classes. And don't increase selectors specificity unless completely necessary. -->
<!-- [STYLES] - Remember to use fallback fonts - alternative font-family in case the main one doesn't work like this -->
<!-- [TASK] - Make sure to reuse part of Stars task here, and keep it operational in case you change block modifier. -->
[BEM] - Check your BEM structure using BEM-linter (npm run lint) and this list
[BEM] - Don't make BEM structure too complicated. You don't need to create separate blocks for anything other than card itself and stars.
[BEM & STYLES] - Don't add external styles (positioning or margins) to BEM-blocks. Use mix where necessary and move all external styles under element selector.
<!-- [STYLES] - Don't hardcode exact height size. Add necessary paddings according to mockup and let content dictate the container size. -->
<!-- [STYLES] - Don't add new border to the element on hover. Add default transparent border of the same width, and change its color on :hover -->
<!-- [STYLES] - Be consistent with your margins. Add only top or bottom, don't add both. -->
[FILE STRUCTURE] - You should create separate file for each BEM block
<!-- [SEMANTICS] - Use semantic tags like h2, p ... -->
