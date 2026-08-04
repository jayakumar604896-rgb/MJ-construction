import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRulerCombined,
  FaSlidersH,
} from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import styles from './GalleryPage.module.css';

// Import local images
import galleryBannerBg from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.24 PM (1).jpeg';
import res1 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.20 PM (2).jpeg';
import res2 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.20 PM (3).jpeg';
import com1 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.21 PM.jpeg';
import com2 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.21 PM (1).jpeg';
import int1 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.21 PM (2).jpeg';
import int2 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.22 PM.jpeg';

const allProjects = [
  {
    id: 1,
    image: res1,
    title: 'Emerald Luxury Gated Villa',
    category: 'residential',
    categoryLabel: 'Residential Villa',
    location: 'ECR, Chennai',
    year: '2025',
    area: '4,200 sq.ft',
    desc: 'Contemporary 4BHK luxury beachfront villa with private pool and teakwood elevation louver facade.',
  },
  {
    id: 2,
    image: com1,
    title: 'Vanguard Business IT Park',
    category: 'commercial',
    categoryLabel: 'Commercial Building',
    location: 'OMR, Chennai',
    year: '2024',
    area: '28,000 sq.ft',
    desc: '7-story structural steel and double-glazed curtain glass corporate headquarters.',
  },
  {
    id: 3,
    image: int1,
    title: 'Warm Walnut Modular Kitchen',
    category: 'interior',
    categoryLabel: 'Interior Fitout',
    location: 'Anna Nagar, Chennai',
    year: '2025',
    area: '1,400 sq.ft',
    desc: 'BWP marine plywood kitchen with quartz countertop, soft-close Blum hardware & LED profile lights.',
  },
  {
    id: 4,
    image: res2,
    title: 'Aura Waterfront Duplex Residence',
    category: 'residential',
    categoryLabel: 'Residential Villa',
    location: 'Velachery, Chennai',
    year: '2025',
    area: '3,100 sq.ft',
    desc: 'Vastu-compliant modern duplex home with double-height living room and Italian marble flooring.',
  },
  {
    id: 5,
    image: com2,
    title: 'Apex Logistic Hub & Warehouse',
    category: 'commercial',
    categoryLabel: 'Commercial Infrastructure',
    location: 'Sriperumbudur',
    year: '2024',
    area: '45,000 sq.ft',
    desc: 'PEB steel structure industrial warehouse with VDF concrete heavy-duty load flooring.',
  },
  {
    id: 6,
    image: int2,
    title: 'Zen Penthouse Living Lounge',
    category: 'interior',
    categoryLabel: 'Interior Fitout',
    location: 'Nungambakkam, Chennai',
    year: '2026',
    area: '2,200 sq.ft',
    desc: 'Minimalist luxury lounge with Gyproc ceiling, cove mood lighting, and customized wall panelling.',
  },
];

const GalleryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Before & After Transformation Slider State
  const [sliderPos, setSliderPos] = useState(50);

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter((p) => p.category === selectedFilter));
    }
  }, [selectedFilter]);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev(e);
      if (e.key === 'ArrowRight') showNext(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredProjects]);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Villas' },
    { id: 'commercial', label: 'Commercial Buildings' },
    { id: 'interior', label: 'Interior Fitouts' },
  ];

  return (
    <div className={styles.galleryPage}>
      <PageBanner
        title="Architectural & Project Gallery"
        subtitle="Explore Our Portfolio of Landmark Constructions, Custom Villas, and High-End Interior Remodels."
        breadcrumbs={[{ label: 'Gallery' }]}
        bgImage={galleryBannerBg}
        badge="PROJECT PORTFOLIO"
      />

      {/* Filter Tabs */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our Project Portfolio</h2>
            <p>Filter by category to view our real-world construction projects and architectural craftsmanship.</p>
          </div>

          <div className={styles.filterBar}>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`${styles.filterBtn} ${selectedFilter === f.id ? styles.activeFilterBtn : ''}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className={styles.galleryGrid}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, index) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={styles.galleryCard}
                  onClick={() => openLightbox(index)}
                >
                  <div className={styles.imgContainer}>
                    <img src={p.image} alt={p.title} className={styles.cardImg} loading="lazy" />
                    <div className={styles.overlay}>
                      <span className={styles.categoryBadge}>{p.categoryLabel}</span>
                      <div className={styles.overlayCenter}>
                        <FaSearchPlus size={28} className={styles.searchIcon} />
                        <span>View Full Screen</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardDetails}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <div className={styles.cardMeta}>
                      <span>
                        <FaMapMarkerAlt size={12} /> {p.location}
                      </span>
                      <span>
                        <FaRulerCombined size={12} /> {p.area}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Before & After Interactive Transformation Showcase */}
      <section className={`${styles.transformSection} section-padding`}>
        <div className="container">
          <div className="section-title">
            <h2>Before & After Transformation</h2>
            <p>Slide left and right to see the dramatic before-and-after construction execution.</p>
          </div>

          <div className={styles.comparisonContainer}>
            <div className={styles.beforeAfterWrapper}>
              {/* After Image (Full width background) */}
              <img src={res1} alt="After Construction" className={styles.afterImg} />

              {/* Before Image (Clipped width according to sliderPos) */}
              <div className={styles.beforeImgWrapper} style={{ width: `${sliderPos}%` }}>
                <img src={res2} alt="Before Construction" className={styles.beforeImg} />
              </div>

              {/* Slider Handle */}
              <div className={styles.handle} style={{ left: `${sliderPos}%` }}>
                <div className={styles.handleLine}></div>
                <div className={styles.handleButton}>
                  <FaSlidersH size={18} />
                </div>
              </div>

              {/* Range input controller overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className={styles.rangeControl}
              />

              <span className={`${styles.badgeTag} ${styles.beforeBadge}`}>Before (Initial Site)</span>
              <span className={`${styles.badgeTag} ${styles.afterBadge}`}>After (Completed Villa)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>
            <FaTimes />
          </button>

          <button className={styles.prevBtn} onClick={showPrev}>
            <FaChevronLeft size={24} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredProjects[lightboxIndex].image}
              alt={filteredProjects[lightboxIndex].title}
              className={styles.lightboxImg}
            />
            <div className={styles.lightboxInfo}>
              <h4>{filteredProjects[lightboxIndex].title}</h4>
              <span className={styles.lightboxCat}>{filteredProjects[lightboxIndex].categoryLabel}</span>
              <p>{filteredProjects[lightboxIndex].desc}</p>
              <div className={styles.lightboxMetaRow}>
                <span>
                  <FaMapMarkerAlt size={12} /> {filteredProjects[lightboxIndex].location}
                </span>
                <span>
                  <FaCalendarAlt size={12} /> Completed {filteredProjects[lightboxIndex].year}
                </span>
                <span>
                  <FaRulerCombined size={12} /> {filteredProjects[lightboxIndex].area}
                </span>
              </div>
            </div>
          </div>

          <button className={styles.nextBtn} onClick={showNext}>
            <FaChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
