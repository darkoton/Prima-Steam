export default function style(el, className, style, action) {
  for (const key in style) {
    if (Object.prototype.hasOwnProperty.call(style, key)) {
      if (action) {
        if (action === 'add') {
          el.style[key] = style[key];
        } else if (action === 'remove') {
          el.style[key] = '';
        }
      } else {
        if (!el.style[key]) {
          el.style[key] = style[key];
        } else {
          el.style[key] = '';
        }
      }

      if (className.trim()) {
        if (action) {
          if (action === 'add') {
            el.classList.add(className);
          } else if (action === 'remove') {
            el.classList.remove(className);
          }
        } else {
          el.classList.toggle(className);
        }
      }
    }
  }
}
