/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import './header.css';
import './darkmode.css';
import SEWELAMLOGO from '../../assets/ME/SEWELAMLOGO.svg';
import SEWELAMLOGOLIGHT from '../../assets/ME/SEWELAMLOGOLIGHT.svg';

const Header = ({ toggleTheme, theme }) => {
  // CHANGE BACKGROUND HEADER
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    // WHEN THE SCROLL IS HIGHER THAN 200 VIEWPORT HEIGHT,
    // ADD THE SCROLL-HEADER CLASS TO A TAG WITH THE HEADER TAG
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });
  // TOOGLE MENU
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <>
      <header className={`${theme} header`}>
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            <img
              src={theme === 'dark' ? SEWELAMLOGOLIGHT : SEWELAMLOGO}
              alt=""
            />
          </a>

          <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav('#home')}
                  className={
                    activeNav === '#home'
                      ? 'nav__link active-link'
                      : 'nav__link'
                  }
                >
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav('#about')}
                  className={
                    activeNav === '#about'
                      ? 'nav__link active-link'
                      : 'nav__link'
                  }
                >
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav('#skills')}
                  className={
                    activeNav === '#skills'
                      ? 'nav__link active-link'
                      : 'nav__link'
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#services"
                  onClick={() => setActiveNav('#services')}
                  className={
                    activeNav === '#services'
                      ? 'nav__link active-link'
                      : 'nav__link'
                  }
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav('#portfolio')}
                  className={
                    activeNav === '#portfolio'
                      ? 'nav__link active-link'
                      : 'nav__link'
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav('#contact')}
                  className={
                    activeNav === '#contact'
                      ? 'nav__link active-link'
                      : 'nav__link'
                  }
                >
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>

              <li className="nav__item">
                <button
                  className={
                    activeNav === '#' ? 'nav__link active-link' : 'nav__link'
                  }
                  onClick={toggleTheme}
                >
                  <i class="uil uil-moon"></i>
                </button>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className="nav__toogle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
