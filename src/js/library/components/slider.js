import $ from '../core';

$.prototype.slider = function({stepSlide = 1, slideOnPage = 0, points = false, autoSlide = false, slideEnd = false, create = false}) {
  for (let i = 0; i < this.length; i++) {

    if (create) {
      const sliderNav = document.createElement('div');
      sliderNav.classList.add('slider-nav');
      const buttonPrev = document.createElement('button');
      buttonPrev.classList.add('prev');
      const buttonNext = document.createElement('button');
      buttonNext.classList.add('next');
      this.selector[i].prepend(sliderNav);
      this.selector[i].querySelector('.slider-nav').append(buttonPrev, buttonNext);
      const sliderPoints = document.createElement('div');
      sliderPoints.classList.add('slider-points');
      this.selector[i].insertBefore(sliderPoints, this.selector[i].children[1]);
      const sliderSlides = document.createElement('div');
      sliderSlides.classList.add('slider-slides');
      this.selector[i].insertBefore(sliderSlides, this.selector[i].children[2]);
      const countImg = this.selector[i].querySelectorAll('img');

      for (let j = 0; j < countImg.length; j++) {
        const sliderSlide = document.createElement('div');
        sliderSlide.classList.add('slider-slide');
        sliderSlide.append(countImg[j]);
        this.selector[i].querySelector('.slider-slides').append(sliderSlide);
      }
    }

    const slider = this.selector[i].querySelector('.slider-slides');
    const prev = this.selector[i].querySelector('.slider-nav .prev');
    const next = this.selector[i].querySelector('.slider-nav .next');
    const slide = this.selector[i].querySelector('.slider-slide');
    const slideWidth = window.getComputedStyle(slide).width;
    const sliderPoints = this.selector[i].querySelector('.slider-points');
    const slideAll = this.selector[i].querySelectorAll('.slider-slide');
    let slideWidthFilter = slideWidth.replace(/[^0-9]/g, '');
    let number = 0;
    let indexPoint = 0;
    let slideInterval;

    if (slideOnPage) {
      const calcWidth = 100 / slideOnPage;
      slideAll.forEach(slide => {
        slide.style = `min-width: ${calcWidth}%;`;
      });
      slideWidthFilter = calcWidth;
    }

    const pointsLength = () => {
      let length = Math.floor((slideAll.length / stepSlide));

      if (slideAll.length % stepSlide !== 0) {
        length++;
      }
      return length;
    }

    if (points) {
      const ol = document.createElement('ol');
      const length = pointsLength();

      sliderPoints.append(ol);
      for (let i = 0; i < length; i++) {
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

    if (autoSlide && !slideEnd) {
      if (typeof(autoSlide) !== 'number') {
        autoSlide = 500;
      }
      if (!slideInterval) {
        slideInterval = setInterval(() => {
          next.click();
        }, autoSlide);
      }
      ['mouseenter', 'mouseleave'].forEach(event => {
        this.selector[i].addEventListener(event, () => {
          if (event === 'mouseenter') {
            clearInterval(slideInterval);
          } else if (event === 'mouseleave') {
            slideInterval = setInterval(() => {
              next.click();
            }, autoSlide);
          }
        });
      });
    }

    [prev, next].forEach(button => {
      button.addEventListener('click', (e) => {
        const length = pointsLength();
        if (e.target === prev) {
          
          if (number <= 0) {
            if (slideEnd) {
              number = 0;
            } else {
              number = slideAll.length;
            }
          }
          if (number < stepSlide) {
            number = 0;
          } else {
            number -= stepSlide;
          }
          
          slider.style.transform = `translateX(-${number * slideWidthFilter}%)`;

          if (indexPoint <= 0) {
            if (slideEnd) {
              indexPoint = 0;
            } else {
              indexPoint = length - 1;
            }
            
          } else {
            indexPoint--;
          }

          removeActive();
          addActive(indexPoint);
          
        } else if (e.target === next) {
          number += stepSlide;
          if (number >= slideAll.length) {
            if (slideEnd) {
              number = slideAll.length - 1;
            } else {
              slider.style.transform = '';
              number = 0;
            }
            
          } else {
            slider.style.transform = `translateX(-${number * slideWidthFilter}%)`;
          }

          indexPoint++;

          if (indexPoint >= length) {
            if (slideEnd) {
              indexPoint = length - 1;
            } else {
              indexPoint = 0;
            }
            
          }
          removeActive();
          addActive(indexPoint);

        }
      });
    });

  }
};