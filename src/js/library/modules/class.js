import $ from '../core';

$.prototype.addClass = function(className) {
  //this[0].clasList.add(className);
  for (let i = 0; i < this.length; i++) {
    console.log(this, 'class');
    this.selector[i].classList.add(className);
  }
  return this;
};

$.prototype.removeClass = function(className) {
  for (let i = 0; i < this.length; i++) {
    console.log(this, 'class');
    this.selector[i].classList.remove(className);
  }
  return this;
};