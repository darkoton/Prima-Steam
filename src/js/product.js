const sliderThumb = new Swiper('.card__gallery-thumb-slider', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,

  breakpoints: {
    1024: {
      direction: 'vertical',
    },
  },
});

const slider = new Swiper('.card__gallery-slider', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.card__gallery-slider-next',
    prevEl: '.card__gallery-slider-prev',
  },
  thumbs: {
    swiper: sliderThumb,
  },
});
