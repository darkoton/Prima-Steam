import style from './style.js';

const dropdowns = Array.from(document.querySelectorAll('.header__nav-dropdown'));

const activeList = {
  zIndex: 5,
  opacity: 1,
};
const activeIcon = {
  transform: 'scaleY(-1)',
};

const dropdownsData = dropdowns.map(dropdown => {
  const button = dropdown.querySelector('.dropdown-button');
  const icon = button.querySelector('.header__nav-icon');
  const list = dropdown.querySelector('.dropdown');

  return {
    dropdown: dropdown,
    button: button,
    icon: icon,
    list: list,
  };
});

dropdownsData.forEach(data => {
  data.button.addEventListener('click', () => {
    dropdownsData.forEach(d => {
      if (d.dropdown == data.dropdown || d.dropdown == data.dropdown.closest('.header__nav-dropdown.active')) {
        return;
      }
      d.dropdown.classList.remove('active');
      style(d.list, '', { ...activeList, left: 'auto', right: 0 }, 'remove');
      if (d.icon) {
        style(d.icon, '', activeIcon, 'remove');
      }
    });

    const rect = data.list.getBoundingClientRect();

    // Проверяем, выходит ли элемент за правую границу окна
    const isOverflowing = rect.right > window.innerWidth;

    data.dropdown.classList.toggle('active');

    if (isOverflowing) {
      if (data.dropdown != data.dropdown.offsetParent.closest('.header__nav-dropdown') && data.dropdown.offsetParent.closest('.header__nav-dropdown')) {
        style(data.list, '', { ...activeList, left: 'auto', right: '100%' });
      } else {
        style(data.list, '', { ...activeList, left: 'auto', right: 0 });
      }
    } else {
      style(data.list, '', activeList);
    }

    if (data.icon) {
      style(data.icon, '', activeIcon);
    }
  });

  // data.dropdown.addEventListener('mouseleave', () => {
  //   style(data.list, 'active', activeList, 'remove');
  //   style(data.icon, 'active', activeIcon, 'remove');
  // });
});

window.addEventListener('click', ({ target }) => {
  const dropdown = document.querySelector('.header__nav-dropdown.active');

  if (!dropdown || dropdown == target || target.closest('.header__nav-dropdown.active')) {
    return;
  } else {
    dropdownsData.forEach(d => {
      d.dropdown.classList.remove('active');
      style(d.list, '', activeList, 'remove');
      if (d.icon) {
        style(d.icon, '', activeIcon, 'remove');
      }
    });
  }
});
