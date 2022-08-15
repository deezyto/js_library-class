
export default class Core {
  constructor (selector) {
    this.selector = document.querySelectorAll(selector);
    this.length = this.selector.length;
    this.copySelector = [this.selector, this.length];
  }

  init() {
    /* if (!this.selector) {
      return this;
    } */

    //Object.assign(this, this.selector);
    console.log(this.selector);
    return this;
  }
}

Core.prototype.init.prototype = Core.prototype;
window.$ = Core;