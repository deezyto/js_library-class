import $ from '../core';

$.prototype.slider = function(stepSlide = 1, slideOnPage = 0, points = false) {
  for (let i = 0; i < this.length; i++) {
    const slider = this.selector[i].querySelector('.slider-slides');
    const prev = this.selector[i].querySelector('.slider-nav .prev');
    const next = this.selector[i].querySelector('.slider-nav .next');
    const slide = this.selector[i].querySelector('.slider-slide');
    const slideWidth = window.getComputedStyle(slide).width;
    const sliderPoints = this.selector[i].querySelector('.slider-points');
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
    let indexPoint = 0;

    if (points) {
      const ol = document.createElement('ol');
      const length = Math.floor((slideAll.length / stepSlide));
      console.log(length)
      sliderPoints.append(ol);
      for (let i = 0; i < length; i++) {
        const ol = document.createElement('ol');
        const li = document.createElement('li');

        if (i === 0) {
          li.classList.add('active');
        }
        sliderPoints.querySelector('ol').append(li);
      }
    }

    const removeActive = () => {
      const points = this.selector[i].querySelectorAll('ol li');
      points.forEach(point => {
        point.classList.remove('active');
      });
    }

    const addActive = (index) => {
      const points = this.selector[i].querySelectorAll('ol li');
      points[index].classList.add('active');
    }

    const navPoints = () => {
      const points = this.selector[i].querySelectorAll('ol li');
      points.forEach((point, index) => {
        point.addEventListener('click', (e) => {
          if (e.target === point) {
            console.log('point');
            removeActive();
            addActive(index);
            number = (index * stepSlide);
            indexPoint = index;
            slider.style.transform = `translateX(-${number * slideWidthFilter}%)`;
          }
        });
      });
    }
    navPoints();


    [prev, next].forEach(button => {
      button.addEventListener('click', (e) => {
        console.log('click')
        const points = this.selector[i].querySelectorAll('ol li');
        const length = Math.floor((slideAll.length / stepSlide));
        if (e.target === prev) {
          
          if (number <= 0) {
            number = slideAll.length;
          }
          number -= stepSlide;

          slider.style.transform = `translateX(-${number * slideWidthFilter}%)`;

          if (indexPoint <= 0) {
            indexPoint = length - 1;
          } else {
            indexPoint--;
          }

          removeActive();
          addActive(indexPoint);
          
        } else if (e.target === next) {
          number += stepSlide;
          if (number >= slideAll.length) {
            slider.style.transform = '';
            number = 0;
          } else {
            slider.style.transform = `translateX(-${number * slideWidthFilter}%)`;
          }

          indexPoint++;

          if (indexPoint >= length) {
            indexPoint = 0;
          }
          removeActive();
          addActive(indexPoint);
        }
      });
    });

  }
};