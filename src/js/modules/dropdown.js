const dropdowns = document.querySelectorAll('.header__nav-dropdown');

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('button');
  const list = dropdown.querySelector('ul');

  button.addEventListener('click', () => {
    list.classList.toggle('z-[5]');
    list.classList.toggle('opacity-100');
  });
});
