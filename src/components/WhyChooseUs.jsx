import { motion } from 'framer-motion';
import { FaUserGraduate, FaGem, FaClock, FaHandshake } from 'react-icons/fa';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    icon: <FaUserGraduate className={styles.icon} />,
    title: 'Expert Engineers',
    desc: 'Our team comprises certified structural engineers, licensed architects, and experienced project coordinators working under one roof.',
  },
  {
    icon: <FaGem className={styles.icon} />,
    title: 'Premium Materials',
    desc: 'We source strictly tested raw materials, including ISI-grade steel, premium branded cement, and top-tier interior aggregates for every structure.',
  },
  {
    icon: <FaClock className={styles.icon} />,
    title: 'On-Time Handover',
    desc: 'We map out detailed project milestone timelines and strict schedules to deliver your building on or before the committed date.',
  },
  {
    icon: <FaHandshake className={styles.icon} />,
    title: '100% Transparency',
    desc: 'Detailed Bill of Quantities (BOQ) with clear pricing breakdowns. Absolutely zero hidden charges or sudden cost escalations.',
  },
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="why-choose-us" className={`${styles.whySection} section-padding`}>
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>
            We set standard benchmarks in quality control, project scheduling, and transparency that make us a trusted name.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
