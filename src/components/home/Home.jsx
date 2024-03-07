import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  AOS.init();

  return (
    <>
      <section
        data-aos="fade-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="home section"
        id="home"
      >
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />

            <div className="home__img"></div>

            <Data />
          </div>

          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Home;
