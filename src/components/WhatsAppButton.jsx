import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '+918754947759';
  const messageText = 'Hello MJ Construction! I am interested in building/renovation services. I would like to get a free consultation.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(messageText)}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.floatBtn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className={styles.badge}>1</span>
    </a>
  );
};

export default WhatsAppButton;
