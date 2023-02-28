import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [toggleState, setToogleState] = useState(0);

  const toggleTab = (index) => {
    setToogleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{' '}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">User Interface.</p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Responsive Web Design
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Website Maintenance and Support
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Frontend Development for E-commerce Sites
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Performance Optimization
                    </p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More{' '}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Server-Side Development.
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Web Application Development
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Database Design and Optimization
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">Database Development</p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Cloud Infrastructure Management
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Security and Data Privacy
                    </p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Software <br /> Engineering
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More{' '}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Software Engineering</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Custom Software Development
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Software Architecture Design
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Software Testing and Quality Assurance
                    </p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">Database Development</p>
                  </i>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Agile Software Development
                    </p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
