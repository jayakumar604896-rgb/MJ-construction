import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCheckCircle,
  FaChevronRight,
  FaShieldAlt,
  FaCalculator,
  FaWhatsapp,
} from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import { packagesList } from '../data/packagesData';
import styles from './PackageDetailsPage.module.css';

import pkgBannerBg from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.24 PM.jpeg';

const PackageDetailsPage = () => {
  const { slug } = useParams();

  // Find package or fallback to standard package
  const pkg = packagesList.find((p) => p.slug === slug) || packagesList[1];

  // Active Tab State for Specifications
  const [activeTab, setActiveTab] = useState('structure');

  // Interactive Calculator State
  const [plotArea, setPlotArea] = useState(2000);
  const pkgPriceNum = Number(pkg.price.replace(/,/g, ''));
  const totalCost = (plotArea * pkgPriceNum).toLocaleString('en-IN');

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', phone: '', location: '' });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const text = `Hi MJ Construction, I want to book/inquire about ${pkg.name} (₹${pkg.price}/sq.ft).\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nPlot Area: ${plotArea} sq.ft\nEstimated Total: ₹${totalCost}`;
    window.open(`https://wa.me/918754947759?text=${encodeURIComponent(text)}`, '_blank');
  };

  const tabs = [
    { id: 'structure', label: 'Structure & Masonry' },
    { id: 'flooring', label: 'Flooring & Tiles' },
    { id: 'plumbing', label: 'Plumbing & Sanitary' },
    { id: 'electrical', label: 'Electrical Wiring' },
    { id: 'kitchen', label: 'Kitchen & Woodwork' },
    { id: 'doorsWindows', label: 'Doors & Windows' },
    { id: 'painting', label: 'Painting & Finishes' },
  ];

  return (
    <div className={styles.packageDetailsPage}>
      <PageBanner
        title={`${pkg.name} - ₹${pkg.price} / sq.ft`}
        subtitle={pkg.shortDesc}
        breadcrumbs={[
          { label: 'Packages', path: '/packages' },
          { label: pkg.name },
        ]}
        bgImage={pkgBannerBg}
        badge={pkg.badge || 'PACKAGE DETAILS'}
      />

      <section className="section-padding">
        <div className="container">
          <div className={styles.layout}>
            {/* Main Content */}
            <div className={styles.mainContent}>
              {/* Package Header Card */}
              <div className={styles.heroCard}>
                <div className={styles.heroTop}>
                  <div>
                    {pkg.badge && <span className={styles.badge}>{pkg.badge}</span>}
                    <h2 className={styles.heroTitle}>{pkg.name}</h2>
                    <p className={styles.heroSub}>{pkg.overview}</p>
                  </div>
                  <div className={styles.priceBox}>
                    <span className={styles.priceCurr}>₹</span>
                    <span className={styles.priceVal}>{pkg.price}</span>
                    <span className={styles.priceUnit}>/ sq.ft</span>
                  </div>
                </div>
              </div>

              {/* Specification Tabs */}
              <div className={styles.specSection}>
                <h3 className={styles.sectionHeading}>Granular Technical Specifications</h3>

                {/* Tab Navigation */}
                <div className={styles.tabBar}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTabBtn : ''}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className={styles.tabContent}>
                  {pkg.specs[activeTab] ? (
                    <ul className={styles.specList}>
                      {pkg.specs[activeTab].map((item, idx) => (
                        <li key={idx} className={styles.specItem}>
                          <FaCheckCircle className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.noData}>No specific details listed for this category.</p>
                  )}
                </div>
              </div>

              {/* Payment Stage Milestones */}
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionHeading}>Stage-Wise Payment Schedule</h3>
                <p className={styles.subText}>
                  We follow a transparent milestone-linked payment structure. You only pay as each stage of construction is inspected and verified.
                </p>

                <div className={styles.milestoneGrid}>
                  {pkg.paymentMilestones.map((m, idx) => (
                    <div key={idx} className={styles.milestoneCard}>
                      <div className={styles.milestoneHeader}>
                        <span className={styles.milestoneBadge}>{m.percentage}</span>
                        <h4>{m.stage}</h4>
                      </div>
                      <p>{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees & Warranties */}
              <div className={styles.guaranteeBox}>
                <div className={styles.guaranteeHeader}>
                  <FaShieldAlt size={28} className={styles.shieldIcon} />
                  <h3>Warranties & Quality Assurance</h3>
                </div>
                <ul className={styles.guaranteeList}>
                  {pkg.guarantees.map((g, i) => (
                    <li key={i}>
                      <FaCheckCircle className={styles.guaranteeCheck} />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              {/* Package Switcher */}
              <div className={styles.sidebarWidget}>
                <h4 className={styles.widgetTitle}>Compare Packages</h4>
                <ul className={styles.pkgListNav}>
                  {packagesList.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/packages/${p.slug}`}
                        className={`${styles.pkgLink} ${p.slug === pkg.slug ? styles.activePkgLink : ''}`}
                      >
                        <div>
                          <strong>{p.name}</strong>
                          <span className={styles.pkgRate}>₹{p.price} / sq.ft</span>
                        </div>
                        <FaChevronRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost Calculation Widget */}
              <div className={styles.sidebarWidget}>
                <h4 className={styles.widgetTitle}>
                  <FaCalculator size={16} style={{ marginRight: '8px', color: 'var(--primary)' }} />
                  Estimate For Your Plot
                </h4>

                <div className={styles.calcWidgetBody}>
                  <label className={styles.inputLabel}>Built-up Area (sq.ft):</label>
                  <input
                    type="number"
                    value={plotArea}
                    onChange={(e) => setPlotArea(Number(e.target.value))}
                    className={styles.numberInput}
                    min="500"
                    max="20000"
                  />

                  <div className={styles.totalDisplay}>
                    <span>Estimated Total:</span>
                    <strong>₹ {totalCost}</strong>
                  </div>
                </div>
              </div>

              {/* Booking / Consultation Form */}
              <div className={`${styles.sidebarWidget} ${styles.bookingWidget}`}>
                <h4 className={styles.widgetTitleLight}>Book Free Consultation</h4>
                <p className={styles.widgetSubLight}>
                  Speak with our lead engineers to get an official itemized BOQ for {pkg.name}.
                </p>

                <form onSubmit={handleBookingSubmit} className={styles.formStack}>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.inputField}
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={styles.inputField}
                  />
                  <input
                    type="text"
                    placeholder="Construction Location (e.g. OMR, Chennai)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className={styles.inputField}
                  />

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <FaWhatsapp size={18} />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetailsPage;
