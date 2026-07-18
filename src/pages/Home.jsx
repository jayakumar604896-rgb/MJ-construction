import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Home;
