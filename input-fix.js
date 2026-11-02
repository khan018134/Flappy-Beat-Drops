// Preserve normal Space activation on controls while suppressing held-key repeats.
window.addEventListener('keydown', event => {
  if (event.code !== 'Space') return;

  const target = event.target;
  if (target instanceof Element && target.closest(
    'button, a[href], input, textarea, select, [contenteditable="true"]'
  )) {
    event.stopImmediatePropagation();
    return;
  }

  if (event.repeat) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}, true);
