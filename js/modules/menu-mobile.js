import outsideclick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuButton) {
    function openMenu(event) {
      event.preventDefault();
      menuList.classList.add('active');
      menuButton.classList.add('active');

      menuButton.setAttribute(
        'aria-expanded',
        menuList.classList.contains('active'),
      );

      outsideclick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');

        menuButton.setAttribute(
          'aria-expanded',
          menuList.classList.contains('active'),
        );
      });
    }

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
