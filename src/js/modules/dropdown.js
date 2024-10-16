const dropdowns = Array.from(document.querySelectorAll('.header__nav-dropdown'));

const activeList = ['!z-[5]', '!opacity-100'];

const activeIcon = ['!-scale-y-100'];

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
      if (d.dropdown == data.dropdown || d.dropdown == data.dropdown.closest('.header__nav-dropdown.active') || d.dropdown.closest('.header__nav-dropdown.active') == data.dropdown.closest('.header__nav-dropdown.active')) {
        return;
      }
      d.dropdown.classList.remove('active');
      activeList.forEach(cl => d.list.classList.remove(cl));

      if (d.icon) {
        activeIcon.forEach(cl => d.icon.classList.remove(cl));
      }
    });

    const rect = data.list.getBoundingClientRect();

    // Проверяем, выходит ли элемент за правую границу окна
    const isOverflowing = rect.right > window.innerWidth;

    data.dropdown.classList.toggle('active');

    if (isOverflowing) {
      if (data.dropdown != data.dropdown.offsetParent.closest('.header__nav-dropdown') && data.dropdown.offsetParent.closest('.header__nav-dropdown')) {
        [...activeList, '!left-auto', '!right-full'].forEach(cl => data.list.classList.toggle(cl));
      } else {
        [...activeList, '!left-auto', '!right-0'].forEach(cl => data.list.classList.toggle(cl));
      }
    } else {
      activeList.forEach(cl => data.list.classList.toggle(cl));
    }

    if (data.icon) {
      activeIcon.forEach(cl => data.icon.classList.toggle(cl));
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
      activeList.forEach(cl => d.list.classList.remove(cl));

      if (d.icon) {
        activeIcon.forEach(cl => d.icon.classList.remove(cl));
      }
    });
  }
});
