import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EventHeroSection.module.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaArrowDown } from 'react-icons/fa';

interface EventHeroSectionProps {
  title: string;
  image: string;
  date?: string;
  time?: string;
  location?: string;
}

const EventHeroSection: React.FC<EventHeroSectionProps> = ({ title, image, date, time, location }) => {
  const [scrolled, setScrolled] = useState(false);
  const [titleWords, setTitleWords] = useState<string[]>([]);
  // Таймер удален по требованию
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Разделение заголовка на слова и эффекты параллакса
  useEffect(() => {
    setTitleWords(title.split(' '));
    setIsVisible(true);

    // Таймер удален по требованию

    // Обработчик прокрутки
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Обработчик движения мыши для параллакса
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [title]);

  return (
    <div 
      ref={heroRef}
      className={`${styles.heroContainer} ${scrolled ? styles.scrolled : ''}`}
    >
      <div 
        className={styles.heroImage} 
        style={{ 
          backgroundImage: `url(${image})`,
          transform: `scale(1.05) translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
        }} 
      />
      
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {titleWords.map((word, index) => (
            <span 
              key={index} 
              className={styles.titleWord}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
        
        <div className={styles.eventMeta}>
          {date && (
            <div className={styles.metaBadge}>
              <FaCalendarAlt className={styles.metaIcon} />
              <span>{date}</span>
            </div>
          )}
          {time && (
            <div className={styles.metaBadge}>
              <FaClock className={styles.metaIcon} />
              <span>{time}</span>
            </div>
          )}
          {location && (
            <div className={styles.metaBadge}>
              <FaMapMarkerAlt className={styles.metaIcon} />
              <span>{location}</span>
            </div>
          )}
        </div>
        
        {/* Таймер удален по требованию */}
        
        {/* Кнопки удалены по требованию */}
        

      </div>
      
      <div className={`${styles.heroOverlay} ${scrolled ? styles.scrolledOverlay : ''}`} />
      
      {/* Современные декоративные элементы */}
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>
      <div className={styles.decorLine1}></div>
      <div className={styles.decorLine2}></div>
      <div className={styles.decorDots}></div>
      
      {/* Новые декоративные элементы */}
      <div className={styles.glowingOrb} style={{ 
        left: `${10 + mousePosition.x * 5}%`, 
        top: `${20 + mousePosition.y * 5}%` 
      }}></div>
      <div className={styles.glowingOrb} style={{ 
        right: `${15 + mousePosition.x * 5}%`, 
        bottom: `${25 + mousePosition.y * 5}%` 
      }}></div>
      
      <div className={styles.decorGrid}></div>
    </div>
  );
};

export default EventHeroSection;
