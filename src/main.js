const stars = document.querySelectorAll('#rating-stars .stars__star');
const starsWrapper = document.getElementById('rating-stars');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = star.getAttribute('data-value');
    starsWrapper.className = `stars stars--${rating}`;
  });
});


