import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCheckCircle,
  FaChevronRight,
  FaFileDownload,
  FaPhoneAlt,
  FaWhatsapp,
  FaCalculator,
  FaChevronDown,
} from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import { servicesList } from '../data/servicesData';
import styles from './ServiceDetailsPage.module.css';

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  
  // Find current service or default to first service
  const currentService = servicesList.find((s) => s.slug === slug) || servicesList[0];

  // Interactive Cost Estimator State
  const [builtArea, setBuiltArea] = useState(1500);
  const baseRate = 1950; // average calculation base rate per sq.ft

  const estimatedCost = (builtArea * baseRate).toLocaleString('en-IN');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Quick Contact Form State
  const [formState, setFormState] = useState({ name: '', phone: '', note: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `Hi MJ Construction, I am interested in ${currentService.title}.\nName: ${formState.name}\nPhone: ${formState.phone}\nBuilt Area: ${builtArea} sq.ft\nDetails: ${formState.note}`;
    window.open(`https://wa.me/918754947759?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className={styles.serviceDetailsPage}>
      <PageBanner
        title={currentService.title}
        subtitle={currentService.shortDesc}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: currentService.title },
        ]}
        bgImage={currentService.heroImage}
        badge={currentService.category}
      />

      <section className="section-padding">
        <div className="container">
          <div className={styles.detailsLayout}>
            {/* Left Main Content */}
            <div className={styles.mainContent}>
              {/* Hero Image */}
              <div className={styles.heroMedia}>
                <img src={currentService.heroImage} alt={currentService.title} className={styles.heroImg} />
                <span className={styles.badge}>{currentService.category}</span>
              </div>

              {/* Service Overview */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.heading}>Service Overview</h2>
                <p className={styles.description}>{currentService.fullDesc}</p>
              </div>

              {/* Key Features */}
              <div className={styles.sectionBlock}>
                <h3 className={styles.headingSmall}>Key Features & Engineering Highlights</h3>
                <div className={styles.featuresGrid}>
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className={styles.featureCard}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className={styles.sectionBlock}>
                <h3 className={styles.headingSmall}>Technical Specifications</h3>
                <div className={styles.specsTable}>
                  {currentService.specifications.map((spec, i) => (
                    <div key={i} className={styles.specRow}>
                      <span className={styles.specLabel}>{spec.label}</span>
                      <span className={styles.specValue}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope of Deliverables */}
              <div className={styles.sectionBlock}>
                <h3 className={styles.headingSmall}>Scope of Handover Deliverables</h3>
                <ul className={styles.deliverablesList}>
                  {currentService.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <span className={styles.bulletPoint}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instant Cost Estimator Widget */}
              <div className={styles.estimatorCard}>
                <div className={styles.estimatorHeader}>
                  <FaCalculator size={24} className={styles.estimatorIcon} />
                  <div>
                    <h3>Instant Cost Estimator</h3>
                    <p>Slide to estimate total construction investment for {currentService.title}</p>
                  </div>
                </div>

                <div className={styles.estimatorBody}>
                  <div className={styles.sliderControl}>
                    <div className={styles.sliderLabelRow}>
                      <span>Built-up Area:</span>
                      <strong>{builtArea.toLocaleString()} sq.ft</strong>
                    </div>
                    <input
                      type="range"
                      min="600"
                      max="10000"
                      step="100"
                      value={builtArea}
                      onChange={(e) => setBuiltArea(Number(e.target.value))}
                      className={styles.rangeInput}
                    />
                    <div className={styles.rangeMinMax}>
                      <span>600 sq.ft</span>
                      <span>10,000 sq.ft</span>
                    </div>
                  </div>

                  <div className={styles.costDisplay}>
                    <span className={styles.costTitle}>Estimated Budget:</span>
                    <span className={styles.costValue}>₹ {estimatedCost}*</span>
                    <span className={styles.costNotice}>*Based on standard ₹{baseRate}/sq.ft benchmark rate. Excludes plot purchasing cost.</span>
                  </div>
                </div>
              </div>

              {/* Service FAQ Accordion */}
              {currentService.faqs && currentService.faqs.length > 0 && (
                <div className={styles.sectionBlock}>
                  <h3 className={styles.headingSmall}>Service Specific FAQs</h3>
                  <div className={styles.faqList}>
                    {currentService.faqs.map((faq, i) => (
                      <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqActive : ''}`}>
                        <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                          <span>{faq.question}</span>
                          <FaChevronDown className={styles.faqArrow} />
                        </button>
                        <AnimatePresence>
                          {openFaq === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className={styles.faqAnswer}
                            >
                              <p>{faq.answer}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className={styles.sidebar}>
              {/* All Services Navigation */}
              <div className={styles.sidebarWidget}>
                <h4 className={styles.widgetTitle}>All Services</h4>
                <ul className={styles.serviceNavList}>
                  {servicesList.map((serv) => (
                    <li key={serv.slug}>
                      <Link
                        to={`/services/${serv.slug}`}
                        className={`${styles.serviceNavLink} ${
                          serv.slug === currentService.slug ? styles.activeNavLink : ''
                        }`}
                      >
                        <span>{serv.title}</span>
                        <FaChevronRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Brochure Card */}
              <div className={styles.sidebarWidget}>
                <h4 className={styles.widgetTitle}>Download Specification Sheet</h4>
                <p className={styles.widgetText}>
                  Get full technical specifications, structural material standards, and sample contract copies.
                </p>
                <button
                  className="btn btn-secondary"
                  style={{ width: '100%', color: 'var(--dark-bg)', borderColor: 'var(--dark-bg)' }}
                  onClick={() => alert(`Downloading specification PDF for ${currentService.title}...`)}
                >
                  <FaFileDownload size={16} />
                  <span>Download PDF</span>
                </button>
              </div>

              {/* Inquiry Form Widget */}
              <div className={`${styles.sidebarWidget} ${styles.inquiryWidget}`}>
                <h4 className={styles.widgetTitleLight}>Get Quick Quote</h4>
                <p className={styles.widgetTextLight}>
                  Send your plot dimensions and requirements for a personalized estimate.
                </p>

                <form onSubmit={handleFormSubmit} className={styles.inquiryForm}>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={styles.formInput}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className={styles.formInput}
                  />
                  <textarea
                    placeholder="Project details (e.g. 1800 sqft G+1 villa)..."
                    rows="3"
                    value={formState.note}
                    onChange={(e) => setFormState({ ...formState, note: e.target.value })}
                    className={styles.formInput}
                  ></textarea>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <FaWhatsapp size={18} />
                    <span>WhatsApp Inquiry</span>
                  </button>
                </form>

                <div className={styles.directContact}>
                  <FaPhoneAlt size={14} className={styles.phoneIcon} />
                  <span>Call Us: +91 875494 7759</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
