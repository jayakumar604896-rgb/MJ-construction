import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCheck,
  FaPaperPlane,
} from 'react-icons/fa';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // 10 digit Indian numbers

    if (!formData.name.trim()) {
      tempErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Phone number must be exactly 10 digits';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Please type a short message';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 1500);
    }
  };

  const handleReset = () => {
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className={`${styles.contactSection} section-padding`}>
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>
            Get in touch with MJ Construction to discuss your building requirements and get a free detailed quotation.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Contact details card */}
          <div className={styles.infoSide}>
            <h3 className={styles.infoTitle}>Office Info</h3>
            <p className={styles.infoSub}>
              Have an upcoming construction project? Call us directly, send an email, or visit our office.
            </p>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <FaPhoneAlt size={18} />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Call Us</span>
                  <a href="tel:+918754947759" className={styles.infoValue} style={{ color: 'inherit', textDecoration: 'none' }}>
                    +91 875494 7759
                  </a>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <FaEnvelope size={18} />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Email Us</span>
                  <a href="mailto:info@mjconstruction.com" className={styles.infoValue} style={{ color: 'inherit', textDecoration: 'none' }}>
                    info@mjconstruction.com
                  </a>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <FaMapMarkerAlt size={18} />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Our Location</span>
                  <span className={styles.infoValue}>
                    12/5, Nehru Nagar, Main Road, Chennai, Tamil Nadu - 600042
                  </span>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <FaClock size={18} />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Working Hours</span>
                  <span className={styles.infoValue}>
                    Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed
                  </span>
                </div>
              </li>
            </ul>

            {/* Social media connections */}
            <div className={styles.socialGroup}>
              <a href="https://facebook.com" className={styles.socialBtn} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className={styles.socialBtn} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className={styles.socialBtn} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className={styles.socialBtn} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Column: Contact form or Success message */}
          <div className={styles.formSide}>
            {!submitSuccess ? (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${
                      errors.name ? styles.inputError : ''
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className={styles.errorText}>{errors.name}</span>
                  )}
                </div>

                {/* Phone */}
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${
                      errors.phone ? styles.inputError : ''
                    }`}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && (
                    <span className={styles.errorText}>{errors.phone}</span>
                  )}
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${
                      errors.email ? styles.inputError : ''
                    }`}
                    placeholder="yourname@gmail.com"
                  />
                  {errors.email && (
                    <span className={styles.errorText}>{errors.email}</span>
                  )}
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Describe Project / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${styles.formTextarea} ${
                      errors.message ? styles.inputError : ''
                    }`}
                    placeholder="E.g., 3BHK Residential villa construction in Chennai ECR..."
                  />
                  {errors.message && (
                    <span className={styles.errorText}>{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary styles.submitBtn"
                  style={{ width: '100%', gap: '10px', display: 'flex', border: 'none' }}
                >
                  <FaPaperPlane size={14} />
                  <span>
                    {isSubmitting ? 'Submitting Details...' : 'Request Free Quote'}
                  </span>
                </button>
              </form>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                  <FaCheck size={32} />
                </div>
                <h3 className={styles.successTitle}>Inquiry Sent!</h3>
                <p className={styles.successDesc}>
                  Thank you for contacting MJ Construction. We have successfully received your inquiry details. Our engineering manager will call you back within 24 business hours.
                </p>
                <button onClick={handleReset} className="btn btn-dark">
                  <span>Send Another Message</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
