const headerBurgerOpen = document.getElementById('burger-open');
const headerBurgerClose = document.getElementById('burger-close');
const headerMenu = document.getElementById('header-menu');
const headerBackward = document.getElementById('header-backward');

function burgerOpen() {
  document.body.classList.toggle('overflow-hidden');
  headerMenu.classList.toggle('!right-0');
  headerBackward.classList.toggle('!z-[1000]');
  headerBackward.classList.toggle('!opacity-100');
}

headerBurgerOpen.addEventListener('click', burgerOpen);
headerBackward.addEventListener('click', burgerOpen);
headerBurgerClose.addEventListener('click', burgerOpen);
