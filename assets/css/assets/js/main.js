
// Mobile Side Drawer Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  const closeButton = document.createElement('button');
  closeButton.className = 'menu-close';
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', 'Close menu');
  closeButton.innerHTML = '&times;';
  navLinks.prepend(closeButton);

  function openMenu() {
    navLinks.classList.add('open');
    overlay.classList.add('show');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-active');
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    overlay.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-active');
  }

  menuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Navigate to the selected page
  navLinks.addEventListener('click', event => {
    const link = event.target.closest('a');

    if (link && navLinks.contains(link)) {
      event.preventDefault();
      const destination = link.href;
      closeMenu();
      window.location.assign(destination);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    item.classList.toggle('open');
  });
});

// Menu Search
const searchInput = document.querySelector('#menuSearch');
const productCards = document.querySelectorAll('[data-product]');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    productCards.forEach(card => {
      const productName = (card.dataset.product || '').toLowerCase();
      const category = (card.dataset.category || '').toLowerCase();

      card.hidden = !(
        productName.includes(searchTerm) ||
        category.includes(searchTerm)
      );
    });
  });
}

// Menu Category Filters
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedCategory = button.dataset.filter;

    productCards.forEach(card => {
      const category = card.dataset.category || '';

      card.hidden = !(
        selectedCategory === 'All' ||
        category === selectedCategory
      );
    });
  });
});
