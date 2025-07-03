document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded');

  const buttons = document.querySelectorAll('.menu-filters button');
  const items = document.querySelectorAll('.menu-item');
  const headings = document.querySelectorAll('.menu-subheading');

  const leftCol = document.querySelector('.menu-left');
  const rightCol = document.querySelector('.menu-right');

  function updateLayout() {
    // ✅ Always reset visibility before checking contents
    leftCol.style.display = '';
    rightCol.style.display = '';
    leftCol.style.width = '50%';
    rightCol.style.width = '50%';
    leftCol.style.margin = '';
    rightCol.style.margin = '';

    const leftVisible = Array.from(leftCol.querySelectorAll('.menu-item, .menu-subheading')).some(
      (el) => el.offsetParent !== null
    );

    const rightVisible = Array.from(rightCol.querySelectorAll('.menu-item, .menu-subheading')).some(
      (el) => el.offsetParent !== null
    );

    if (leftVisible && !rightVisible) {
      leftCol.style.width = '50%';
      leftCol.style.margin = '0 auto';
      rightCol.style.display = 'none';
    } else if (!leftVisible && rightVisible) {
      rightCol.style.width = '50%';
      rightCol.style.margin = '0 auto';
      leftCol.style.display = 'none';
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

        item.style.display = filter === 'all' || cat === filter ? '' : 'none';
      });

      headings.forEach((heading) => {
        const catAttr = heading.getAttribute('data-category');
        const cat = catAttr ? catAttr.trim().toLowerCase() : '';

        heading.style.display = filter === 'all' || cat === filter ? '' : 'none';
      });

      updateLayout();
    });
  });

  updateLayout(); // Initial layout
});
