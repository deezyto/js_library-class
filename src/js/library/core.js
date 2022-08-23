
export default class Core {
  constructor (selector) {
    this.selector = document.querySelectorAll(selector);
    this.selectorName = selector;
    this.length = this.selector.length;
    this.copySelector = [this.selector, this.length];
  }

  init() {
    if (!this.selector) {
      return this;
    }
    
    return this;
  }
}

Core.prototype.init.prototype = Core.prototype;
window.$ = Core;