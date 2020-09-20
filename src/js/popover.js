function gettingСoordinates(btnEl, tooltipEl) {
  const { top, left } = btnEl.getBoundingClientRect();
  return {
    top: `${window.scrollY + top - tooltipEl.offsetHeight - 5}px`,
    left: `${window.scrollX + left - ((tooltipEl.offsetWidth - btnEl.offsetWidth) / 2)}px`,
  };
}

export function hidePopover() {
  const tooltip = document.querySelector('.popover');
  const header = tooltip.querySelector('.popover-header');
  const body = tooltip.querySelector('.popover-body');
  header.innerText = '';
  body.innerText = '';
  tooltip.style.top = '';
  tooltip.style.left = '';
  tooltip.classList.remove('popover_visible');
}

export function showPopover(buttonEl) {
  const tooltip = document.querySelector('.popover');
  const header = tooltip.querySelector('.popover-header');
  const body = tooltip.querySelector('.popover-body');
  header.innerText = buttonEl.dataset.title;
  body.innerText = buttonEl.dataset.content;
  tooltip.classList.add('popover_visible');
  const { top, left } = gettingСoordinates(buttonEl, tooltip);
  tooltip.style.top = top;
  tooltip.style.left = left;
}

export default function toSwitchPopover(buttonEl) {
  const tooltip = document.querySelector('.popover');
  if (tooltip.classList.contains('popover_visible')) hidePopover();
  else showPopover(buttonEl);
}
