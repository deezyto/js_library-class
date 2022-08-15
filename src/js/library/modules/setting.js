import $ from '../core';

$.prototype.ifIndex = function(index) {
  if (index === null) {
    this.selector = this.copySelector[0];
    this.length = this.copySelector[1];
    return this;
  }
  for (let i = 0; i < this.selector.length; i++) {
    if (i === index) {
      console.log(this.selector[i]);
      //this.length = 1;
      this.selector = [this.selector[i]];
      this.length = 1;
    }
  }
  return this;
};