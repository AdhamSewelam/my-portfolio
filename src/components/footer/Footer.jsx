/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sewelam</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/adham.soweilam/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/sewelaaaaam/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="mailto:adham.h.sewelam@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-google"></i>
          </a>

          <a
            href="https://twitter.com/adham_sewelam"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/adham-sewelam-2151b21aa/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/AdhamSewelam"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; AdhamSewelam. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
