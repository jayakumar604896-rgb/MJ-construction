import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheck,
  FaArrowRight,
  FaCalculator,
  FaHome,
  FaBuilding,
  FaCrown,
  FaGem,
} from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import { packagesList } from '../data/packagesData';
import styles from './PackagesPage.module.css';

import packagesBannerBg from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.24 PM.jpeg';

const PackagesPage = () => {
  const [calcSqFt, setCalcSqFt] = useState(1800);
  const [calcPackageSlug, setCalcPackageSlug] = useState('standard-package');

  const selectedPkg = packagesList.find((p) => p.slug === calcPackageSlug) || packagesList[1];
  const pkgPriceNum = Number(selectedPkg.price.replace(/,/g, ''));
  const totalEstimatedCost = (calcSqFt * pkgPriceNum).toLocaleString('en-IN');

  const getPkgIcon = (slug) => {
    switch (slug) {
      case 'basic-package':
        return <FaHome />;
      case 'standard-package':
        return <FaBuilding />;
      case 'premium-package':
        return <FaCrown />;
      case 'luxury-package':
        return <FaGem />;
      default:
        return <FaBuilding />;
    }
  };

  const comparisonRows = [
    {
      category: 'Structure & Cement',
      items: [
        { label: 'Steel Grade', basic: 'Fe500 (Tata/JSW)', std: 'Fe550D Tata Tiscon', prem: 'Fe550D Primary Tata', lux: 'Primary Corrosion Resistant 550D' },
        { label: 'Cement Grade', basic: '53 Grade UltraTech/Dalmia', std: '53 Grade UltraTech/Coromandel', prem: 'UltraTech Weather Plus / ACC Gold', lux: 'UltraTech Super / ACC Gold Water-Shield' },
        { label: 'Masonry Blocks', basic: 'Solid Concrete Blocks', std: 'First-Class Red Bricks', prem: 'AAC Blocks / First Grade Bricks', lux: 'AAC Blocks / First Grade Bricks' },
      ],
    },
    {
      category: 'Flooring & Finishes',
      items: [
        { label: 'Living Room Flooring', basic: 'Vitrified Tiles (2x2 ft)', std: 'Double-Charged Tiles (4x2 ft)', prem: 'Italian Marble / Large Slabs', lux: 'Imported Statuario Italian Marble' },
        { label: 'Master Bedroom', basic: 'Standard Vitrified Tiles', std: 'Premium Vitrified Tiles', prem: 'Wooden Laminate / Marble', lux: 'Imported Italian Marble' },
        { label: 'Staircase Steps', basic: 'Granite / Kota Stone', std: 'Lapotra Grey Granite', prem: 'Leather Granite & Glass Railing', lux: 'Italian Marble & Custom Brass Railing' },
      ],
    },
    {
      category: 'Sanitary & Plumbing',
      items: [
        { label: 'Sanitaryware Brand', basic: 'Parryware / Hindware', std: 'Jaquar / Cera', prem: 'Kohler / Grohe Wall-Hung', lux: 'Toto / Kohler Intelligent Electronic EWCs' },
        { label: 'Plumbing Lines', basic: 'Astral CPVC Pipes', std: 'Ashirvad Heavy Duty CPVC', prem: 'Supreme Schedule 80 CPVC', lux: 'Soundproof Heavy Duty CPVC' },
      ],
    },
    {
      category: 'Electrical & Woodwork',
      items: [
        { label: 'Wiring Cable Brand', basic: 'Anchor / Finolex', std: 'Finolex FR-LSH Copper', prem: 'Finolex FRLS Fire-proof', lux: 'Polycab / Finolex Zero-Halogen' },
        { label: 'Kitchen Cabinetry', basic: 'Not Included', std: 'Semi-Modular Plywood Framework', prem: 'Full BWP Plywood Modular Kitchen', lux: 'Imported German Modular Kitchen' },
        { label: '3D Front Elevation', basic: 'Optional', std: '2D Layout & 3D Render', prem: 'Free 3D Render & VR Walkthrough', lux: 'Full 3D VR & Facade Lighting' },
      ],
    },
  ];

  return (
    <div className={styles.packagesPage}>
      <PageBanner
        title="Construction Packages & Pricing"
        subtitle="Transparent Per Square-Foot Rates with Branded Specification Guarantees."
        breadcrumbs={[{ label: 'Packages' }]}
        bgImage={packagesBannerBg}
        badge="TRANSPARENT PRICING"
      />

      {/* Package Cards Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Select Your Preferred Package</h2>
            <p>Compare our 4 transparent pricing tiers designed for every budget level and villa blueprint.</p>
          </div>

          <div className={styles.packagesGrid}>
            {packagesList.map((pkg, idx) => (
              <motion.div
                key={pkg.slug}
                className={`${styles.packageCard} ${pkg.popular ? styles.popularCard : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {pkg.badge && <span className={styles.badge}>{pkg.badge}</span>}

                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>{getPkgIcon(pkg.slug)}</div>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                  <p className={styles.pkgShortDesc}>{pkg.shortDesc}</p>
                  <div className={styles.priceTag}>
                    <span className={styles.curr}>₹</span>
                    <span className={styles.amount}>{pkg.price}</span>
                    <span className={styles.unit}>/ {pkg.unit}</span>
                  </div>
                </div>

                <div className={styles.specsPreview}>
                  <h4>Key Highlights:</h4>
                  <ul>
                    {pkg.specs.structure.slice(0, 2).map((item, i) => (
                      <li key={i}>
                        <FaCheck className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                    {pkg.specs.flooring.slice(0, 1).map((item, i) => (
                      <li key={i}>
                        <FaCheck className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                    {pkg.specs.plumbing.slice(0, 1).map((item, i) => (
                      <li key={i}>
                        <FaCheck className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/packages/${pkg.slug}`}
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} ${styles.detailsBtn}`}
                  style={!pkg.popular ? { color: 'var(--dark-bg)', borderColor: 'var(--dark-bg)' } : {}}
                >
                  <span>View Details & Specs</span>
                  <FaArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Package Cost Estimator */}
      <section className={`${styles.calcSection} section-padding`}>
        <div className="container">
          <div className={styles.calcBox}>
            <div className={styles.calcHeader}>
              <FaCalculator size={32} className={styles.calcIcon} />
              <div>
                <h2>Instant House Construction Estimator</h2>
                <p>Select your preferred package and built-up area to get a fast estimated budget.</p>
              </div>
            </div>

            <div className={styles.calcBody}>
              <div className={styles.inputGroup}>
                <label>Select Construction Package:</label>
                <select
                  value={calcPackageSlug}
                  onChange={(e) => setCalcPackageSlug(e.target.value)}
                  className={styles.selectInput}
                >
                  {packagesList.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name} (₹{p.price}/sq.ft)
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.sliderHeader}>
                  <label>Total Built-up Area:</label>
                  <strong>{calcSqFt.toLocaleString()} sq.ft</strong>
                </div>
                <input
                  type="range"
                  min="800"
                  max="12000"
                  step="100"
                  value={calcSqFt}
                  onChange={(e) => setCalcSqFt(Number(e.target.value))}
                  className={styles.rangeSlider}
                />
                <div className={styles.sliderMinMax}>
                  <span>800 sq.ft</span>
                  <span>12,000 sq.ft</span>
                </div>
              </div>

              <div className={styles.calcResult}>
                <span className={styles.resultLabel}>Estimated Total Project Cost:</span>
                <span className={styles.resultAmount}>₹ {totalEstimatedCost}</span>
                <p className={styles.resultSub}>
                  Includes full structural RCC work, masonry brickwork, flooring, electrical wiring, plumbing, and painting.
                </p>
                <a
                  href={`https://wa.me/918754947759?text=${encodeURIComponent(
                    `Hi MJ Construction, I estimated ${calcSqFt} sq.ft under ${selectedPkg.name} (Total: ₹${totalEstimatedCost}). I would like a official quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: '16px' }}
                >
                  Request Official Written Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Detailed Specification Matrix</h2>
            <p>Compare every material grade across our construction packages.</p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Specification</th>
                  <th style={{ width: '19.5%' }}>Basic (₹1,650)</th>
                  <th className={styles.popularCol} style={{ width: '19.5%' }}>Standard (₹1,950)</th>
                  <th style={{ width: '19.5%' }}>Premium (₹2,350)</th>
                  <th style={{ width: '19.5%' }}>Luxury (₹2,850)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((cat, i) => (
                  <tr key={i} className={styles.categoryHeaderRow}>
                    <td colSpan="5" className={styles.categoryTitle}>
                      {cat.category}
                    </td>
                  </tr>
                ))}
                {comparisonRows.flatMap((cat) =>
                  cat.items.map((item, idx) => (
                    <tr key={`${cat.category}-${idx}`} className={styles.dataRow}>
                      <td className={styles.featureName}>{item.label}</td>
                      <td>{item.basic}</td>
                      <td className={styles.popularCol}>{item.std}</td>
                      <td>{item.prem}</td>
                      <td>{item.lux}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
