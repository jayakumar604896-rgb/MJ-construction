import { motion } from 'framer-motion';
import { FaPhoneAlt, FaDraftingCompass, FaHardHat, FaKey } from 'react-icons/fa';
import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    icon: <FaPhoneAlt />,
    title: 'Consultation & Estimate',
    desc: 'We meet with you to align on requirements, take site measurements, and prepare a preliminary cost estimate.',
  },
  {
    number: '02',
    icon: <FaDraftingCompass />,
    title: 'Architectural Blueprinting',
    desc: 'Our design team prepares detailed 2D layouts, structural drawings, and 3D exterior elevations for approval.',
  },
  {
    number: '03',
    icon: <FaHardHat />,
    title: 'Precision Construction',
    desc: 'From excavation and concrete foundation laying to column building, brickwork, plastering, and premium finishing.',
  },
  {
    number: '04',
    icon: <FaKey />,
    title: 'Inspection & Handover',
    desc: 'Rigorous structural quality audits are completed before handing over keys, plan manuals, and immediate occupancy certs.',
  },
];

const Process = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="process" className={`${styles.processSection} section-padding`}>
      <div className="container">
        <div className="section-title">
          <h2>Our Construction Process</h2>
          <p>
            We follow a streamlined, 4-step workflow to ensure your project is completed with absolute precision and zero hassle.
          </p>
        </div>

        <motion.div
          className={styles.timelineGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className={styles.timelineItem} variants={cardVariants}>
              <div className={styles.iconNode}>
                <span className={styles.stepNum}>{step.number}</span>
                <div className={styles.iconWrapper}>{step.icon}</div>
              </div>
              <div className={styles.contentNode}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
