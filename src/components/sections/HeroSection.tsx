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
        <h1 className={styles.heroTitle}>ITMO.MEGABATTLE</h1>
        <p>Проект, объединяющий талант студентов в одном месте</p>
        <div className={styles.heroButtons}>
          <Link href="#" className={styles.heroButton}>
            Зарегистрироваться
          </Link>
          <Link href="#about" className={styles.heroButton}>
            Подробнее
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
