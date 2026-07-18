import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header toggle
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Active section highlight
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70; // offset for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
        <div className={styles.container}>
          {/* Brand Logo */}
          <a href="#home" className={styles.logoContainer} onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
            <svg className={styles.logoIcon} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* House roof skeleton */}
              <path d="M10 55 L50 20 L90 55" stroke="var(--primary)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* Window grid */}
              <rect x="42" y="38" width="16" height="12" fill="none" stroke="var(--primary)" strokeWidth="3" />
              <line x1="50" y1="38" x2="50" y2="50" stroke="var(--primary)" strokeWidth="2" />
              <line x1="42" y1="44" x2="58" y2="44" stroke="var(--primary)" strokeWidth="2" />
              {/* Skyscraper background silhouette */}
              <path d="M55 55 L55 10 L68 10 L68 55 M68 55 L68 18 L80 18 L80 55 M80 55 L80 28 L92 28 L92 55" fill="var(--white)" opacity="0.85" />
              {/* M & J letters stylized base */}
              <path d="M15 80 L25 80 L30 65 L35 80 L45 80 M55 80 L65 80" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}>MJ <span>CONSTRUCTION</span></h1>
              <span className={styles.logoSub}>Built on Trust. Driven by Quality.</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                    className={`${styles.navLink} ${
                      activeSection === item.id ? styles.activeLink : ''
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/918754947759"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.9rem', gap: '8px' }}
            >
              <FaWhatsapp size={18} />
              <span>Chat Now</span>
            </a>
          </nav>

          {/* Mobile Hamburger Icon */}
          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`${styles.mobileNavLink} ${
                  activeSection === item.id ? styles.activeLink : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/918754947759"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: '100%', gap: '8px' }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <FaWhatsapp size={20} />
          <span>WhatsApp Chat</span>
        </a>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.overlayVisible : ''}`}
        onClick={toggleMobileMenu}
      ></div>
    </>
  );
};

export default Header;
