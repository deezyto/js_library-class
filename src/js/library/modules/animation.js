import $ from '../core';

$.prototype.animation = function({duration, callback, event = 0}) {
  let timeStart;
  let timePrev = 0;
  let end = false;
  const animate = (time) => {
    if (timeStart === undefined) {
      timeStart = time;
    }
    const elapsed = time - timeStart;
    
    if (timePrev !== time) {
      
      if (callback) {
        callback(elapsed, end);
      }

    }

    if (elapsed < duration) {
      timePrev = time;
      if (!end) {
        window.requestAnimationFrame(animate);
      }
    }
  };

  window.requestAnimationFrame(animate);
};

$.prototype.fadeIn = function({duration, toNumber = 1, typeCount = 'opacity', event = 0}) {
  for (let i = 0; i < this.length; i++) {
    const fadeInAnimation = (elapsed, end) => {
      const count = Math.min(elapsed / duration, toNumber);
      this.selector[i].style.cssText = 'display';
      this.selector[i].style.cssText = `${typeCount}: ${count};`;
      if (count >= toNumber) {
        end = true;
      }
    }
    $.prototype.animation({duration: duration, callback: fadeInAnimation})
  }
};

$.prototype.fadeOut = function({duration, toNumber = 1, event = 0}) {
  
  for (let i = 0; i < this.length; i++) {
    const fadeInAnimation = (elapsed, end) => {
      const count = Math.min(elapsed / duration, toNumber);
      this.selector[i].style.opacity = toNumber - count;
      if ((toNumber - count) === 0) {
        this.selector[i].style.cssText = 'display: none';
        end = true;
      }
    }
    $.prototype.animation({duration: duration, callback: fadeInAnimation})
  }
};

$.prototype.fadeToggle = function({duration}) {
  for (let i = 0; i < this.length; i++) {
    const style = window.getComputedStyle(this.selector[i]).display;
    if (style === 'none') {
      new $(this.selectorName).fadeIn({duration: duration})
    } else {
      new $(this.selectorName).fadeOut({duration: duration})
    }
  }
};

$.prototype.downUp = function({duration, event = 0}) {
  for (let i = 0; i < this.length; i++) {
    this.selector[i].addEventListener('click', () => {
      let count = 0;
      const active = this.selector[i].parentNode.classList.contains('active-content');
      const height = +window.getComputedStyle(this.selector[i].parentNode.querySelector('.downUp-item-content')).height.replace(/px/, '');
      this.selector[i].parentNode.classList.add('active-content');
      const animate = (elapsed) => {
        count = Math.min(elapsed * (height / duration), height);
        if (active) {
          this.selector[i].nextElementSibling.style.cssText = `height: ${height - count}px;`;
          if ((height - count) <= 0) {
            this.selector[i].parentNode.classList.remove('active-content');
            this.selector[i].nextElementSibling.style = '';
          }
        } else {
          this.selector[i].nextElementSibling.style.cssText = `height: ${count}px;`;
        }
      }
      $.prototype.animation({duration: duration, callback: animate});
    });
  }
};