import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
  FaCheck,
  FaBuilding,
  FaChevronDown,
  FaCompass,
} from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import styles from './ContactPage.module.css';

import contactBannerBg from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.24 PM (1).jpeg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Villa Construction',
    builtArea: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Enter 10-digit mobile number';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please enter your message or project requirements';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1200);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi MJ Construction, I want to inquire about ${formData.projectType}.\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nArea: ${formData.builtArea} sqft\nMessage: ${formData.message}`;
    window.open(`https://wa.me/918754947759?text=${encodeURIComponent(text)}`, '_blank');
  };

  const contactCards = [
    {
      icon: <FaPhoneAlt size={22} />,
      title: 'Phone Consultation',
      value: '+91 875494 7759',
      link: 'tel:+918754947759',
      sub: 'Mon - Sat: 9:00 AM to 7:00 PM',
    },
    {
      icon: <FaWhatsapp size={24} />,
      title: 'Instant WhatsApp Chat',
      value: '+91 875494 7759',
      link: 'https://wa.me/918754947759',
      sub: '24/7 Fast Customer Response',
    },
    {
      icon: <FaEnvelope size={22} />,
      title: 'Email Inquiry',
      value: 'info@mjconstruction.com',
      link: 'mailto:info@mjconstruction.com',
      sub: 'Send us your blueprints or CAD files',
    },
    {
      icon: <FaMapMarkerAlt size={22} />,
      title: 'Headquarters Office',
      value: 'Nehru Nagar, Chennai',
      link: '#map',
      sub: '12/5, Main Road, TN - 600042',
    },
  ];

  const siteOffices = [
    {
      city: 'Chennai Main HQ',
      address: '12/5, Nehru Nagar, Main Road, Chennai, TN - 600042',
      phone: '+91 875494 7759',
      person: 'Er. M. Jayakumar (Managing Director)',
    },
    {
      city: 'OMR Site & Project Office',
      address: 'Plot 84, Navalur IT Corridor, OMR, Chennai - 603103',
      phone: '+91 875494 7759',
      person: 'Er. R. Karthik (Lead Engineer)',
    },
    {
      city: 'ECR Villa Project Office',
      address: 'No 45, Beach Road, Uthandi, ECR, Chennai - 600119',
      phone: '+91 875494 7759',
      person: 'S. Rajesh (Site Manager)',
    },
  ];

  const faqs = [
    {
      q: 'How do I request an initial site inspection visit?',
      a: 'Simply call us or fill out the contact form. Our senior project engineer will schedule a site visit within 24 to 48 hours to measure land levels and discuss floor plans.'
    },
    {
      q: 'Can I bring my own architectural plans for cost estimation?',
      a: 'Yes! If you already have 2D architectural or structural CAD drawings, you can email them to info@mjconstruction.com or upload them via WhatsApp for a detailed itemized BOQ estimation.'
    },
    {
      q: 'Are site visits and initial plan consultations free of cost?',
      a: 'Yes, initial site visits, land feasibility checks, and initial project cost estimates within Chennai metropolitan area are completely complimentary.'
    }
  ];

  return (
    <div className={styles.contactPage}>
      <PageBanner
        title="Contact Us"
        subtitle="Connect with Our Experienced Civil Engineers & Architects to Discuss Your Dream Construction Project."
        breadcrumbs={[{ label: 'Contact Us' }]}
        bgImage={contactBannerBg}
        badge="REACH OUT TO US"
      />

      {/* Top Quick Contact Cards Grid */}
      <section className="section-padding" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {contactCards.map((card, idx) => (
              <motion.a
                key={idx}
                href={card.link}
                target={card.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={styles.contactCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className={styles.cardIconWrapper}>{card.icon}</div>
                <h3>{card.title}</h3>
                <strong className={styles.cardVal}>{card.value}</strong>
                <span className={styles.cardSub}>{card.sub}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form & Office Info Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Form Side */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Request a Detailed Quotation</h2>
              <p className={styles.formDesc}>
                Fill out the form below with your plot details and construction requirements. Our engineering manager will respond within 24 business hours.
              </p>

              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputRow}>
                    <div className={styles.formGroup}>
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className={`${styles.input} ${errors.name ? styles.inputErr : ''}`}
                      />
                      {errors.name && <span className={styles.errText}>{errors.name}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
                      />
                      {errors.phone && <span className={styles.errText}>{errors.phone}</span>}
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.formGroup}>
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com"
                        className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                      />
                      {errors.email && <span className={styles.errText}>{errors.email}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label>Construction Service *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className={styles.selectInput}
                      >
                        <option value="Residential Villa Construction">Residential Villa Construction</option>
                        <option value="Commercial Building Construction">Commercial Building Construction</option>
                        <option value="Interior Renovation & Fitouts">Interior Renovation & Fitouts</option>
                        <option value="Architectural & 3D Renders">Architectural & 3D Renders</option>
                        <option value="Project Management & Audit">Project Management & Audit</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.formGroup}>
                      <label>Approx Plot / Built-up Area (sq.ft)</label>
                      <input
                        type="text"
                        name="builtArea"
                        value={formData.builtArea}
                        onChange={handleInputChange}
                        placeholder="e.g. 1800 sq.ft"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Site Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. Velachery / OMR, Chennai"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Project Details / Custom Message *</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your requirements (e.g. 3BHK G+1 villa with modular kitchen)..."
                      className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputErr : ''}`}
                    ></textarea>
                    {errors.message && <span className={styles.errText}>{errors.message}</span>}
                  </div>

                  <div className={styles.btnRow}>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ flex: 1 }}>
                      <FaPaperPlane size={14} />
                      <span>{isSubmitting ? 'Sending Details...' : 'Submit Form Inquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="btn btn-secondary"
                      style={{ color: 'var(--dark-bg)', borderColor: 'var(--dark-bg)', gap: '8px' }}
                    >
                      <FaWhatsapp size={18} style={{ color: '#25D366' }} />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className={styles.successState}>
                  <div className={styles.successIconCircle}>
                    <FaCheck size={32} />
                  </div>
                  <h3>Quotation Request Received!</h3>
                  <p>
                    Thank you for reaching out to MJ Construction. Our engineering team has logged your inquiry and will contact you back within 24 business hours.
                  </p>
                  <button onClick={() => setSubmitSuccess(false)} className="btn btn-dark" style={{ marginTop: '16px' }}>
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Office Info & Map Card */}
            <div className={styles.infoContainer}>
              <div className={styles.officeBox}>
                <h3>Office Hours & Contact</h3>
                <ul className={styles.infoList}>
                  <li>
                    <FaClock className={styles.infoIcon} />
                    <div>
                      <strong>Working Hours:</strong>
                      <p>Monday - Saturday: 9:00 AM - 6:30 PM</p>
                      <p>Sunday: Closed (Site Emergency Only)</p>
                    </div>
                  </li>
                  <li>
                    <FaPhoneAlt className={styles.infoIcon} />
                    <div>
                      <strong>Direct Desk Phone:</strong>
                      <p>+91 875494 7759 / +91 98400 12345</p>
                    </div>
                  </li>
                  <li>
                    <FaEnvelope className={styles.infoIcon} />
                    <div>
                      <strong>Official Email:</strong>
                      <p>info@mjconstruction.com</p>
                      <p>projects@mjconstruction.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Embedded Map Card */}
              <div className={styles.mapCard} id="map">
                <h4>
                  <FaCompass style={{ marginRight: '8px', color: 'var(--primary)' }} />
                  Headquarters Map Location
                </h4>
                <div className={styles.mapFrameWrapper}>
                  <iframe
                    title="MJ Construction Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.351647464016!2d80.2078!3d13.0135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzg4LjYiTiA4MMKwMTInMjguMSJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="240"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Site Offices */}
      <section className={`${styles.siteOfficesSection} section-padding`}>
        <div className="container">
          <div className="section-title">
            <h2>Branch & Site Offices</h2>
            <p>Visit our project site offices across key corridors in Chennai.</p>
          </div>

          <div className={styles.officesGrid}>
            {siteOffices.map((office, idx) => (
              <div key={idx} className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <FaBuilding className={styles.officeBuildingIcon} />
                  <h4>{office.city}</h4>
                </div>
                <p className={styles.officeAddr}>{office.address}</p>
                <div className={styles.officeMeta}>
                  <span>In-charge: <strong>{office.person}</strong></span>
                  <span>Contact: <strong>{office.phone}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Contact & Site Visit FAQs</h2>
            <p>Common questions regarding our consultations and site inspection meetings.</p>
          </div>

          <div className={styles.faqWrapper}>
            {faqs.map((faq, i) => (
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
    </div>
  );
};

export default ContactPage;
