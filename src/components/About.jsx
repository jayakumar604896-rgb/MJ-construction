import { motion } from 'framer-motion';
import { FaAward, FaBuilding, FaUsers, FaArrowRight } from 'react-icons/fa';
import styles from './About.module.css';
import aboutImg from '../assets/about_company.png';

const About = () => {
  const handleContactClick = (e) => {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className={`${styles.aboutSection} section-padding`}>
      <div className="container">
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Visual Left Column */}
          <motion.div className={styles.imageSide} variants={itemVariants}>
            <div className={styles.imageDecoration}></div>
            <div className={styles.imageWrapper}>
              <img src={aboutImg} alt="MJ Construction professional team" />
            </div>
            <div className={styles.experienceBadge}>
              <span className={styles.experienceNumber}>15+</span>
              <span className={styles.experienceText}>Years of<br />Excellence</span>
            </div>
          </motion.div>

          {/* Text Right Column */}
          <motion.div className={styles.textSide} variants={itemVariants}>
            <span className={styles.tagline}>About Our Company</span>
            <h2 className={styles.heading}>
              We Build High-Quality <span>Structures That Last</span>
            </h2>
            <p className={styles.desc}>
              MJ Construction is a premier construction firm dedicated to delivering top-notch infrastructural layouts. For over a decade and a half, we have built a reputation on trust, quality, and commitment. 
              Our multi-disciplinary team handles projects ranging from residential houses to commercial business parks.
            </p>
            <p className={styles.desc} style={{ marginTop: '-15px' }}>
              We bring cutting-edge technology, standard materials, and structural engineering expertise to turn your blueprints into landmark realities.
            </p>

            {/* Statistics Row */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <FaBuilding size={28} color="var(--primary)" style={{ marginBottom: '8px' }} />
                <span className={styles.statNumber}>250+</span>
                <span className={styles.statLabel}>Projects Done</span>
              </div>
              <div className={styles.statCard}>
                <FaUsers size={28} color="var(--primary)" style={{ marginBottom: '8px' }} />
                <span className={styles.statNumber}>180+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.statCard}>
                <FaAward size={28} color="var(--primary)" style={{ marginBottom: '8px' }} />
                <span className={styles.statNumber}>45+</span>
                <span className={styles.statLabel}>Expert Staff</span>
              </div>
            </div>

            <a
              href="#contact"
              onClick={handleContactClick}
              className="btn btn-primary"
            >
              <span>Consult Our Expert</span>
              <FaArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
