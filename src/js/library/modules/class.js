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