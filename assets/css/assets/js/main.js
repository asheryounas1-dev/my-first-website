
// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      navLinks.classList.contains('open')
    );
  });
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    item.classList.toggle('open');
  });
});

// Menu search
const searchInput = document.querySelector('#menuSearch');
const productCards = document.querySelectorAll('[data-product]');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    productCards.forEach(card => {
      const productName = card.dataset.product.toLowerCase();
      const category = card.dataset.category.toLowerCase();

      card.hidden = !(
        productName.includes(searchTerm) ||
        category.includes(searchTerm)
      );
    });
  });
}

// Menu category filters
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedCategory = button.dataset.filter;

    productCards.forEach(card => {
      const category = card.dataset.category;

      card.hidden = !(
        selectedCategory === 'All' ||
        category === selectedCategory
      );
    });
  });
});
