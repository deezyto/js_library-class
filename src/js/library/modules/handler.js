import $ from '../core';

$.prototype.event = function(event, callback) {
  for (let i = 0; i < this.length; i++) {
    this.selector[i].addEventListener(event, () => {
      console.log('click');
      if (callback) {
        callback();
      }
    });
  }
};