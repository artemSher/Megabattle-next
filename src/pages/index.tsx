import Head from 'next/head';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import StoriesSection from '@/components/sections/StoriesSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactsSection from '@/components/sections/ContactsSection';
import Vector from '@/components/ui/Vector';
import Navigation from '@/components/navigation/Navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>ITMO.MEGABATTLE</title>
        <meta name="description" content="Проект, объединяющий талант студентов в одном месте" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      <main>
        {/* Декоративные векторы */}
        <Vector position="top-right" />
        <Vector position="middle-left" />
        <Vector position="bottom-right" />
        
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <StoriesSection />
        <TeamSection />
        <ContactsSection />
      </main>
    </>
  );
}
