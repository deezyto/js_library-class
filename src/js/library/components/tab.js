import $ from '../core';

$.prototype.onTab = (e, self, selector) => {
  let attribute;
  selector.parentNode.parentNode.querySelectorAll('[data-tab-name]').forEach(item => {
    item.classList.remove('tab-active');
    if (item === e.target) {
      attribute = item.getAttribute('data-tab-name');
      item.classList.add('tab-active');
    }
    if (item.getAttribute('data-tab-name') === attribute) {
      item.classList.add('tab-active');
    }
  });
  return self;
};

$.prototype.tabCreate = function(count) {
  for (let i = 0; i < this.length; i++) {
    this.selector[i].classList.add('tab');
    this.selector[i].querySelector('ul').classList.add('tab-nav');
    this.selector[i].querySelectorAll('li')[0].classList.add('tab-active')

    for (let j = 0; j < count; j++) {
      const li = this.selector[i].querySelectorAll('li')[j];
      const div = this.selector[i].querySelectorAll('div')[j];
      li.setAttribute('data-tab-name', j);
      div.setAttribute('data-tab-name', j);
      div.classList.add('tab-content');
      if (j === 0) {
        div.classList.add('tab-active');
      }
    }
  }
 

  let newSelector = [];
  this.selector[0].querySelectorAll('.tab-nav li').forEach(item => {
    newSelector.push(item);
  });

  this.selector = newSelector;
  this.length = newSelector.length;

  return this;
};