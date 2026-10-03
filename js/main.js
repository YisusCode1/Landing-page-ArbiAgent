// Landing de ArbiAgent: marca en la navegación la sección visible.
const links = document.querySelectorAll('nav ul a[href^="#"]');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(a => {
      const active = a.getAttribute('href') === '#' + entry.target.id;
      active ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));
