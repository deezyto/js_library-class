import $ from '../core';

class test extends $ {
  constructor(className) {
    console.log('class', this)
    return this;
  }
}
$.prototype.addClass = function(className) {
  console.log('class', this)
  /* for (let i = 0; i < this.length; i++) {
    console.log(this, 'class')
    this[0].clasList.add(className);
  } */
  return this;
};