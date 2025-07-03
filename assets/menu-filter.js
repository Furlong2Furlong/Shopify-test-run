document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded');

  const buttons = document.querySelectorAll('.menu-filters button');
  const items = document.querySelectorAll('.menu-item');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      items.forEach((item) => {
        const cat = item.getAttribute('data-category').toLowerCase();
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
