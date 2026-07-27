import { useState, useEffect } from 'react';
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
import { getServices } from '../services/api';

const defaultIconMap = [
  <FaHardHat className={styles.icon} key={1} />,
  <FaHome className={styles.icon} key={2} />,
  <FaPaintRoller className={styles.icon} key={3} />,
  <FaRulerCombined className={styles.icon} key={4} />,
  <FaDraftingCompass className={styles.icon} key={5} />,
  <FaRoad className={styles.icon} key={6} />,
];

const fallbackServices = [
  { title: 'Building Construction', short_desc: 'End-to-end structural construction for corporate business parks, shopping complexes, and residential apartments.' },
  { title: 'Residential Development', short_desc: 'Designing and developing custom smart villas, row houses, and gated layouts that prioritize aesthetic comfort.' },
  { title: 'Interior Renovation', short_desc: 'Stunning modern renovations, customized modular kitchens, glass wall fitouts, and ceiling designs.' },
  { title: 'Project Management', short_desc: 'Meticulous quality audits, safety compliance checks, cost optimization plans, and regulatory approvals.' },
  { title: 'Smart Design & Planning', short_desc: 'Aesthetic 2D blueprint drafts, detailed structural layouts, elevation architecture, and 3D architectural mockups.' },
  { title: 'Infrastructure Construction', short_desc: 'Earth moving excavation, deep pile foundation building, industrial storage warehouses, and layout tarmac roads.' },
];

const Services = () => {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    async function loadData() {
      const data = await getServices();
      if (Array.isArray(data) && data.length > 0) {
        setServices(data);
      }
    }
    loadData();
  }, []);

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
          {services.map((service, index) => (
            <motion.div
              key={service.id || index}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.iconWrapper}>{defaultIconMap[index % defaultIconMap.length]}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.short_desc || service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
