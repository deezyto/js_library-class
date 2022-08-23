import $ from '../core';

$.prototype.animation = function(e, duration, toNumber = 1, callback) {
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
        callback(e, elapsed, duration, toNumber, end);
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

$.prototype.fadeIn = function({e = 0, duration, toNumber = 1}) {
  console.log(e.target)
  for (let i = 0; i < this.length; i++) {
    const fadeInAnimation = (e, elapsed, duration, toNumber, end) => {
      const count = Math.min(elapsed / duration, toNumber);
      this.selector[i].style.cssText = 'display';
      this.selector[i].style.opacity = count;
        if (count >= toNumber) {
          end = true;
        }
    }
    $.prototype.animation(e, duration, toNumber, fadeInAnimation)
  }
};

$.prototype.fadeOut = function({e = 0, duration, toNumber = 1}) {
  console.log(e.target)
  for (let i = 0; i < this.length; i++) {
    const fadeInAnimation = (e, elapsed, duration, toNumber, end) => {
      const count = Math.min(elapsed / duration, toNumber);
      this.selector[i].style.opacity = toNumber - count;
        if ((1 - count) === 0) {
          this.selector[i].style.cssText = 'display: none';
          end = true;
        }
    }
    $.prototype.animation(e, duration, toNumber, fadeInAnimation)
  }
};