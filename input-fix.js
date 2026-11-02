// Prevent holding Space from generating repeated game inputs. Browser key
// auto-repeat can otherwise repeatedly flap or restart the run while held.
window.addEventListener('keydown', event => {
  if (event.code !== 'Space' || !event.repeat) return;
  event.preventDefault();
  event.stopImmediatePropagation();
}, true);
