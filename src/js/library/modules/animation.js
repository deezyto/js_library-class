import $ from '../core';

$.prototype.animation = function(e = 0, duration, callback) {
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

$.prototype.downUp = function({e = 0, duration, typeCount = 'height'}) {
  for (let i = 0; i < this.length; i++) {
    this.selector[i].addEventListener('click', (e) => {
      const active = this.selector[i].parentNode.classList.contains('active-content');
      if (!active) {
        let countHeight = 0;
        let countPaddingTop = 0;
        let countPaddingBottom = 0;
        this.selector[i].parentNode.classList.add('active-content');
        const paddingTop = +window.getComputedStyle(this.selector[i].nextElementSibling).paddingTop.replace(/px/, '');
        const paddingBottom = +window.getComputedStyle(this.selector[i].nextElementSibling).paddingBottom.replace(/px/, '');
        const height = +window.getComputedStyle(this.selector[i].nextElementSibling).height.replace(/px/, '');

        const animate = (elapsed) => {
          countHeight = Math.min(elapsed * (height / duration), height);
          countPaddingTop = Math.min(elapsed * (paddingTop / (duration / 2)), paddingTop);
          countPaddingBottom = Math.min(elapsed * (paddingBottom / (duration / 2)), paddingBottom);
          this.selector[i].nextElementSibling.style.cssText = 'display';
          this.selector[i].nextElementSibling.style.cssText = `
          ${typeCount}: ${countHeight}px; 
          padding-top: ${countPaddingTop}px; 
          padding-bottom: ${countPaddingBottom}px;
          `;
        }

        $.prototype.animation(e, duration, animate);
      } else {
        let countHeight = 0;
        let countPaddingTop = 0;
        let countPaddingBottom = 0;
        
        const paddingTop = +window.getComputedStyle(this.selector[i].nextElementSibling).paddingTop.replace(/px/, '');
        const paddingBottom = +window.getComputedStyle(this.selector[i].nextElementSibling).paddingBottom.replace(/px/, '');
        const height = +window.getComputedStyle(this.selector[i].nextElementSibling).height.replace(/px/, '');
        const animate = (elapsed) => {
          countHeight = Math.min(elapsed * (height / duration), height);
          countPaddingTop = Math.min(elapsed * (paddingTop / duration), paddingTop);
          countPaddingBottom = Math.min(elapsed * (paddingBottom / duration), paddingBottom);
          
          this.selector[i].nextElementSibling.style.cssText = `
          ${typeCount}: ${height - countHeight}px; 
          padding-top: ${paddingTop - countPaddingTop}px; 
          padding-bottom: ${paddingBottom - countPaddingBottom}px;
          `;
          if ((height - countHeight) <= 0) {
            this.selector[i].parentNode.classList.remove('active-content');
            this.selector[i].nextElementSibling.style = '';
          }
        }

        $.prototype.animation(e, duration, animate);
      }
      
    });
  }
};