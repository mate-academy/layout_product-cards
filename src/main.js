
fetch('./stars.html')
  .then(response => response.text())
  .then(html => {
    document.querySelectorAll('.card__stars').forEach(container => {
      container.innerHTML = html;
    });
  });
