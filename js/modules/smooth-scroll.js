export default function initSmoothScroll() {
  const internalLink = document.querySelectorAll('.menu-list a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  internalLink.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
