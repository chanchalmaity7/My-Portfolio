import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import AINativeDeveloper from '@/components/AINativeDeveloper';
import AppShowcase from '@/components/AppShowcase';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HomeIntroSplash from '@/components/HomeIntroSplash';

export default function Home() {
  return (
    <>
      <HomeIntroSplash />
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="ai-native"><AINativeDeveloper /></section>
        <section id="apps"><AppShowcase /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}
