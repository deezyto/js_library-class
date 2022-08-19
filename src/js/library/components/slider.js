import $ from '../core';

$.prototype.slider = function(stepSlide = 1, slideOnPage = 0) {
  for (let i = 0; i < this.length; i++) {
    const slider = this.selector[i].querySelector('.slider-slides');
    const prev = this.selector[i].querySelector('.slider-nav .prev');
    const next = this.selector[i].querySelector('.slider-nav .next');
    const slide = this.selector[i].querySelector('.slider-slide');
    const slideWidth = window.getComputedStyle(slide).width;
    let slideWidthFilter = slideWidth.replace(/[^0-9]/g, '');
    const slideAll = this.selector[i].querySelectorAll('.slider-slide');
    if (slideOnPage) {
      const calcWidth = 100 / slideOnPage;
      slideAll.forEach(slide => {
        slide.style = `min-width: ${calcWidth}%;`;
      });
      slideWidthFilter = calcWidth;
    }
    let number = 0;

    [prev, next].forEach(button => {
      button.addEventListener('click', (e) => {
        console.log('click')
        
        if (e.target === prev) {
          
          if (number <= 0) {
            number = slideAll.length;
          }
          number -= stepSlide;

          slider.style.transform = `translateX(-${number * slideWidthFilter}%)`;

        } else if (e.target === next) {
          number += stepSlide;
          if (number >= slideAll.length) {
            slider.style.transform = '';
            number = 0;
          } else {
            slider.style.transform = `translateX(-${number * slideWidthFilter}%)`;
          }
        }
      });
    });

  }
};