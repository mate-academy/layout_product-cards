1. [STYLES] - Get used to style all elements using classes. And don't increase
selectors specificity unless completely necessary.
2. [STYLES] - Remember to use fallback fonts - alternative font-family in case
the card one doesn't work [like this](https://www.w3schools.com/cssref/pr_font_font-family.asp)
3. [TASK] - Make sure to reuse part of [Stars task](https://github.com/mate-academy/layout_stars)
here, and keep it operational in case you change block modifier.
4. [BEM] - Check your BEM structure using BEM-linter (`npm run lint`) and
[this list](https://mate-academy.github.io/fe-program/css/typical-bem-mistakes)
5. [BEM] - Don't make BEM structure too complicated. You don't need to create
separate blocks for anything other than card itself and stars.
6. [BEM & STYLES] - Don't add external styles (positioning or margins) to
BEM-blocks. Use mix where necessary and move all external styles under element
selector.

GOOD example
```html
<!--index.html-->
<div class="container">
  <div class="container__card card">
    ...
  </div>
</div>
```
```css
/*styles.css*/
.container__card {
  margin: 48px 24px;
}

.card {
  font-size: 16px;
  background-color: purple;
}
```

BAD example
```html
<!--index.html-->
<div class="container">
  <div class="card">
    ...
  </div>
</div>
```
```css
.card {
  margin: 48px 24px;
  font-size: 16px;
  background-color: purple;
}
```

7. [STYLES] - Don't hardcode exact card size. Add necessary paddings according to mockup
and let content dictate the container size.
8. [STYLES] - Don't add new border to the element on hover. Add default
transparent border of the same width, and change its color on `:hover`
9. [STYLES] - Be consistent with your margins. Add only top or bottom, don't
add both.
10. [FILE STRUCTURE] - You should create separate file for each BEM block
