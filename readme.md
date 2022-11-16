# Product cards
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://ihorivna007.github.io/layout_product-cards/)
- [TEST REPORT LINK](https://ihorivna007.github.io/layout_product-cards/report/html_report/)

> Follow [this instruction](https://mate-academy.github.io/layout_task-guideline)
___

> Disable `Multiplayer Cursors` in figma to hide other cursors ([Learn how](https://mate-academy.github.io/layout_task-guideline/figma.html#multiplayer-cursors))
___

## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/layout_product-cards/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️

## The task
Create a pages with product card using `flexbox` basing on [the mockup](https://www.figma.com/file/ojkArVazq7vsX0nbpn9CxZ/Moyo-%2F-Catalog-(ENG)?node-id=11325%3A2287).

### Requirements:
- reset browser's default margins
- card width is `200px` including border
- use images from [src/images](src/images)
- change link styles on `:hover`
- follow styles from the mock
- add `data-qa="card"` attribute to the card block
- add `data-qa="hover"` attribute to the link

--> [CHECKLIST](https://github.com/mate-academy/layout_product-cards/blob/master/checklist.md)

### Tips & Hints
- Add **ALL** `data-qa` attributes required in the task
- Reuse `stars` block from [Stars task](https://github.com/mate-academy/layout_stars)
and keep it operational. If you change `stars--4` modifier to `stars--2` or
other - number of selected stars should change correctly.
- There should be only 2 BEM blocks in your code `card` and `stars` all the others are just card elements
- Item with the text `Buy` should be a link.
- Check font styles on the mockup. Use [google fonts](https://fonts.google.com/)

---
![screenshot](./references/card-example.png)

