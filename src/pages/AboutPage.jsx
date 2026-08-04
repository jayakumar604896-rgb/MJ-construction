import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaAward,
  FaShieldAlt,
  FaHardHat,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaHandshake,
  FaBuilding,
} from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import styles from './AboutPage.module.css';

import aboutBannerImg from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.23 PM (1).jpeg';
import com1 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.21 PM.jpeg';
import team1 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.22 PM (1).jpeg';
import team2 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.22 PM (2).jpeg';
import team3 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.22 PM (3).jpeg';
import team4 from '../assets/whatsapp_images/WhatsApp Image 2026-07-21 at 5.55.23 PM.jpeg';

const AboutPage = () => {
  const values = [
    {
      icon: <FaShieldAlt className={styles.valueIcon} />,
      title: 'Uncompromising Quality',
      desc: 'We never compromise on material grades, using only certified Tata/JSW steel and Grade 53 cement to ensure maximum structural longevity.',
    },
    {
      icon: <FaHandshake className={styles.valueIcon} />,
      title: '100% Price Transparency',
      desc: 'No hidden costs or post-contract surprises. Every square foot estimation is clearly documented down to the last fixture.',
    },
    {
      icon: <FaClock className={styles.valueIcon} />,
      title: 'On-Time Delivery Guarantee',
      desc: 'Strict project schedule control with penalty clauses in contract ensuring your project is handed over right on schedule.',
    },
    {
      icon: <FaHardHat className={styles.valueIcon} />,
      title: 'Safety & ISO Compliance',
      desc: 'Rigorous safety audits and quality inspection checkpoints at every milestone from excavation to final painting.',
    },
  ];

  const team = [
    {
      name: 'Er. M. Jayakumar',
      role: 'Founder & Managing Director',
      exp: '18+ Years Experience',
      bio: 'Visionary civil engineer with over 200+ completed residential & commercial projects across Tamil Nadu.',
      avatar: team1,
    },
    {
      name: 'Ar. Priya Sundaram',
      role: 'Principal Architect',
      exp: '14+ Years Experience',
      bio: 'Master of modern elevation designs and Vastu-integrated space layouts for luxury homes and corporate spaces.',
      avatar: team2,
    },
    {
      name: 'Er. R. Karthik',
      role: 'Head Structural Engineer',
      exp: '12+ Years Experience',
      bio: 'Specialist in seismic-resistant structural frames, deep pile foundations, and commercial high-rise analysis.',
      avatar: team3,
    },
    {
      name: 'S. Rajesh Kannan',
      role: 'General Manager - Projects',
      exp: '15+ Years Experience',
      bio: 'Manages site logistics, material procurement, contractor teams, and daily quality inspection protocols.',
      avatar: team4,
    },
  ];

  const milestones = [
    { year: '2012', title: 'Company Inception', desc: 'Started with single villa developments in Chennai with a 5-member engineering team.' },
    { year: '2016', title: '50+ Homes Handed Over', desc: 'Expanded into gated community layouts and independent commercial showrooms.' },
    { year: '2020', title: 'Turnkey Commercial Expansion', desc: 'Launched full turnkey building construction and PMC services with ISO 9001 certification.' },
    { year: '2026', title: '250+ Successful Projects', desc: 'Recognized as one of the most trusted construction agencies with 100% on-time delivery track record.' },
  ];

  return (
    <div className={styles.aboutPage}>
      <PageBanner
        title="About MJ Construction"
        subtitle="Built on Trust. Driven by Quality. Dedicated to Architectural Perfection."
        breadcrumbs={[{ label: 'About Us' }]}
        bgImage={aboutBannerImg}
        badge="OUR HERITAGE & VISION"
      />

      {/* Story & Legacy Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.subTag}>OUR STORY & LEGACY</span>
              <h2 className={styles.storyTitle}>Constructing Foundations That Stand The Test Of Time</h2>
              <p className={styles.paragraph}>
                Founded with a vision to revolutionize the construction industry in South India, <strong>MJ Construction</strong> has grown from a humble civil consultancy into a full-scale turnkey architectural and engineering firm.
              </p>
              <p className={styles.paragraph}>
                We believe that building a home or commercial landmark is more than just pouring concrete; it is about crafting enduring spaces where families thrive and businesses prosper. Our approach combines traditional civil craftsmanship with modern 3D BIM planning, rigorous material lab testing, and transparent pricing models.
              </p>

              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>250+</span>
                  <span className={styles.statLabel}>Completed Projects</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>14+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>On-Time Delivery</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.storyMedia}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.imageWrapperMain}>
                <img src={com1} alt="MJ Construction Landmark Building" className={styles.mainImg} />
              </div>
              <div className={styles.badgeOverlay}>
                <FaAward size={36} className={styles.badgeIcon} />
                <div>
                  <h4>ISO 9001:2015</h4>
                  <p>Certified Quality Construction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`${styles.valuesSection} section-padding`}>
        <div className="container">
          <div className="section-title">
            <h2>Our Core Principles</h2>
            <p>The standard of excellence that guides every foundation we lay and every wall we build.</p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.iconBox}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Leadership & Experts</h2>
            <p>Meet the engineers, architects, and managers behind MJ Construction's success.</p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.avatarWrapper}>
                  <img src={member.avatar} alt={member.name} className={styles.avatarImg} />
                </div>
                <div className={styles.teamInfo}>
                  <h3>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <span className={styles.teamExp}>{member.exp}</span>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Timeline */}
      <section className={`${styles.timelineSection} section-padding`}>
        <div className="container">
          <div className="section-title">
            <h2>Our Growth Journey</h2>
            <p>Over a decade of milestones, innovation, and trusted structural engineering.</p>
          </div>

          <div className={styles.timeline}>
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineContent}>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to Construct Your Vision with Trust & Quality?</h2>
            <p>Get in touch with our lead architects today for a free site visit, layout consultation, and cost estimate.</p>
            <div className={styles.ctaBtns}>
              <Link to="/packages" className="btn btn-primary">
                Explore Packages
              </Link>
              <a href="https://wa.me/918754947759" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
