import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import styles from './PageBanner.module.css';
import defaultBannerBg from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.23 PM (2).jpeg';

const PageBanner = ({ title, subtitle, breadcrumbs = [], bgImage = defaultBannerBg, badge = 'MJ CONSTRUCTION' }) => {
  return (
    <div className={styles.bannerContainer}>
      {/* Background Image with Dark Gradient Mask */}
      <div
        className={styles.bannerBgImage}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={styles.bgOverlay}></div>
      <div className={styles.patternGrid}></div>
      
      <div className="container">
        <div className={styles.bannerContent}>
          {/* Top Brand Badge */}
          {badge && <span className={styles.bannerBadge}>{badge}</span>}

          {/* Title & Subtitle */}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

          {/* Breadcrumb Navigation */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>
              <FaHome size={14} />
              <span>Home</span>
            </Link>
            
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className={styles.crumbItem}>
                <FaChevronRight size={10} className={styles.separator} />
                {crumb.path ? (
                  <Link to={crumb.path} className={styles.breadcrumbLink}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={styles.currentCrumb}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
