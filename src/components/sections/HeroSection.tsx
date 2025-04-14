import React from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop playsInline>
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.heroTitle}>ITMO.MEGABATTLE</h1>
        </div>
        <p>Проект, объединяющий талант студентов в одном месте</p>
      </div>
    </section>
  );
};

export default HeroSection;
