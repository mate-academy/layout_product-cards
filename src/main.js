'use strict';

document.querySelectorAll('.product-card__rating').forEach(function (ratingEl) {
  var stars = ratingEl.querySelectorAll('.product-card__star');
  var rating = parseInt(ratingEl.getAttribute('data-rating'));

  stars.forEach(function (star, index) {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
});
