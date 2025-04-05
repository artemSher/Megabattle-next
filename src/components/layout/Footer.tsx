import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>ITMO.MEGABATTLE</div>
        
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksColumn}>
            <h3>Навигация</h3>
            <ul>
              <li><Link href="#home">Главная</Link></li>
              <li><Link href="#about">О проекте</Link></li>
              <li><Link href="#events">Мероприятия</Link></li>
              <li><Link href="#contacts">Контакты</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerLinksColumn}>
            <h3>Контакты</h3>
            <ul>
              <li><a href="mailto:info@megabattle.itmo.ru">info@megabattle.itmo.ru</a></li>
              <li><a href="tel:+78123287777">+7 (812) 328-77-77</a></li>
            </ul>
          </div>
          
          <div className={styles.footerLinksColumn}>
            <h3>Социальные сети</h3>
            <ul>
              <li><a href="https://vk.com/itmo" target="_blank" rel="noopener noreferrer">ВКонтакте</a></li>
              <li><a href="https://t.me/itmo_university" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} ITMO.MEGABATTLE. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
