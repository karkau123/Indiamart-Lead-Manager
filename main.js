import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  
  // Generic function to handle single active state in a NodeList
  const makeClickableGroup = (selector, activeClass = 'active') => {
    const items = document.querySelectorAll(selector);
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        // Only if it's not already active to prevent unnecessary DOM updates
        if (!item.classList.contains(activeClass)) {
          items.forEach(c => c.classList.remove(activeClass));
          item.classList.add(activeClass);
        }
      });
    });
  };

  // 1. Sidebar Menu Items
  makeClickableGroup('.sidebar .menu-item');

  // 2. Contact Items
  makeClickableGroup('.contacts-list .contact-item');

  // 3. Filter Chips
  makeClickableGroup('.chips-container .chip');

  // 4. Top Nav Icons
  makeClickableGroup('.nav-right .nav-icon');

  // 5. Product Cards
  makeClickableGroup('.products-carousel .prod-card', 'active-card');

  // Add simple visual feedback to action buttons
  const buttons = document.querySelectorAll('.action-btn, .buy-btn, .search-btn, .icon-btn, .view-all-prod');
  buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.97)';
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = 'scale(1)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
  });

});
