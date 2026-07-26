import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Gallery from '../components/Gallery';
import Brands from '../components/Brands';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />
      <Pricing />
      <Gallery />
      <Brands />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </main>
  );
};

export default Home;
