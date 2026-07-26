import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCommentDots,
  FaTimes,
  FaPaperPlane,
  FaWhatsapp,
  FaCalculator,
  FaCalendarCheck,
  FaHardHat,
  FaRobot,
  FaRedo,
} from 'react-icons/fa';
import styles from './ConsultantChatbot.module.css';

const ConsultantChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const initialMessage = {
    id: 1,
    sender: 'bot',
    text: 'Hello! 👋 I am your MJ Construction AI Consultant. How can I assist you with your building project today?',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    options: [
      { label: '💰 Estimate Project Cost', action: 'estimate' },
      { label: '📦 Compare Packages', action: 'packages' },
      { label: '📅 Book Free Site Visit', action: 'book' },
      { label: '💬 Chat on WhatsApp', action: 'whatsapp' },
    ],
  };

  const [messages, setMessages] = useState([initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const addBotResponse = (text, options = null) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options,
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleUserMessage = (text) => {
    if (!text.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setUserInput('');

    // Process intelligence
    const lower = text.toLowerCase();
    if (lower.includes('cost') || lower.includes('price') || lower.includes('estimate') || lower.includes('rate')) {
      addBotResponse(
        'Our construction packages start at ₹1,650/sq.ft for Basic, ₹1,950/sq.ft for Standard (Best Seller), ₹2,350/sq.ft for Premium, and ₹2,850/sq.ft for Ultra Luxury. What is your approximate built-up area in sq.ft?',
        [
          { label: '1,500 sq.ft', action: 'area_1500' },
          { label: '2,000 sq.ft', action: 'area_2000' },
          { label: '3,000 sq.ft', action: 'area_3000' },
        ]
      );
    } else if (lower.includes('package') || lower.includes('plan')) {
      addBotResponse(
        'We offer 4 transparent packages:\n\n1. Basic (₹1,650/sqft) - Tata/JSW steel & 53 cement\n2. Standard (₹1,950/sqft) - Vitrified tiles & Jaquar fittings\n3. Premium (₹2,350/sqft) - Italian marble & Kohler sanitaryware\n4. Luxury (₹2,850/sqft) - Smart home automation & custom facade.\n\nWould you like to calculate estimated costs for your plot?',
        [
          { label: 'Calculate Cost', action: 'estimate' },
          { label: 'Book Site Visit', action: 'book' },
        ]
      );
    } else if (lower.includes('visit') || lower.includes('inspection') || lower.includes('consult')) {
      addBotResponse(
        'We provide 100% Free On-Site Inspections and Vastu plan discussions across Chennai! Click below to send your location on WhatsApp to book an engineer visit.',
        [{ label: '📲 Connect Engineer on WhatsApp', action: 'whatsapp' }]
      );
    } else if (lower.includes('material') || lower.includes('quality') || lower.includes('steel')) {
      addBotResponse(
        'We strictly use Tata Tiscon / JSW Fe550D TMT steel bars, UltraTech 53-grade cement, Astral CPVC pipes, Finolex wires, and Jaquar/Kohler sanitaryware. Every material batch undergoes lab testing!'
      );
    } else {
      addBotResponse(
        `Thank you for reaching out regarding "${text}". Would you like our senior engineer to call you or send an itemized BOQ proposal?`,
        [
          { label: '📲 Speak on WhatsApp', action: 'whatsapp' },
          { label: '📅 Schedule Call', action: 'book' },
          { label: '🔄 Start Over', action: 'reset' },
        ]
      );
    }
  };

  const handleOptionClick = (option) => {
    // Add user chip selection as message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'user',
        text: option.label,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    switch (option.action) {
      case 'estimate':
        addBotResponse(
          'Please choose your approximate built-up area:',
          [
            { label: '1,200 sq.ft (Standard 3BHK)', action: 'area_1200' },
            { label: '1,800 sq.ft (Duplex Villa)', action: 'area_1800' },
            { label: '2,500 sq.ft (Luxury Villa)', action: 'area_2500' },
          ]
        );
        break;

      case 'area_1200':
        addBotResponse(
          'For a 1,200 sq.ft house:\n- Basic Package: ₹19.8 Lakhs\n- Standard Package: ₹23.4 Lakhs\n- Premium Package: ₹28.2 Lakhs\n\nWould you like an official written quotation?',
          [{ label: '📲 Request Written Quote on WhatsApp', action: 'whatsapp' }]
        );
        break;

      case 'area_1800':
        addBotResponse(
          'For a 1,800 sq.ft villa:\n- Basic Package: ₹29.7 Lakhs\n- Standard Package: ₹35.1 Lakhs\n- Premium Package: ₹42.3 Lakhs\n\nWould you like to schedule a free site inspection?',
          [
            { label: '📅 Book Free Site Visit', action: 'book' },
            { label: '📲 Chat on WhatsApp', action: 'whatsapp' },
          ]
        );
        break;

      case 'area_2500':
        addBotResponse(
          'For a 2,500 sq.ft luxury villa:\n- Standard Package: ₹48.75 Lakhs\n- Premium Package: ₹58.75 Lakhs\n- Ultra Luxury Package: ₹71.25 Lakhs\n\nIncludes 3D VR walkthrough, Vastu architectural blueprint, and Kohler luxury fittings.',
          [{ label: '📲 Talk to Principal Architect', action: 'whatsapp' }]
        );
        break;

      case 'packages':
        addBotResponse(
          'Our most popular package is the Standard Package at ₹1,950/sq.ft! It includes seismic-resistant RCC, red brick masonry, double-charged tiles, Jaquar bath fittings, and 3D front elevations.',
          [
            { label: 'Calculate 1,800 sq.ft Cost', action: 'area_1800' },
            { label: 'Connect on WhatsApp', action: 'whatsapp' },
          ]
        );
        break;

      case 'book':
        addBotResponse(
          'Our lead engineer will inspect your land level, plot dimensions, and soil quality free of charge! Please click below to confirm via WhatsApp.',
          [{ label: '📲 Confirm Free Inspection via WhatsApp', action: 'whatsapp' }]
        );
        break;

      case 'whatsapp':
        window.open(
          `https://wa.me/918754947759?text=${encodeURIComponent(
            'Hello MJ Construction! I am using the Free Consultant Chatbot on your website. I would like a free consultation and project estimate.'
          )}`,
          '_blank'
        );
        break;

      case 'reset':
        setMessages([initialMessage]);
        break;

      default:
        break;
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className={styles.triggerContainer}>
        <button
          className={styles.floatingBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Free Construction Consultant Chatbot"
        >
          {isOpen ? <FaTimes size={22} /> : <FaCommentDots size={24} />}
          {unreadCount > 0 && !isOpen && <span className={styles.badge}>{unreadCount}</span>}
          <div className={styles.pulseRing}></div>
        </button>
        {!isOpen && (
          <div className={styles.hoverTooltip} onClick={() => setIsOpen(true)}>
            <span className={styles.onlineDot}></span>
            <span>Free Construction Consultant</span>
          </div>
        )}
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={styles.chatWindow}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.avatarBox}>
                <div className={styles.avatarIcon}>
                  <FaHardHat size={20} />
                </div>
                <span className={styles.activeDot}></span>
              </div>
              <div className={styles.headerTitle}>
                <h3>MJ Construction AI</h3>
                <span className={styles.statusText}>Online | Free Consultation Desk</span>
              </div>
              <div className={styles.headerActions}>
                <button
                  onClick={() => setMessages([initialMessage])}
                  className={styles.iconBtn}
                  title="Reset Chat"
                >
                  <FaRedo size={14} />
                </button>
                <button onClick={() => setIsOpen(false)} className={styles.iconBtn} title="Close Chat">
                  <FaTimes size={16} />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className={styles.chatBody}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.msgRow} ${msg.sender === 'user' ? styles.userRow : styles.botRow}`}
                >
                  {msg.sender === 'bot' && (
                    <div className={styles.botAvatar}>
                      <FaRobot size={14} />
                    </div>
                  )}

                  <div className={styles.msgBubbleWrapper}>
                    <div className={`${styles.bubble} ${msg.sender === 'user' ? styles.userBubble : styles.botBubble}`}>
                      <p>{msg.text}</p>
                    </div>
                    <span className={styles.timestamp}>{msg.time}</span>

                    {/* Action Chips */}
                    {msg.options && (
                      <div className={styles.optionsGrid}>
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleOptionClick(opt)}
                            className={styles.chipBtn}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className={`${styles.msgRow} ${styles.botRow}`}>
                  <div className={styles.botAvatar}>
                    <FaRobot size={14} />
                  </div>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUserMessage(userInput);
              }}
              className={styles.inputBar}
            >
              <input
                type="text"
                placeholder="Ask about cost, sq.ft rates, site visits..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className={styles.chatInput}
              />
              <button type="submit" className={styles.sendBtn} disabled={!userInput.trim()}>
                <FaPaperPlane size={14} />
              </button>
            </form>

            {/* Footer WhatsApp Banner */}
            <a
              href="https://wa.me/918754947759?text=Hi%20MJ%20Construction!%20I%20want%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waDirectFooter}
            >
              <FaWhatsapp size={18} />
              <span>Direct WhatsApp Chat with Principal Engineer</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConsultantChatbot;
