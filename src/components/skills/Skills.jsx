import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';
import Other from './Other';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  AOS.init();

  return (
    <section className="skills section" id="skills">
      <h2
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="section__title"
      >
        Skills
      </h2>
      <span
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="section__subtitle"
      >
        My technical level
      </span>

      <div
        data-aos="fade-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="skills__container container grid"
      >
        <Frontend />
        <Backend />
        <Tools />
        <Other />
      </div>
    </section>
  );
};

export default Skills;
