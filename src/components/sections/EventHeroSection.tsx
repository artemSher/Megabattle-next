import React from 'react';
import Link from 'next/link';
import styles from './EventHeroSection.module.css';

interface EventHeroSectionProps {
  title: string;
  image: string;
}

const EventHeroSection: React.FC<EventHeroSectionProps> = ({ title, image }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImage} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
      </div>
      <div className={styles.heroOverlay} />
    </div>
  );
};

export default EventHeroSection;
