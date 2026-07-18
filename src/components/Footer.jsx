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
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Branding */}
          <div className={styles.brandCol}>
            <a href="#home" className={styles.logoContainer} onClick={(e) => handleLinkClick(e, 'home')}>
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
            </a>
            <p className={styles.brandDesc}>
              MJ Construction is a leading construction agency in Chennai. We turn visions into structures with premium designs, standard materials, and expert project management.
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
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className={styles.footerLink}>
                  Home Page
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className={styles.footerLink}>
                  About Company
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className={styles.footerLink}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')} className={styles.footerLink}>
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className={styles.footerLink}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className={styles.footerLink}>
                  Building Construction
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className={styles.footerLink}>
                  Residential Development
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className={styles.footerLink}>
                  Interior Renovation
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className={styles.footerLink}>
                  Project Management
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className={styles.footerLink}>
                  Structural Planning
                </a>
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
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className={styles.footerLink} style={{ fontSize: '0.8rem' }}>
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
