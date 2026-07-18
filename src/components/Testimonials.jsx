import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    name: 'Rajesh Kumar',
    company: 'Homeowner, Madipakkam',
    rating: 5,
    text: 'MJ Construction built our duplex home in Chennai. The process was stress-free and smooth. They maintained exceptional transparency regarding materials, and the quality of woodwork and tile placement is top-notch. Highly recommended!',
    initials: 'RK',
    color: '#FF6B6B',
  },
  {
    name: 'Anjali Sharma',
    company: 'Director, Zenith Ventures',
    rating: 5,
    text: 'We hired MJ Construction for our warehouse steel structure and office park interior. They were highly professional, stuck strictly to safety guidelines, and delivered the finished building 2 weeks before the deadline. Brilliant team.',
    initials: 'AS',
    color: '#4D96FF',
  },
  {
    name: 'Vikram Adhitya',
    company: 'Villa Owner, ECR',
    rating: 5,
    text: 'Outstanding service! Their architectural drawings were very detailed. The smart space optimizations they introduced in the blueprints turned out to be incredibly functional. Driven by quality indeed!',
    initials: 'VA',
    color: '#6BCB77',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={`${styles.testimonialsSection} section-padding`}>
      <div className="container">
        <div className="section-title">
          <h2>Client Testimonials</h2>
          <p>
            Read what our clients say about their experience working with MJ Construction on their building projects.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className={styles.swiper}
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <FaQuoteLeft className={styles.quoteIcon} />
                
                {/* Five star ratings */}
                <div className={styles.stars}>
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>

                <p className={styles.reviewText}>"{item.text}"</p>

                <div className={styles.clientInfo}>
                  <div
                    className={styles.avatar}
                    style={{ background: `linear-gradient(135deg, ${item.color}88, ${item.color})`, color: '#FFFFFF' }}
                  >
                    <span>{item.initials}</span>
                  </div>
                  <div className={styles.clientDetails}>
                    <span className={styles.clientName}>{item.name}</span>
                    <span className={styles.clientCompany}>{item.company}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
