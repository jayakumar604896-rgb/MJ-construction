import { motion } from 'framer-motion';
import {
  FaHardHat,
  FaHome,
  FaPaintRoller,
  FaRulerCombined,
  FaDraftingCompass,
  FaRoad,
} from 'react-icons/fa';
import styles from './Services.module.css';

const servicesData = [
  {
    icon: <FaHardHat className={styles.icon} />,
    title: 'Building Construction',
    description:
      'End-to-end structural construction for corporate business parks, shopping complexes, and residential apartments with premium build materials.',
  },
  {
    icon: <FaHome className={styles.icon} />,
    title: 'Residential Development',
    description:
      'Designing and developing custom smart villas, row houses, and gated layouts that prioritize aesthetic comfort and spatial efficiency.',
  },
  {
    icon: <FaPaintRoller className={styles.icon} />,
    title: 'Interior Renovation',
    description:
      'Stunning modern renovations, customized modular modular kitchens, glass wall fitouts, and ceiling designs for home and workspace.',
  },
  {
    icon: <FaRulerCombined className={styles.icon} />,
    title: 'Project Management',
    description:
      'Meticulous quality audits, safety compliance checks, cost optimization plans, and regulatory license approvals under one roof.',
  },
  {
    icon: <FaDraftingCompass className={styles.icon} />,
    title: 'Smart Design & Planning',
    description:
      'Aesthetic 2D blueprint drafts, detailed structural layouts, elevation architecture, and 3D architectural mockups before starting execution.',
  },
  {
    icon: <FaRoad className={styles.icon} />,
    title: 'Infrastructure Construction',
    description:
      'Earth moving excavation, deep pile foundation building, industrial storage warehouses, and private layout tarmac roads.',
  },
];

const Services = () => {
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
    <section id="services" className={`${styles.servicesSection} section-padding`}>
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide comprehensive architectural, engineering, and execution services for projects of all sizes and scales.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
