'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './client.module.css';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import imageLoader from "../../../image-loader"

import 'swiper/css';
import 'swiper/css/navigation';

const clients = [
  {
    id: 1,
    name: 'Alkem',
    logo: './client/alkem.png',
    project: 'Pharmaceutical Manufacturing Unit',
    testimonial:
      'Their expertise in pharma-grade construction was evident throughout. The facility meets all regulatory standards and supports seamless operations.',
  },
  {
    id: 2,
    name: 'Lupin',
    logo: './client/lupin.png',
    project: 'Research & Development Campus',
    testimonial:
      'From lab design to energy efficiency, every detail was handled with precision. The campus fosters innovation and collaboration effortlessly.',
  },
  {
    id: 3,
    name: 'Scorpion',
    logo: './client/scorpion.png',
    project: 'Defense Technology Facility',
    testimonial:
      'They delivered a secure, high-performance facility tailored to our strategic needs. Exceptional attention to detail and confidentiality.',
  },
  {
    id: 4,
    name: 'NR Lab',
    logo: './client/nr-lab.png',
    project: 'Advanced Nanotech Lab',
    testimonial:
      'The modular lab design and cleanroom integration exceeded expectations. A future-ready space that empowers cutting-edge research.',
  }
];


const OurClients = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.clientSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Client</span>
          </h2>
          <p className={styles.subtitle}>Experience clinets</p>
          <div className={styles.decorativeLine}></div>
        </div>


        <div className={styles.sliderContainer}>
          <button
            className={`${styles.navigationButton} ${styles.prevButton}`}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            className={`${styles.navigationButton} ${styles.nextButton}`}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={1000}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className={styles.swiper}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className={styles.clientCard}>
                  <div className={styles.logoContainer}>
                    <Image
                      loader={imageLoader}
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={60}
                      className={styles.clientLogo}
                      priority
                    />
                  </div>
                  <div className={styles.clientInfo}>
                    <h3 className={styles.clientName}>{client.name}</h3>
                    <p className={styles.projectType}>{client.project}</p>
                    <div className={styles.testimonialWrapper}>
                      <FaQuoteRight className={styles.quoteIcon} />
                      <p className={styles.testimonial}>{client.testimonial}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurClients;