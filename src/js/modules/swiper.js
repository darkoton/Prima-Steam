new Swiper('.catalog__slider', {
  slidesPerView: 1,
  spaceBetween: 10,
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
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

new Swiper('.products__slider', {
  slidesPerView: 1.1,
  spaceBetween: 5,
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
    560: {
      slidesPerView: 2.1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4.3,
      spaceBetween: 30,
    },
  },
});
