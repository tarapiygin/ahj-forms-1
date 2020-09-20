import toSwitchPopover from './popover';

const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
  e.preventDefault();
  toSwitchPopover(e.currentTarget);
});
