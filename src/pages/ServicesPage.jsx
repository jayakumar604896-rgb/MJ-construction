import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCheckCircle,
  FaHardHat,
  FaDraftingCompass,
  FaCalculator,
  FaKey,
  FaChevronDown,
} from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import { servicesList as fallbackServices } from '../data/servicesData';
import { getServices } from '../services/api';
import styles from './ServicesPage.module.css';

import servicesBannerBg from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.23 PM (2).jpeg';

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    async function loadServices() {
      const data = await getServices();
      if (Array.isArray(data) && data.length > 0) {
        setServices(data);
      }
    }
    loadServices();
  }, []);

  const workflowSteps = [
    {
      step: '01',
      icon: <FaDraftingCompass />,
      title: 'Architectural Design & Vastu Plan',
      desc: 'We draft 2D blueprints, Vastu-compliant layouts, and 3D exterior elevations tailored to your land dimensions.',
    },
    {
      step: '02',
      icon: <FaCalculator />,
      title: 'Transparent Budget Estimation',
      desc: 'A complete itemized bill of quantities (BOQ) with transparent per-sq.ft rate and fixed milestone schedule.',
    },
    {
      step: '03',
      icon: <FaHardHat />,
      title: 'Precision On-Site Execution',
      desc: 'Supervised civil execution using Tata/JSW steel, M25 concrete, and daily WhatsApp photo updates.',
    },
    {
      step: '04',
      icon: <FaKey />,
      title: 'Final Quality Audit & Handover',
      desc: 'Deep cleaning, fixture pressure test, structural warranty certificate issuance, and key ceremony.',
    },
  ];

  const generalFaqs = [
    {
      q: 'What types of construction projects do you handle?',
      a: 'We handle independent residential villas, multi-story apartment complexes, commercial showrooms, corporate IT spaces, interior fitouts, and heavy civil infrastructure.'
    },
    {
      q: 'How do you guarantee material quality on-site?',
      a: 'We conduct lab testing for concrete cube compressive strength and steel tensile testing for every delivery batch. Test reports are shared with the client.'
    },
    {
      q: 'Is architectural design included with turnkey construction packages?',
      a: 'Yes! Our Standard and Premium turnkey packages include 2D architectural drawings, 3D front elevations, and structural load calculations free of charge.'
    },
    {
      q: 'What happens if there are delays in construction?',
      a: 'We operate under a strict timeline guarantee clause. Any unapproved delay on our end incurs a daily compensation credit to the client.'
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <PageBanner
        title="Our Construction Services"
        subtitle="End-to-End Civil Engineering, Architectural Design, and Turnkey Project Execution."
        breadcrumbs={[{ label: 'Services' }]}
        bgImage={servicesBannerBg}
        badge="ENGINEERING EXCELLENCE"
      />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Comprehensive Civil Solutions</h2>
            <p>From initial blueprint to final key handover, explore our full spectrum of specialized construction services.</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <motion.div
                key={service.slug}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.imgBox}>
                  <img src={service.heroImage} alt={service.title} className={styles.cardImg} />
                  <span className={styles.categoryBadge}>{service.category}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.shortDesc}</p>

                  <ul className={styles.featureList}>
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i}>
                        <FaCheckCircle className={styles.checkIcon} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.metaRow}>
                    <div className={styles.metaBadge}>
                      <span className={styles.metaLabel}>Timeline</span>
                      <span className={styles.metaVal}>{service.estTimeline}</span>
                    </div>
                    <div className={styles.metaBadge}>
                      <span className={styles.metaLabel}>Est. Rate</span>
                      <span className={styles.metaVal}>{service.costPerSqFtRange}</span>
                    </div>
                  </div>

                  <Link to={`/services/${service.slug}`} className={`btn btn-primary ${styles.detailsBtn}`}>
                    <span>View Specifications</span>
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Execution Workflow */}
      <section className={`${styles.workflowSection} section-padding`}>
        <div className="container">
          <div className="section-title">
            <h2>Our 4-Step Execution Process</h2>
            <p>A systematic engineering workflow designed for complete peace of mind and zero surprises.</p>
          </div>

          <div className={styles.workflowGrid}>
            {workflowSteps.map((w, idx) => (
              <div key={idx} className={styles.workflowCard}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{w.step}</span>
                  <div className={styles.stepIcon}>{w.icon}</div>
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common queries about our construction processes, timelines, and guarantees.</p>
          </div>

          <div className={styles.faqWrapper}>
            {generalFaqs.map((faq, i) => (
              <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqActive : ''}`}>
                <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{faq.q}</span>
                  <FaChevronDown className={styles.arrowIcon} />
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.faqAnswer}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Need a Tailored Construction Solution for Your Project?</h2>
            <p>Speak directly with our senior project engineers to discuss your site dimensions, requirements, and budget.</p>
            <div className={styles.ctaBtns}>
              <a href="tel:+918754947759" className="btn btn-primary">
                Call +91 875494 7759
              </a>
              <Link to="/packages" className="btn btn-secondary">
                Compare Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
