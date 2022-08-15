
export default class Core {
  constructor (selector) {
    this.selector = document.querySelectorAll(selector);
    //return this.init();
  }

  init(selector) {
    this.selector = document.querySelectorAll(selector);
    if (!this.selector) {
      return this;
    }
    if (this.selector.tagName) {
      this[0] = this.selector;
      this.length = 1;
      return this;
    }
    console.log(this.selector, this, this.selector.tagName);
  }
  
}
//const $ = Core.init();
Core.prototype.init.prototype = Core.prototype;
window.$ = Core;