import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Branding */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logoContainer}>
              <svg className={styles.logoIcon} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 55 L50 20 L90 55" stroke="var(--primary)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="42" y="38" width="16" height="12" fill="none" stroke="var(--primary)" strokeWidth="3" />
                <line x1="50" y1="38" x2="50" y2="50" stroke="var(--primary)" strokeWidth="2" />
                <line x1="42" y1="44" x2="58" y2="44" stroke="var(--primary)" strokeWidth="2" />
                <path d="M55 55 L55 10 L68 10 L68 55 M68 55 L68 18 L80 18 L80 55 M80 55 L80 28 L92 28 L92 55" fill="var(--white)" opacity="0.85" />
                <path d="M15 80 L25 80 L30 65 L35 80 L45 80 M55 80 L65 80" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" />
              </svg>
              <div className={styles.logoText}>
                <h4 className={styles.logoTitle}>MJ <span>CONSTRUCTION</span></h4>
                <span className={styles.logoSub}>Built on Trust. Driven by Quality.</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              MJ Construction is a premier construction firm in Chennai. We deliver turnkey residential, commercial, interior, and architectural solutions with unyielding commitment to structural perfection and safety.
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com" className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/" className={styles.footerLink}>Home Page</Link>
              </li>
              <li>
                <Link to="/about" className={styles.footerLink}>About Company</Link>
              </li>
              <li>
                <Link to="/services" className={styles.footerLink}>Our Services</Link>
              </li>
              <li>
                <Link to="/packages" className={styles.footerLink}>Packages & Pricing</Link>
              </li>
              <li>
                <Link to="/gallery" className={styles.footerLink}>Project Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className={styles.footerLink}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className={styles.colTitle}>Key Services</h4>
            <ul className={styles.linksList}>
              <li>
                <Link to="/services/building-construction" className={styles.footerLink}>Building Construction</Link>
              </li>
              <li>
                <Link to="/services/residential-development" className={styles.footerLink}>Residential Development</Link>
              </li>
              <li>
                <Link to="/services/interior-renovation" className={styles.footerLink}>Interior Renovation</Link>
              </li>
              <li>
                <Link to="/services/project-management" className={styles.footerLink}>Project Management</Link>
              </li>
              <li>
                <Link to="/services/smart-design-planning" className={styles.footerLink}>Smart Design & Planning</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaPhoneAlt className={styles.contactIcon} />
                <span>+91 875494 7759</span>
              </li>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>info@mjconstruction.com</span>
              </li>
              <li className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>12/5, Nehru Nagar, Main Road, Chennai, TN - 600042</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} MJ Construction. All Rights Reserved.
          </p>
          <div className={styles.bottomLinks}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={styles.footerLink}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
