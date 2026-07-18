import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: 'Do you help in securing CMDA/Corporation approvals?',
    answer: 'Yes, we handle the entire process of securing government approvals, including CMDA, DTCP, and Chennai Corporation building plan permissions, documentation, and licensing.',
  },
  {
    question: 'What warranty do you provide on concrete structures?',
    answer: 'We offer a 10-year warranty on the structural stability of all our concrete frames, columns, foundations, and slab structures to guarantee safety and build confidence.',
  },
  {
    question: 'Can I customize the architectural drawings during design?',
    answer: 'Yes, we provide unlimited design drafts on floor blueprints and 3D elevation renderings during the planning phase until you are 100% satisfied before starting excavation.',
  },
  {
    question: 'How do you manage construction quality audits?',
    answer: 'We conduct regular site visits by certified structural audits, perform cube compression tests for concrete quality, check steel alignment, and follow a strict 100+ checklist audit at every project milestone.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`${styles.faqSection} section-padding`}>
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find quick answers to common questions about approvals, structural warranties, design customizations, and our quality standards.
          </p>
        </div>

        <div className={styles.accordionContainer}>
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`${styles.accordionItem} ${isOpen ? styles.activeItem : ''}`}
              >
                <button
                  className={styles.questionButton}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={`${styles.arrowIcon} ${isOpen ? styles.rotated : ''}`}>
                    <FaChevronDown />
                  </div>
                </button>

                <div className={`${styles.answerWrapper} ${isOpen ? styles.showAnswer : ''}`}>
                  <div className={styles.answerText}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
