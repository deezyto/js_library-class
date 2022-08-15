import $ from '../core';

$.prototype.ifIndex = function(index = []) {
  if (index === null) {
    this.selector = this.copySelector[0];
    this.length = this.copySelector[1];
    return this;
  }
  let newSelector = [];
  let elem = {...index};
  for (let i = 0; i < this.length; i++) {
    for (let item in elem) {
      if (i === elem[item]) {
        newSelector.push(this.selector[i]);
      }
    }
    
  }
  this.selector = newSelector;
  this.length = newSelector.length;
  return this;
};