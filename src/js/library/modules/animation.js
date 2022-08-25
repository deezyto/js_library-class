import $ from '../core';

$.prototype.animation = function(e, duration, callback) {
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

$.prototype.fadeIn = function({e = 0, duration, toNumber = 1, typeCount = 'opacity'}) {
  for (let i = 0; i < this.length; i++) {
    const fadeInAnimation = (elapsed, end) => {
      const count = Math.min(elapsed / duration, toNumber);
      this.selector[i].style.cssText = 'display';
      this.selector[i].style.cssText = `${typeCount}: ${count};`;
      if (count >= toNumber) {
        end = true;
      }
    }
    $.prototype.animation(e, duration, fadeInAnimation)
  }
};

$.prototype.fadeOut = function({e = 0, duration, toNumber = 1}) {
  console.log(e.target)
  
  for (let i = 0; i < this.length; i++) {
    const fadeInAnimation = (elapsed, end) => {
      const count = Math.min(elapsed / duration, toNumber);
      this.selector[i].style.opacity = toNumber - count;
      if ((toNumber - count) === 0) {
        this.selector[i].style.cssText = 'display: none';
        end = true;
      }
    }
    $.prototype.animation(e, duration, fadeInAnimation)
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

$.prototype.downUp = function({e = 0, duration, toNumber = 100, typeCount = 'height'}) {
  for (let i = 0; i < this.length; i++) {
    const fadeInAnimation = (elapsed, end) => {
      const count = Math.min(elapsed / duration, toNumber);
      this.selector[i].style.cssText = 'display';
      this.selector[i].style.cssText = `${typeCount}: ${count};`;
      console.log(elapsed, 'elapsed')
        if (count >= toNumber) {
          end = true;
        }
    }
    $.prototype.animation(e, duration, fadeInAnimation)
  }
};