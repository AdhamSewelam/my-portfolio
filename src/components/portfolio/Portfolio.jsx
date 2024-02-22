/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import './portfolio.css';

// LOGOS
import MetalsLogo from '../../assets/Logos/88MetalsLogo.webp';
import ANGORALOGO from '../../assets/Logos/ANGORALOGO.svg';
import COLDPLAYLOGO from '../../assets/Logos/COLDPLAYLOGO.png';
import FAMILYLOGO from '../../assets/Logos/FAMILYLOGO.svg';
import FleekyLogo from '../../assets/Logos/FleekyLogo.webp';
import FOKIRLOGO from '../../assets/Logos/FOKIRLOGO.svg';
import GOCINEMALOGO from '../../assets/Logos/GOCINEMALOGO.svg';
import JOOKERLOGO from '../../assets/Logos/JOOKERLOGO.svg';
import MEDIDISCOVERLOGO from '../../assets/Logos/MEDIDISCOVERLOGO.svg';
import MJDesignsLogo from '../../assets/Logos/MJDesignsLogo.webp';
import MuseLogo from '../../assets/Logos/MuseLogo.png';
import PANTONELOGO from '../../assets/Logos/PANTONELOGO.webp';
import SAINTGIZALOGO from '../../assets/Logos/SAINTGIZALOGO.webp';
import CPHTLOGO from '../../assets/Logos/CPHTLOGO.webp';
import CPTCMARKETINGLOGO from '../../assets/Logos/CPTCMARKETINGLOGO.png';
import CPTCTRADINGLOGO from '../../assets/Logos/CPTCTRADINGLOGO.png';
import PORTFOLIOLOGO from '../../assets/Logos/PORTFOLIOLOGO.png';
import ECOMMERCELOGO from '../../assets/Logos/ECOMMERCELOGO.png';
import WEATHERLOGO from '../../assets/Logos/WEATHERLOGO.png';
import MOVIETRENDINGLOGO from '../../assets/Logos/MOVIETRENDINGLOGO.png';

// SCREENS
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
import CPTC from '../../assets/CPTC.png';
import CPHT from '../../assets/CPHT.png';
import CPM from '../../assets/CP Marketing.png';
import Metals from '../../assets/88metals.png';
import Fleeky from '../../assets/Fleeky.png';
import MJDesigns from '../../assets/MJDesigns.png';
import Muse from '../../assets/Muse.png';
import SAINTGIZA from '../../assets/SAINTGIZA.png';
import Pantone from '../../assets/Pantone.png';

const Portfolio = () => {
  const [toggleState, setToogleState] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const toggleTab = (index) => {
    setToogleState(index);
  };

  const projects = [
    {
      name: 'Pantone Website',
      image: Pantone,
      description:
        'Introducing Pantone Company, your premier destination for expert clothing design, manufacturing, and accessories. We specialize in meeting all your clothing needs, providing contemporary designs for men, women, children, and uniforms, all crafted with top-notch materials for optimal comfort and elegance. Whether you opt for our curated designs or bring your own ideas, we are unwaveringly committed to quality, harnessing the latest technologies to ensure our products stand out in both style and durability. Your satisfaction is paramount to us, and our experienced team is wholly devoted to delivering high-quality products that align with your desires and preferences. Trust Pantone Company to elevate your wardrobe with sophistication and style.',
      link: 'https://pantone-adv.com/',
      logo: PANTONELOGO,
    },
    {
      name: 'Saint Giza Website',
      image: SAINTGIZA,
      description:
        'Saint Giza represents the journey of a broken-hearted individual striving to navigate lifes complexities while instigating significant change across various Egyptian industries such as fashion, music, and art. With a clear vision in mind, Saint Giza endeavors to embody and honor this vision through its endeavors. The designs encapsulate transient emotions, drawing inspiration from diverse sources such as artists, songs, or anime characters. In the essence of Saint Giza, this broken-hearted figure resides ubiquitously, signifying that within every individual lies the potential to be a saint and effect change in their surroundings.',
      link: 'https://saintgiza.com/',
      logo: SAINTGIZALOGO,
    },
    {
      name: 'Muse The Shop Website',
      image: Muse,
      description:
        'Muse the shop is more than just a store; its a haven for dreamers and passionate individuals. Our mission is to accompany them on their beautiful journey by offering problem-solving bags and sleeves. Our products are designed to keep up with their dynamic lifestyles, help them stay organized, and ensure they look good while doing it. At Muse, we believe in supporting our customers as they chase their dreams and pursue their passions.',
      link: 'https://muse-theshop.com/',
      logo: MuseLogo,
    },
    {
      name: 'MJ Designs Website',
      image: MJDesigns,
      description:
        'MJ, established in 2023 by Egyptian entrepreneur Menna Ezz Mj, serves as the ultimate destination for modest women seeking premium, minimalist fashion pieces to make a statement. Catering to women of all ages, MJ offers timeless apparel suitable for every season, year after year. With a commitment to quality and style, MJ aims to satisfy the fashion sensibilities of its diverse clientele. Bolstered by the support of its customers, MJ is embarking on an expansion journey, launching its own website, diversifying production lines, and scaling operations to provide superior service and foster a larger MJ community, thereby making a greater impact.',
      link: 'https://mj-designs.shop/',
      logo: MJDesignsLogo,
    },
    {
      name: 'Fleeky Website',
      image: Fleeky,
      description:
        'Fleeky is the premier destination for individuals in search of the perfect pajamas to enhance their everyday experiences. Crafted with meticulous attention to detail, our pajamas are made from top-quality materials, ensuring a luxurious and comfortable feel against the skin. Whether you are unwinding at home, enjoying a leisurely day, or preparing for a restful nights sleep, our extensive collection has something for everyone. With stylish designs and unparalleled comfort, Fleeky seamlessly blends fashion and coziness, empowering you to embrace comfort without sacrificing style. We believe that everyone deserves to feel confident and beautiful, even in the comfort of their own home.',
      link: 'https://fleeky-eg.com/',
      logo: FleekyLogo,
    },
    {
      name: '88 Metals Website',
      image: Metals,
      description:
        '88metals is a unique slow hand-made brand created by Rofaida Ahmed, specializing in accessories and wearable art pieces. Established in 2019, it stands out as the pioneer in offering a diverse range of items inspired by the elegance of nature, evocative music, and beloved anime characters. With a commitment to quality and safety, the brand meticulously selects materials for its jewelry creations. Each item is imbued with its own distinctive name and narrative, adding an extra layer of depth to the wearers experience.',
      link: 'https://88-metals.com/',
      logo: MetalsLogo,
    },
    {
      name: 'CP Marketing Website',
      image: CPM,
      description:
        'CP Marketing stand for Creative Patterns for Marketing, is a hub of innovative marketing solutions designed to elevate your brand presence and drive success in the digital landscape. Our website showcases a diverse portfolio of projects and an array of services tailored to meet your marketing needs. Services like : Content Creation, Digital Marketing, Web Development, Branding, Video Production, Photography',
      link: 'https://cptc.sa/marketing',
      logo: CPTCMARKETINGLOGO,
    },
    {
      name: 'CPHT (Health Training)',
      image: CPHT,
      description:
        'CPHT stand for Creative Patterns for Health Training, is your gateway to a world of health education, courses, and events. We specialize in developing comprehensive courses led by expert instructors and renowned doctors, aimed at empowering individuals and professionals in the field of healthcare.',
      link: 'https://health-cptc.sa',
      logo: CPHTLOGO,
    },
    {
      name: 'CPTC (Trading Company)',
      image: CPTC,
      description:
        'CPTC stands for Creative Patterns Trading Company is a dynamic trading company engaged in a spectrum of industries, offering comprehensive solutions and products across various sectors. Our expertise lies in identifying market trends, sourcing innovative products, and facilitating trade relationships that drive success for both businesses and consumers.',
      link: 'https://cptc.sa/trading',
      logo: CPTCTRADINGLOGO,
    },
    {
      name: 'Jooker Website',
      image: Jooker,
      description:
        'Jooker website is a digital platform designed to manage and deliver educational courses and training programs online. It provides a centralized location for instructors to create and distribute course materials, track student progress, and manage course content. Jooker website are typically used by educational institutions, corporations, and organizations to deliver training and educational content to their employees or students.',
      link: 'https://jooker.me/',
      logo: JOOKERLOGO,
    },
    {
      name: 'E-Commerce Website',
      image: ECommerce,
      description:
        'ECommerce website can be a valuable tool for businesses looking to expand their customer base and increase their revenue. By providing customers with a convenient and streamlined shopping experience, these websites can help to build customer trust and loyalty, and promote long-term growth and success.',
      link: 'https://ecommrce-mern.onrender.com/',
      logo: ECOMMERCELOGO,
    },
    {
      name: 'Family Bakery',
      image: Bakery,
      description:
        'a bakery website serves as a digital storefront for the bakery, providing potential customers with an easy and convenient way to learn about the bakery.',
      link: 'https://familybakery.netlify.app/',
      logo: FAMILYLOGO,
    },
    {
      name: 'Medi-Discover',
      image: Medical,
      description:
        'medical websites play an important role in providing patients and healthcare professionals with access to reliable and trustworthy health information, as well as tools and resources for managing their health and wellbeing.',
      link: 'https://medi-discover.netlify.app/',
      logo: MEDIDISCOVERLOGO,
    },
    {
      name: 'Trending Movies',
      image: TrendingMovies,
      description:
        'Trending movies website can be a valuable resource for movie enthusiasts, providing them with a comprehensive and up-to-date guide to the latest trends in the film industry. By offering information and insights about the latest releases, these websites can help users to make informed decisions about which movies to see and which to skip.',
      link: 'https://adhamsewelam.github.io/Movies-Search/',
      logo: MOVIETRENDINGLOGO,
    },
    {
      name: 'Weather Website',
      image: Weather,
      description:
        'Weather website can be a valuable resource for anyone who needs to stay informed about current and forecasted weather conditions. By providing users with up-to-date information and alerts about potential weather-related hazards, these websites can help to promote safety and preparedness, and enable users to make informed decisions about their activities and travel plans.',
      link: 'https://adhamsewelam.github.io/WeatherWebsite/',
      logo: WEATHERLOGO,
    },
    {
      name: 'Portfolio Template',
      image: PortfolioTemplate,
      description:
        'Portfolio template website can be a valuable tool for individuals and businesses looking to showcase their work and build their online presence. By providing users with a range of customization options and tools for organizing and displaying their content, these websites can help to highlight their skills and accomplishments, and promote their professional brand.',
      link: 'https://adhamsewelam.github.io/ResposivePortiflio/',
      logo: PORTFOLIOLOGO,
    },
    {
      name: 'Angora',
      image: Angora,
      description:
        'Angora website can be a valuable tool for individuals and businesses looking to showcase their work and build their online presence. By providing users with a range of customization options and tools for organizing and displaying their content, these websites can help to highlight their skills and accomplishments, and promote their professional brand.',
      link: 'https://adhamsewelam.github.io/ResponsiveOnePage/',
      logo: ANGORALOGO,
    },
    {
      name: 'Festival Website',
      image: Festival,
      description:
        'Festival website can be a valuable resource for anyone looking to attend a particular festival or event. By providing users with up-to-date information and tools for planning and navigating their festival experience, these websites can help to enhance the overall festival experience and promote attendance and engagement.',
      link: 'https://adhamsewelam.github.io/AssignmentJS/',
      logo: COLDPLAYLOGO,
    },
    {
      name: 'Fokir',
      image: Fokir,
      description:
        'Fokir website can be a valuable tool for individuals and businesses looking to showcase their work and build their online presence. By providing users with a range of customization options and tools for organizing and displaying their content, these websites can help to highlight their skills and accomplishments, and promote their professional brand.',
      link: 'https://fokirportfolio.netlify.app/',
      logo: FOKIRLOGO,
    },
    {
      name: 'Go Cinema',
      image: GoCinema,
      description:
        'Go Cinema website can be a valuable resource for movie enthusiasts, providing them with a comprehensive and up-to-date guide to the latest trends in the film industry. By offering information and insights about the latest releases, as well as reviews and recommendations from experts and fellow moviegoers, these websites can help users to make informed decisions about which movies to see and which to skip.',
      link: 'https://go-cinema.netlify.app/',
      logo: GOCINEMALOGO,
    },
  ];

  // Logic to calculate total number of pages
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Logic to get the projects for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to handle pagination
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Previous Projects</span>

      <div className="portfolio__container container grid">
        {currentProjects.map((project, index) => (
          <div className="portfolio__content">
            <div>
              <img className="portfolio__logo" src={project.logo} alt="" />
              <h3 className="portfolio__title">{project.name}</h3>
            </div>

            <span
              className="portfolio__button"
              onClick={() => toggleTab(index + 1)}
            >
              View More{' '}
              <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>

            <div
              className={
                toggleState === index + 1
                  ? 'portfolio__modal active-modal'
                  : 'portfolio__modal'
              }
            >
              <div className="portfolio__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times portfolio__modal-close"
                ></i>

                <h3 className="portfolio__modal-title">{project.name}</h3>
                <p className="portfolio__modal-description">
                  {project.description}
                </p>
                <div className="portfolio__modal-link">
                  <a href={project.link} target="_blank">
                    Click Here To See More
                  </a>
                </div>

                <div className="portfolio__modal-services grid">
                  <img src={project.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="portfolio__pagination__buttons">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
