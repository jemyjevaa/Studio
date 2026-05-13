import React from 'react';
import Navbar from '../components/organisms/Navbar';
import Hero from '../components/organisms/Hero';
import AboutSection from '../components/organisms/AboutSection';
import ServicesGrid from '../components/organisms/ServicesGrid';
import GalleryCarousel from '../components/organisms/GalleryCarousel';
import ProcessList from '../components/organisms/ProcessList';
import ContactSection from '../components/organisms/ContactSection';
import Footer from '../components/organisms/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="flex flex-col">
        {/* Hero typically starts at the top, but we need to ensure it doesn't get buried by the fixed navbar */}
        <section className="pt-24 md:pt-32">
          <Hero />
        </section>
        
        <div className="flex flex-col gap-32 md:gap-48 lg:gap-64">
          <AboutSection />
          <ServicesGrid />
          <GalleryCarousel />
          <ProcessList />
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
