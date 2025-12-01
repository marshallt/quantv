// Dynamic copyright: "2020–<current year>"
(function () {
  const span = document.getElementById("year");
  if (!span) return;

  const startYear = 2020;
  const currentYear = new Date().getFullYear();

  span.textContent = currentYear > startYear
    ? `${startYear}–${currentYear}`
    : `${startYear}`;
})();

// Mobile nav toggle
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("navLinks");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });
})();

// Ensure the correct nav link shows as active based on current URL
(function () {
  const nav = document.getElementById("navLinks");
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll('a.nav-link'));
  if (links.length === 0) return;

  // Clear any pre-set active classes first
  links.forEach((a) => a.classList.remove('nav-link-active'));

  const path = window.location.pathname.replace(/\/index\.html?$/, '/');
  const normalized = path.endsWith('/') ? 'index.html' : path.split('/').pop();

  // Map homepage path variations to index.html
  const isHome = normalized === '' || normalized === '/' || normalized === 'index.html';

  // Find the best matching link by href filename
  let matched = null;
  links.forEach((a) => {
    const href = a.getAttribute('href') || '';
    const file = href.split('/').pop();
    if (isHome && (file === 'index.html' || file === '' || file === '/')) {
      matched = a;
    } else if (!isHome && file === normalized) {
      matched = a;
    }
  });

  if (matched) {
    matched.classList.add('nav-link-active');
  }
})();
