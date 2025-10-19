export default function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    content.hidden = !item.classList.contains('active');
    header.setAttribute('aria-expanded', item.classList.contains('active'));

    header.addEventListener('click', () => {
      item.classList.toggle('active');
      const isActive = item.classList.contains('active');

      header.setAttribute('aria-expanded', isActive);
      content.hidden = !isActive;
    });
  });
}
