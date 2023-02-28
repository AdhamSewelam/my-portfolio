/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './scrollup.css';

const ScrollUp = () => {
  window.addEventListener('scroll', function() {
    const scrollUp = document.querySelector('.scrollup');
    // WHEN THE SCROLL IS HIGHER THAN 500 VIEWPORT HEIGHT,
    // ADD THE SHOW_SCROLL CLASS TO A TAG WITH THE SCROLL-TOP CLASS
    if (this.scrollY >= 500) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
