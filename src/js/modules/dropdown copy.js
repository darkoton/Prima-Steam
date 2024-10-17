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
  data.button.addEventListener('mouseover', () => {
    // dropdownsData.forEach(d => {
    //   if (d.dropdown == data.dropdown || d.dropdown == data.dropdown.closest('.header__nav-dropdown.active') || d.dropdown.closest('.header__nav-dropdown.active') == data.dropdown.closest('.header__nav-dropdown.active')) {
    //     return;
    //   }

    //   d.dropdown.classList.remove('active');
    //   activeList.forEach(cl => d.list.classList.remove(cl));

    //   if (d.icon) {
    //     activeIcon.forEach(cl => d.icon.classList.remove(cl));
    //   }
    // });

    const rect = data.list.getBoundingClientRect();

    // Проверяем, выходит ли элемент за правую границу окна
    const isOverflowing = rect.right > window.innerWidth;

    data.dropdown.classList.add('active');

    if (isOverflowing) {
      if (data.dropdown != data.dropdown.offsetParent.closest('.header__nav-dropdown') && data.dropdown.offsetParent.closest('.header__nav-dropdown')) {
        [...activeList, '!left-auto', '!right-full'].forEach(cl => data.list.classList.add(cl));
      } else {
        [...activeList, '!left-auto', '!right-0'].forEach(cl => data.list.classList.add(cl));
      }
    } else {
      console.log(data.list);
      activeList.forEach(cl => data.list.classList.add(cl));
    }

    if (data.icon) {
      activeIcon.forEach(cl => data.icon.classList.add(cl));
    }
  });

  let timeout = null;

  data.dropdown.addEventListener('mouseout', ({ target }) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      dropdownsData.forEach(d => {
        d.dropdown.classList.remove('active');
        activeList.forEach(cl => d.list.classList.remove(cl));
        if (d.icon) {
          activeIcon.forEach(cl => d.icon.classList.remove(cl));
        }
      });
    }, 500);
  });
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
