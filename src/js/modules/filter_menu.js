const button = document.querySelector('#filter-menu');
const buttonBack = document.querySelector('#filter-back');
const menu = document.querySelector('.catalog__filter');
const backward = document.querySelector('#filter-menu-backward');

const openMenu = () => {
  ['-left-full', 'left-0'].forEach(cl => menu.classList.toggle(cl));
  ['-left-full', 'left-0', 'opacity-0', 'opacity-100'].forEach(cl => backward.classList.toggle(cl));
};

buttonBack.addEventListener('click', openMenu);
button.addEventListener('click', openMenu);
backward.addEventListener('click', openMenu);
