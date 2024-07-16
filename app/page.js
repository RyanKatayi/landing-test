import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { getRandomVersion } from '../lib/fetchData';

export default function Home() {
  const version = getRandomVersion();

  return (
    <>
      <Header />
      <Hero 
        title={version.hero.title} 
        subtitle={version.hero.subtitle} 
        imageUrl={version.hero.imageUrl}
      />
      <Features features={version.features} />
      <Pricing />
      <Testimonials testimonials={version.testimonials} />
      <Footer />
    </>
  );
}
