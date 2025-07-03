document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded');

  const buttons = document.querySelectorAll('.menu-filters button');
  const items = document.querySelectorAll('.menu-item');
  const headings = document.querySelectorAll('.menu-subheading');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter').trim().toLowerCase();
      console.log('Filtering by:', filter);

      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      items.forEach((item) => {
        const catAttr = item.getAttribute('data-category');
        const cat = catAttr ? catAttr.trim().toLowerCase() : '';

        if (filter === 'all' || cat === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });

      // Also filter headings!
      headings.forEach((heading) => {
        const catAttr = heading.getAttribute('data-category');
        const cat = catAttr ? catAttr.trim().toLowerCase() : '';

        if (filter === 'all' || cat === filter) {
          heading.style.display = '';
        } else {
          heading.style.display = 'none';
        }
      });
    });
  });
});
