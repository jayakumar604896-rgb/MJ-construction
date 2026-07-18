import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './Brands.module.css';

const brands = [
  { name: 'UltraTech Cement', desc: 'Premium Branded Cement' },
  { name: 'Tata Tiscon', desc: 'ISI-Grade Steel' },
  { name: 'Kajaria Tiles', desc: 'Premium Vitrified Tiles' },
  { name: 'Asian Paints', desc: 'Vibrant Acrylic Colors' },
  { name: 'Jaquar Fittings', desc: 'Premium Sanitaryware' },
  { name: 'Finolex Cables', desc: 'Flame-Retardant Wiring' },
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
