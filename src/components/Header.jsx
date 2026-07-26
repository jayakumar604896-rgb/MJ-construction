import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (location.pathname === '/') {
        const sections = ['home', 'about', 'services', 'pricing', 'gallery', 'contact'];
        const scrollPosition = window.scrollY + 100;

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
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (path, sectionId = null) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/' && sectionId) {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 70;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    } else if (sectionId && location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', path: '/', sectionId: 'home' },
    { label: 'About', path: '/about', sectionId: 'about' },
    { label: 'Services', path: '/services', sectionId: 'services' },
    { label: 'Packages', path: '/packages', sectionId: 'pricing' },
    { label: 'Gallery', path: '/gallery', sectionId: 'gallery' },
    { label: 'Contact Us', path: '/contact', sectionId: 'contact' },
  ];

  const isLinkActive = (item) => {
    if (location.pathname === item.path) return true;
    if (location.pathname === '/' && activeSection === item.sectionId) return true;
    return false;
  };

  return (
    <>
      <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
        <div className={styles.container}>
          {/* Brand Logo */}
          <Link to="/" className={styles.logoContainer} onClick={() => setIsMobileMenuOpen(false)}>
            <svg className={styles.logoIcon} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 55 L50 20 L90 55" stroke="var(--primary)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="42" y="38" width="16" height="12" fill="none" stroke="var(--primary)" strokeWidth="3" />
              <line x1="50" y1="38" x2="50" y2="50" stroke="var(--primary)" strokeWidth="2" />
              <line x1="42" y1="44" x2="58" y2="44" stroke="var(--primary)" strokeWidth="2" />
              <path d="M55 55 L55 10 L68 10 L68 55 M68 55 L68 18 L80 18 L80 55 M80 55 L80 28 L92 28 L92 55" fill="var(--dark-bg)" opacity="0.15" />
              <path d="M15 80 L25 80 L30 65 L35 80 L45 80 M55 80 L65 80" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}>MJ <span>CONSTRUCTION</span></h1>
              <span className={styles.logoSub}>Built on Trust. Driven by Quality.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item.path, item.sectionId)}
                    className={`${styles.navLink} ${isLinkActive(item) ? styles.activeLink : ''}`}
                  >
                    {item.label}
                  </Link>
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
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                onClick={() => handleNavClick(item.path, item.sectionId)}
                className={`${styles.mobileNavLink} ${isLinkActive(item) ? styles.activeLink : ''}`}
              >
                {item.label}
              </Link>
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
