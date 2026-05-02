import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import AINativeDeveloper from '@/components/AINativeDeveloper';
import AppShowcase from '@/components/AppShowcase';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HomeIntroSplash from '@/components/HomeIntroSplash';

export default function Home() {
  return (
    <>
      <HomeIntroSplash />
      <Navbar />
      <main className="overflow-x-hidden">
        <section id="home" className="render-section hero-shell"><Hero /></section>
        <section id="ai-native" className="render-section deferred-section"><AINativeDeveloper /></section>
        <section id="apps" className="render-section deferred-section"><AppShowcase /></section>
        <section id="skills" className="render-section deferred-section"><Skills /></section>
        <section id="projects" className="render-section deferred-section"><Projects /></section>
        <section id="about" className="render-section deferred-section"><About /></section>
        <section id="experience" className="render-section deferred-section"><Experience /></section>
        <section id="education" className="render-section deferred-section"><Education /></section>
        <section id="contact" className="render-section deferred-section"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}
