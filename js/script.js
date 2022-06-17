//burger

let menuBurger = document.querySelector('.menu__burger');
let menuBurgerNav = document.querySelector('.menu__burger-nav');

menuBurger.addEventListener('click', function () {
  menuBurger.classList.toggle('active');
  menuBurgerNav.classList.toggle('active');
})




//slider

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  grabcursor: true,
  slideToClickedSlide: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  autoHeight: true,
  loop: true,
});

