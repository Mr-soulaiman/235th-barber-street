import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import Partners from './components/Partners';
import Trust from './components/Trust';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <main>
        <Hero />
        <Story />
        <Services />
        <Partners />
        <Trust />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
