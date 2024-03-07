import React from 'react';
import './Testimonials.css';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Testimonials = () => {
  AOS.init();

  return (
    <section className="testimonial container section">
      <h2
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="section__title"
      >
        My Clients Say
      </h2>
      <span
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="section__subtitle"
      >
        Testimonial
      </span>

      <Swiper
        data-aos="fade-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="testimonial__container"
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />

              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
