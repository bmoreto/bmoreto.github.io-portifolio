import initAccordion from './modules/accordion.js';
import initSmoothScroll from './modules/smooth-scroll.js';
import initMenuMobile from './modules/menu-mobile.js';
import SlideNav from './modules/slide.js';

if (document.querySelector('.accordion-header')) initAccordion();
initSmoothScroll();
if (document.querySelector('.menu-list')) initMenuMobile();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
