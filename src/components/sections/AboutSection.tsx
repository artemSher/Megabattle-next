import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>О ПРОЕКТЕ</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <Image 
            src="/assets/about-image.jpg" 
            alt="Студенты ИТМО на мероприятии Megabattle" 
            width={600}
            height={450}
            className={styles.aboutImg}
          />
        </div>
        
        <div className={styles.aboutText}>
          <p>
            ITMO.MEGABATTLE - это уникальный проект, объединяющий неравнодушных студентов 
            в творческую деятельность, направленную на создание крупного мероприятия-концерта 
            на базе Университета ИТМО...
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
