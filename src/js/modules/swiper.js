new Swiper('.catalog__slider', {
  slidesPerView: 3,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: '.catalog__button-pagination',
  },
  navigation: {
    nextEl: '.catalog__button-next',
    prevEl: '.catalog__button-prev',
  },

  breakpoints: {
    767.8: {},
  },
});

new Swiper('.products__slider', {
  slidesPerView: 4.3,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.products__button-pagination',
  },
  speed: 1000,

  autoplay: {
    delay: 3500,
  },

  navigation: {
    nextEl: '.products__button-next',
    prevEl: '.products__button-prev',
  },

  breakpoints: {
    767.8: {},
  },
});
