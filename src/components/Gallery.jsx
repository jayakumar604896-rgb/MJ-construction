import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Gallery.module.css';

// Import images
import res1 from '../assets/gallery_res_1.png';
import res2 from '../assets/gallery_res_2.png';
import com1 from '../assets/gallery_com_1.png';
import com2 from '../assets/gallery_com_2.png';
import int1 from '../assets/gallery_int_1.png';
import int2 from '../assets/gallery_int_2.png';

const projectsData = [
  {
    id: 1,
    image: res1,
    title: 'Emerald Luxury Villa',
    category: 'residential',
    categoryLabel: 'Residential',
  },
  {
    id: 2,
    image: com1,
    title: 'Vanguard Business Tower',
    category: 'commercial',
    categoryLabel: 'Commercial',
  },
  {
    id: 3,
    image: int1,
    title: 'Warm Walnut modular Kitchen',
    category: 'interior',
    categoryLabel: 'Interior Design',
  },
  {
    id: 4,
    image: res2,
    title: 'Aura Waterfront Mansion',
    category: 'residential',
    categoryLabel: 'Residential',
  },
  {
    id: 5,
    image: com2,
    title: 'Apex Logistic Hub',
    category: 'commercial',
    categoryLabel: 'Commercial',
  },
  {
    id: 6,
    image: int2,
    title: 'Zen Penthouse Living Area',
    category: 'interior',
    categoryLabel: 'Interior Design',
  },
];

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === selectedFilter)
      );
    }
  }, [selectedFilter]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrevImage(e);
      if (e.key === 'ArrowRight') showNextImage(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredProjects]);

  const filterItems = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interior', label: 'Interiors' },
  ];

  return (
    <section id="gallery" className={`${styles.gallerySection} section-padding`}>
      <div className="container">
        <div className="section-title">
          <h2>Our Project Gallery</h2>
          <p>
            Explore our architectural portfolio showcasing modern houses, corporate spaces, and smart renovations.
          </p>
        </div>

        {/* Categories filters */}
        <ul className={styles.filters}>
          {filterItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setSelectedFilter(item.id)}
                className={`${styles.filterBtn} ${
                  selectedFilter === item.id ? styles.activeFilter : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Gallery Image Grid with Layout Animations */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={styles.card}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <span className={styles.projectCategory}>
                    {project.categoryLabel}
                  </span>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal overlay */}
        {lightboxIndex !== null && (
          <div className={styles.lightbox} onClick={closeLightbox}>
            <button className={styles.closeBtn} onClick={closeLightbox}>
              <FaTimes />
            </button>

            <button className={styles.prevBtn} onClick={showPrevImage}>
              <FaChevronLeft size={24} />
            </button>

            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredProjects[lightboxIndex].image}
                alt={filteredProjects[lightboxIndex].title}
                className={styles.lightboxImage}
              />
              <div className={styles.lightboxInfo}>
                <h4 className={styles.lightboxTitle}>
                  {filteredProjects[lightboxIndex].title}
                </h4>
                <span className={styles.lightboxCategory}>
                  {filteredProjects[lightboxIndex].categoryLabel}
                </span>
              </div>
            </div>

            <button className={styles.nextBtn} onClick={showNextImage}>
              <FaChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
