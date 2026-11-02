// Keep keyboard-generated Space repeats from causing rapid flaps or restarts.
// Let focused controls handle Space normally without also triggering game input.
window.addEventListener('keydown', event => {
  if (event.code !== 'Space') return;

  if (event.repeat) {
    event.preventDefault();
    event.stopImmediatePropagation();
    return;
  }

  const target = event.target;
  if (target instanceof Element && target.closest(
    'button, a[href], input, textarea, select, [contenteditable="true"]'
  )) {
    event.stopImmediatePropagation();
  }
}, true);
