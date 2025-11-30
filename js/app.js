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
