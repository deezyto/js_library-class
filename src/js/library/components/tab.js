import $ from '../core';

$.prototype.onTab = (e) => {

  let attribute;
  document.querySelectorAll('[data-tab-name]').forEach(item => {
    item.classList.remove('tab-active');
    if (item === e.target) {
      attribute = item.getAttribute('data-tab-name');
      item.classList.add('tab-active');
    }

    if (item.getAttribute('data-tab-name') === attribute) {
      item.classList.add('tab-active');
    }
    
  });
  return this;
};