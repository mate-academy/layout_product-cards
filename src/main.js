'use strict';
console.log("Card loaded");
const buttons = document.querySelectorAll('[data-qa="hover"]');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
