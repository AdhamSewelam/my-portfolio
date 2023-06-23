/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import './portfolio.css';
import Bakery from '../../assets/bakery.png';
import Medical from '../../assets/medi-discover.png';
import TrendingMovies from '../../assets/TrendingMovies.png';
import Weather from '../../assets/Weather.png';
import PortfolioTemplate from '../../assets/PortfolioTemplate.png';
import Angora from '../../assets/Angora.png';
import Festival from '../../assets/Festival.png';
import Fokir from '../../assets/Fokir.png';
import GoCinema from '../../assets/GoCinema.png';
import ECommerce from '../../assets/ECommerce.png';
import Jooker from '../../assets/Jooker.png';

const Portfolio = () => {
  const [toggleState, setToogleState] = useState(0);

  const toggleTab = (index) => {
    setToogleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Previous Projects</span>

      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <div>
            <i className="bx bxs-book portfolio__icon"></i>
            <h3 className="portfolio__title">
              Jooker <br /> Website
            </h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(11)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 11
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Jooker Website</h3>
              <p className="portfolio__modal-description">
                Jooker website is a digital platform designed to manage and
                deliver educational courses and training programs online. It
                provides a centralized location for instructors to create and
                distribute course materials, track student progress, and manage
                course content. Jooker website are typically used by educational
                institutions, corporations, and organizations to deliver
                training and educational content to their employees or students.
              </p>
              <div className="portfolio__modal-link">
                <a href="https://jooker.me/" target="_blank">
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={Jooker} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="bx bx-store portfolio__icon"></i>
            <h3 className="portfolio__title">
              E-Commerce <br /> Website
            </h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(10)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 10
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">E-Commerce Website</h3>
              <p className="portfolio__modal-description">
                ECommerce website can be a valuable tool for businesses looking
                to expand their customer base and increase their revenue. By
                providing customers with a convenient and streamlined shopping
                experience, these websites can help to build customer trust and
                loyalty, and promote long-term growth and success.
              </p>
              <div className="portfolio__modal-link">
                <a href="https://ecommrce-mern.onrender.com/" target="_blank">
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={ECommerce} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="bx bx-baguette portfolio__icon"></i>
            <h3 className="portfolio__title">Family Bakery</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(1)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Family Bakery</h3>
              <p className="portfolio__modal-description">
                a bakery website serves as a digital storefront for the bakery,
                providing potential customers with an easy and convenient way to
                learn about the bakery.
              </p>
              <div className="portfolio__modal-link">
                <a href="https://familybakery.netlify.app/" target="_blank">
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={Bakery} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="bx bx-plus-medical portfolio__icon"></i>
            <h3 className="portfolio__title">Medi-Discover</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(2)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Medi-Discover</h3>
              <p className="portfolio__modal-description">
                medical websites play an important role in providing patients
                and healthcare professionals with access to reliable and
                trustworthy health information, as well as tools and resources
                for managing their health and wellbeing.
              </p>
              <div className="portfolio__modal-link">
                <a href="https://medi-discover.netlify.app/" target="_blank">
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={Medical} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="bx bx-trending-up portfolio__icon"></i>
            <h3 className="portfolio__title">Trending Movies</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(3)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Trending Movies</h3>
              <p className="portfolio__modal-description">
                Trending movies website can be a valuable resource for movie
                enthusiasts, providing them with a comprehensive and up-to-date
                guide to the latest trends in the film industry. By offering
                information and insights about the latest releases, these
                websites can help users to make informed decisions about which
                movies to see and which to skip.
              </p>
              <div className="portfolio__modal-link">
                <a
                  href="https://adhamsewelam.github.io/Movies-Search/"
                  target="_blank"
                >
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={TrendingMovies} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-cloud-sun portfolio__icon"></i>
            <h3 className="portfolio__title">Weather Website</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(4)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Weather Website</h3>
              <p className="portfolio__modal-description">
                Weather website can be a valuable resource for anyone who needs
                to stay informed about current and forecasted weather
                conditions. By providing users with up-to-date information and
                alerts about potential weather-related hazards, these websites
                can help to promote safety and preparedness, and enable users to
                make informed decisions about their activities and travel plans.
              </p>
              <div className="portfolio__modal-link">
                <a
                  href="https://adhamsewelam.github.io/WeatherWebsite/"
                  target="_blank"
                >
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={Weather} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-user-square portfolio__icon"></i>
            <h3 className="portfolio__title">Portfolio Template</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(5)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Portfolio Template</h3>
              <p className="portfolio__modal-description">
                Portfolio template website can be a valuable tool for
                individuals and businesses looking to showcase their work and
                build their online presence. By providing users with a range of
                customization options and tools for organizing and displaying
                their content, these websites can help to highlight their skills
                and accomplishments, and promote their professional brand.
              </p>
              <div className="portfolio__modal-link">
                <a
                  href="https://adhamsewelam.github.io/ResposivePortiflio/"
                  target="_blank"
                >
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={PortfolioTemplate} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-user-square portfolio__icon"></i>
            <h3 className="portfolio__title">Angora</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(6)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 6
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Angora</h3>
              <p className="portfolio__modal-description">
                Angora website can be a valuable tool for individuals and
                businesses looking to showcase their work and build their online
                presence. By providing users with a range of customization
                options and tools for organizing and displaying their content,
                these websites can help to highlight their skills and
                accomplishments, and promote their professional brand.
              </p>
              <div className="portfolio__modal-link">
                <a
                  href="https://adhamsewelam.github.io/ResponsiveOnePage/"
                  target="_blank"
                >
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={Angora} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="bx bx-party portfolio__icon"></i>
            <h3 className="portfolio__title">Festival Website</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(7)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 7
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Festival Website</h3>
              <p className="portfolio__modal-description">
                Festival website can be a valuable resource for anyone looking
                to attend a particular festival or event. By providing users
                with up-to-date information and tools for planning and
                navigating their festival experience, these websites can help to
                enhance the overall festival experience and promote attendance
                and engagement.
              </p>
              <div className="portfolio__modal-link">
                <a
                  href="https://adhamsewelam.github.io/AssignmentJS/"
                  target="_blank"
                >
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={Festival} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-user-square portfolio__icon"></i>
            <h3 className="portfolio__title">Fokir</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(8)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 8
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Fokir</h3>
              <p className="portfolio__modal-description">
                Fokir website can be a valuable tool for individuals and
                businesses looking to showcase their work and build their online
                presence. By providing users with a range of customization
                options and tools for organizing and displaying their content,
                these websites can help to highlight their skills and
                accomplishments, and promote their professional brand.
              </p>
              <div className="portfolio__modal-link">
                <a href="https://fokirportfolio.netlify.app/" target="_blank">
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={Fokir} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-film portfolio__icon"></i>
            <h3 className="portfolio__title">Go Cinema</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(9)}>
            View More{' '}
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 9
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>

              <h3 className="portfolio__modal-title">Go Cinema</h3>
              <p className="portfolio__modal-description">
                Go Cinema website can be a valuable resource for movie
                enthusiasts, providing them with a comprehensive and up-to-date
                guide to the latest trends in the film industry. By offering
                information and insights about the latest releases, as well as
                reviews and recommendations from experts and fellow moviegoers,
                these websites can help users to make informed decisions about
                which movies to see and which to skip.
              </p>
              <div className="portfolio__modal-link">
                <a href="https://go-cinema.netlify.app/" target="_blank">
                  Click Here To See More
                </a>
              </div>

              <div className="portfolio__modal-services grid">
                <img src={GoCinema} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
