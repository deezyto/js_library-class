export default class Core {
  constructor (selector) {
    this.selector = document.querySelectorAll(selector);
  }

  init() {
    if (!this.selector) {
      return this;
    }
    if (this.selector.tagName) {
      this[0] = this.selector;
      this.length = 1;
      return this;
    }
    console.log(this.selector);
  }
}