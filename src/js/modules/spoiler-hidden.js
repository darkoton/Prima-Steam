const spollersWrapper = document.querySelectorAll('[data-spollers-hidden]');

window.addEventListener('load', () => {
  spollersWrapper.forEach(wrapper => {
    const spollers = wrapper.querySelectorAll('[data-spoller-hidden]');
    const blocks = Array.from(wrapper.querySelectorAll('[data-block-hidden]'));
    const minHeight = Math.min(...blocks.map(b => b.scrollHeight));
    const collapsies = wrapper.querySelectorAll('[data-collapse]');

    blocks
      .filter(b => b.scrollHeight == minHeight)[0]
      .closest('[data-parent-hidden]')
      .querySelector('[data-spoller-hidden]').style.display = 'none';

    collapsies.forEach(collapse => {
      collapse.style.display = 'none';
    });

    blocks.forEach(block => {
      block.style.maxHeight = minHeight + 3 + 'px';
    });

    spollers.forEach(spoller => {
      spoller.addEventListener('click', () => {
        const block = spoller.closest('[data-parent-hidden]').querySelector('[data-block-hidden]');
        const view = spoller.querySelector('[data-view]');
        const collapse = spoller.querySelector('[data-collapse]');

        if (spoller.classList.contains('_active')) {
          block.style.maxHeight = minHeight + 3 + 'px';
          spoller.classList.remove('_active');
          view.style.display = 'inline';
          collapse.style.display = 'none';
          spoller.querySelector('svg').classList.remove('-scale-y-100');
        } else {
          block.style.maxHeight = block.scrollHeight + 'px';
          spoller.classList.add('_active');
          view.style.display = 'none';
          collapse.style.display = 'inline';
          spoller.querySelector('svg').classList.add('-scale-y-100');
        }
      });
    });
  });
});
