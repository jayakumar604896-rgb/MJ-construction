import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaBuilding, FaHome, FaCrown } from 'react-icons/fa';
import styles from './Pricing.module.css';

const packages = [
  {
    name: 'Basic Package',
    icon: <FaHome />,
    price: '1,650',
    unit: 'sq.ft',
    desc: 'Perfect for standard residential houses with basic required specifications.',
    features: [
      { text: 'RCC structural design (standard)', included: true },
      { text: 'Solid brick masonry walls', included: true },
      { text: 'Standard ceramic tile flooring', included: true },
      { text: 'Branded standard sanitaryware', included: true },
      { text: 'Premium interior & exterior paint', included: true },
      { text: 'Modular kitchen woodwork', included: false },
      { text: 'Premium electrical switches/wiring', included: false },
      { text: 'Architectural 3D elevations', included: false },
    ],
    popular: false,
  },
  {
    name: 'Standard Package',
    icon: <FaBuilding />,
    price: '1,950',
    unit: 'sq.ft',
    desc: 'Our most popular package offering premium branded specs.',
    features: [
      { text: 'Seismic-resistant RCC design', included: true },
      { text: 'Red brick premium masonry', included: true },
      { text: 'Double-charged vitrified flooring', included: true },
      { text: 'Jaquar sanitary & bath fittings', included: true },
      { text: 'Asian Paints Premium emulsions', included: true },
      { text: 'Semi-modular kitchen design', included: true },
      { text: 'Finolex cables & Anchor switches', included: true },
      { text: 'Architectural 3D elevations', included: false },
    ],
    popular: true,
  },
  {
    name: 'Premium Package',
    icon: <FaCrown />,
    price: '2,350',
    unit: 'sq.ft',
    desc: 'Luxurious building specifications for custom high-end villas.',
    features: [
      { text: 'Advanced structural RCC design', included: true },
      { text: 'Autoclaved block masonry walls', included: true },
      { text: 'Italian marble & granite flooring', included: true },
      { text: 'Jaquar/Kohler luxury sanitary', included: true },
      { text: 'Asian Paints Royale emulsions', included: true },
      { text: 'Fully modular kitchen & wardrobes', included: true },
      { text: 'Finolex fire-retardant wiring', included: true },
      { text: 'Architectural 3D elevations (Free)', included: true },
    ],
    popular: false,
  },
];

const Pricing = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleConsultClick = (e) => {
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

  return (
    <section id="pricing" className={`${styles.pricingSection} section-padding`}>
      <div className="container">
        <div className="section-title">
          <h2>Construction Packages</h2>
          <p>
            Explore our transparent pricing packages tailored to suit your specific budget, building requirements, and design expectations.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${pkg.popular ? styles.popularCard : ''}`}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {pkg.popular && <span className={styles.popularBadge}>Best Seller</span>}
              
              <div className={styles.header}>
                <div className={styles.iconWrapper}>{pkg.icon}</div>
                <h3 className={styles.name}>{pkg.name}</h3>
                <p className={styles.desc}>{pkg.desc}</p>
                <div className={styles.priceContainer}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.price}>{pkg.price}</span>
                  <span className={styles.unit}>/ {pkg.unit}</span>
                </div>
              </div>

              <ul className={styles.featureList}>
                {pkg.features.map((feat, i) => (
                  <li key={i} className={`${styles.featureItem} ${!feat.included ? styles.excluded : ''}`}>
                    {feat.included ? (
                      <FaCheck className={styles.checkIcon} />
                    ) : (
                      <FaTimes className={styles.timesIcon} />
                    )}
                    <span>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} ${styles.btnAction}`}
                onClick={handleConsultClick}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
