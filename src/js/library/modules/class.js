import $ from '../core';

$.prototype.addClass = function(...className) {
  for (let i = 0; i < this.length; i++) {
    this.selector[i].classList.add(...className);
  }
  return this;
};

$.prototype.removeClass = function(...className) {
  for (let i = 0; i < this.length; i++) {
    this.selector[i].classList.remove(...className);
  }
  return this;
};

$.prototype.toggleClass = function(...className) {
  const classList = {...className};
  for (let i = 0; i < this.length; i++) {
    for (let item in classList) {
      this.selector[i].classList.toggle(classList[item]);
    }
    
  }
  return this;
};