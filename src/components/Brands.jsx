import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './Brands.module.css';

import ultratechLogo from '../assets/brands/ultratech.svg';
import tataLogo from '../assets/brands/tata-tiscon.svg';
import kajariaLogo from '../assets/brands/kajaria.svg';
import asianPaintsLogo from '../assets/brands/asian-paints.svg';
import jaquarLogo from '../assets/brands/jaquar.svg';
import finolexLogo from '../assets/brands/finolex.svg';
import jswLogo from '../assets/brands/jsw-steel.svg';
import astralLogo from '../assets/brands/astral.svg';
import kohlerLogo from '../assets/brands/kohler.svg';
import accLogo from '../assets/brands/acc.svg';

const brands = [
  { name: 'UltraTech Cement', desc: 'Premium Branded Cement', logo: ultratechLogo },
  { name: 'Tata Tiscon', desc: 'ISI-Grade Steel', logo: tataLogo },
  { name: 'Kajaria Tiles', desc: 'Premium Vitrified Tiles', logo: kajariaLogo },
  { name: 'Asian Paints', desc: 'Vibrant Acrylic Colors', logo: asianPaintsLogo },
  { name: 'Jaquar Fittings', desc: 'Premium Sanitaryware', logo: jaquarLogo },
  { name: 'Finolex Cables', desc: 'Flame-Retardant Wiring', logo: finolexLogo },
  { name: 'JSW Steel', desc: 'Fe550D TMT Bars', logo: jswLogo },
  { name: 'Astral Pipes', desc: 'CPVC Plumbing Systems', logo: astralLogo },
  { name: 'Kohler', desc: 'Luxury Bathware', logo: kohlerLogo },
  { name: 'ACC Cement', desc: 'High-Strength Concrete', logo: accLogo },
];

const Brands = () => {
  return (
    <section className={styles.brandsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSubtitle}>Quality Verified Materials</span>
          <h2 className={styles.sectionTitle}>Branded Materials We Use</h2>
          <p className={styles.sectionDesc}>
            We build with standard, certified materials from top-tier national brands to ensure longevity and safety.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className={styles.swiper}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className={styles.brandCard}>
                <div className={styles.logoWrapper}>
                  <img src={brand.logo} alt={`${brand.name} logo`} className={styles.brandLogo} />
                </div>
                <span className={styles.brandName}>{brand.name}</span>
                <span className={styles.brandDesc}>{brand.desc}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;

