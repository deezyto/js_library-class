import $ from '../core';

$.prototype.modal = function() {
  for (let i = 0; i < this.length; i++) {
    const selector = this.selector[i];
    const modal = selector.getAttribute('data-modal-id');
    const close = document.querySelector(`#${modal} .close`);

    [selector, close].forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target)
        if (e.target === selector) {
          document.querySelector(`#${modal}`).parentNode.classList.add('active');
        } else if (e.target === close){
          document.querySelector(`#${modal}`).parentNode.classList.remove('active');
        }
  
      });
    });
  }
  return this;
};