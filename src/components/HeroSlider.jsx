import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhoneAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import styles from './HeroSlider.module.css';

import hero1 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.17 PM.jpeg';
import hero2 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.18 PM.jpeg';
import hero3 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.18 PM (1).jpeg';

const slidesData = [
  {
    image: hero1,
    subtitle: 'Welcome to MJ Construction',
    title: 'Building Your Dreams With Precision',
    description: 'From architectural layouts to final concrete structural construction, we deliver world-class infrastructure tailored to your commercial and residential needs.',
  },
  {
    image: hero2,
    subtitle: 'Engineering Trust & Quality',
    title: 'Quality Craftsmanship & Solid Materials',
    description: 'Our certified builders and engineers ensure every project stands the test of time, built strictly to Indian structural standards and safety codes.',
  },
  {
    image: hero3,
    subtitle: 'Smart Interior Spaces',
    title: 'Modern Renovations & Luxury Finishing',
    description: 'Transform your existing residence or workspace with elegant styles, premium lighting configurations, and customized modular woodwork.',
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleGetQuoteClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className={styles.heroContainer}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-next-btn',
          prevEl: '.swiper-prev-btn',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={styles.swiper}
      >
        {slidesData.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={index}>
              <div
                className={styles.slide}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className={styles.overlay}></div>
                <div className={styles.contentWrapper}>
                  <div className={styles.content}>
                    {/* Animated Subtitle */}
                    {isActive && (
                      <motion.span
                        className={styles.subtitle}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {slide.subtitle}
                      </motion.span>
                    )}

                    {/* Animated Title */}
                    {isActive && (
                      <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {slide.title.split(' & ').map((part, i) => (
                          <span key={i}>
                            {part}
                            {i === 0 && slide.title.includes(' & ') ? ' &' : ''}
                          </span>
                        ))}
                      </motion.h2>
                    )}

                    {/* Animated Description */}
                    {isActive && (
                      <motion.p
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        {slide.description}
                      </motion.p>
                    )}

                    {/* Animated Buttons */}
                    {isActive && (
                      <motion.div
                        className={styles.buttonGroup}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <a
                          href="#contact"
                          className="btn btn-primary"
                          onClick={handleGetQuoteClick}
                        >
                          <span>Get Free Quote</span>
                          <FaArrowRight size={14} />
                        </a>
                        <a
                          href="#about"
                          className="btn btn-secondary"
                          onClick={handleReadMoreClick}
                        >
                          <span>Our Story</span>
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* Custom Navigation Buttons */}
        <button className={`${styles.navBtn} ${styles.prevBtn} swiper-prev-btn`} aria-label="Previous Slide">
          <FaChevronLeft size={16} />
        </button>
        <button className={`${styles.navBtn} ${styles.nextBtn} swiper-next-btn`} aria-label="Next Slide">
          <FaChevronRight size={16} />
        </button>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
