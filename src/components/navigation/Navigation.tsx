import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Изменение стиля навигации при прокрутке
      setIsScrolled(window.scrollY > 50);
      
      // Определение активной секции при прокрутке
      const sections = ['home', 'about', 'events', 'stories', 'team', 'contacts'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О проекте' },
    { id: 'events', label: 'Мероприятия' },
    { id: 'stories', label: 'Истории' },
    { id: 'team', label: 'Команда' },
    { id: 'contacts', label: 'Контакты' }
  ];

  return (
    <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <ul className={styles.navLinks}>
          {navItems.map(item => (
            <li key={item.id} className={activeSection === item.id ? styles.active : ''}>
              <Link href={`/#${item.id}`} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
