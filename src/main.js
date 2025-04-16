'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const starsBlocks = document.querySelectorAll('.stars');

  starsBlocks.forEach((stars) => {
    stars.addEventListener('click', (e) => {
      if (e.target.classList.contains('stars__star')) {
        const index = [...stars.children].indexOf(e.target) + 1;
        stars.className = `stars stars--${index}`;
      }
    });
  });
});
