"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './Testimonial.module.css';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import imageLoader from '../../../image-loader';

const testimonials = [
    {
        id: 1,
        name: 'S. Tiwari',
        position: 'Business Owner',
        image: "./testimonial/1.jpg",
        quote: 'Sharma Interiors transformed our office space into a modern, functional environment. Their attention to detail and professionalism exceeded our expectations.',
        rating: 5
    },
    {
        id: 2,
        name: 'R.K. Singh',
        position: 'Restaurant Manager',
        image: "./testimonial/2.jpg",
        quote: 'The wooden work and partitions they installed are simply outstanding. The team was efficient, and the results were exactly what we envisioned.',
        rating: 5
    },
    {
        id: 3,
        name: 'A. Patel',
        position: 'Hotel Director',
        image: "./testimonial/3.jpg",
        quote: 'Their expertise in ceiling work and paneling is remarkable. They delivered the project on time and maintained high quality throughout.',
        rating: 5
    },
    {
        id: 4,
        name: 'J. Sharma',
        position: 'Interior Designer',
        image: "./testimonial/4.jpg",
        quote: 'Sharma Interiors has an incredible eye for design. They helped us create a cohesive look throughout our office that truly reflects our brand.',
        rating: 5
    }
];

const Testimonial = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.container}>


                <div className={styles.header}>
                    <h1 className={styles.title}>
                        What Our Clients  <span className={styles.highlight}>Say</span>
                    </h1>
                    <p className={styles.subtitle}> Hear from our valued clients about their experience working with us</p>
                    <div className={styles.decorativeLine}></div>

                </div>

                <div className={styles.sliderContainer}>
                    <button
                        className={`${styles.navigationButton} ${styles.prevButton}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className={`${styles.navigationButton} ${styles.nextButton}`}
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        speed={1000}
                        onSwiper={(swiper) => {
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
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className={styles.testimonialCard}>
                                    <div className={styles.quoteIcon}>
                                        <FaQuoteLeft />
                                    </div>
                                    <p className={styles.quote}>{testimonial.quote}</p>
                                    <div className={styles.rating}>
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <FaStar key={index} className={styles.star} />
                                        ))}
                                    </div>
                                    <div className={styles.clientInfo}>
                                        <div className={styles.clientImage}>
                                            <Image
                                                loader={imageLoader}
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={60}
                                                height={60}
                                                className={styles.image}
                                            />
                                        </div>
                                        <div className={styles.clientDetails}>
                                            <h4 className={styles.clientName}>{testimonial.name}</h4>
                                            <p className={styles.clientPosition}>{testimonial.position}</p>
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

export default Testimonial;