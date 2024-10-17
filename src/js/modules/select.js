const selectElements = document.querySelectorAll('.select');

selectElements.forEach(select => {
  const button = select.querySelector('.select-button');
  const value = select.querySelector('.select-value');
  const list = select.querySelector('.select-list');
  const options = select.querySelectorAll('.select-option');

  select.style.position = 'relative';
  ['transition-all', 'absolute', 'top-full', 'left-0', 'w-full', '-z-10', 'opacity-0'].forEach(cl => list.classList.add(cl));

  button.addEventListener('click', () => {
    ['-z-10', 'opacity-0', 'z-10', 'opacity-100'].forEach(cl => list.classList.toggle(cl));

    button.querySelector('svg').classList.toggle('-scale-y-100');
  });

  options.forEach(op => [
    op.addEventListener('click', ({ target }) => {
      value.textContent = target.textContent;
      ['-z-10', 'opacity-0', 'z-10', 'opacity-100'].forEach(cl => list.classList.toggle(cl));
      button.querySelector('svg').classList.toggle('-scale-y-100');
    }),
  ]);
});
