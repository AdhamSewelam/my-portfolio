/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Social = () => {
  return (
    <>
      <div className="home__social">
        <a
          href="https://www.facebook.com/adham.soweilam/"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-facebook"></i>
        </a>

        <a
          href="https://www.instagram.com/sewelaaaaam/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-instagram"></i>
        </a>

        <a
          href="mailto:adham.h.sewelam@gmail.com"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-google"></i>
        </a>

        <a
          href="https://twitter.com/adham_sewelam"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-twitter"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/adham-sewelam-2151b21aa/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-linkedin"></i>
        </a>

        <a
          href="https://github.com/AdhamSewelam"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-github"></i>
        </a>
      </div>
    </>
  );
};

export default Social;
