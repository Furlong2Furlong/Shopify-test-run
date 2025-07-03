document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded');

  const buttons = document.querySelectorAll('.menu-filters button');
  const items = document.querySelectorAll('.menu-item');
  const headings = document.querySelectorAll('.menu-subheading');

  function updateLayout() {
    const leftCol = document.querySelector('.menu-left');
    const rightCol = document.querySelector('.menu-right');

    const leftVisible = Array.from(leftCol.querySelectorAll('.menu-item, .menu-subheading')).some(
      (el) => window.getComputedStyle(el).display !== 'none'
    );

    const rightVisible = Array.from(rightCol.querySelectorAll('.menu-item, .menu-subheading')).some(
      (el) => window.getComputedStyle(el).display !== 'none'
    );

    if (leftVisible && !rightVisible) {
      // Only left visible — center it, hide right
      leftCol.style.width = '100%';
      leftCol.style.margin = '0 auto';
      rightCol.style.display = 'none';
    } else if (!leftVisible && rightVisible) {
      // Only right visible — center it, hide left
      rightCol.style.width = '100%';
      rightCol.style.margin = '0 auto';
      leftCol.style.display = 'none';
    } else {
      // Both or none visible — reset styles
      leftCol.style.width = '50%';
      leftCol.style.margin = '';
      leftCol.style.display = '';
      rightCol.style.width = '50%';
      rightCol.style.margin = '';
      rightCol.style.display = '';
    }
  }

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

      headings.forEach((heading) => {
        const catAttr = heading.getAttribute('data-category');
        const cat = catAttr ? catAttr.trim().toLowerCase() : '';

        if (filter === 'all' || cat === filter) {
          heading.style.display = '';
        } else {
          heading.style.display = 'none';
        }
      });

      updateLayout();
    });
  });

  // Initial layout check
  updateLayout();
});
