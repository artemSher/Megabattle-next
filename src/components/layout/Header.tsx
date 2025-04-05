import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><Link href="#home">Главная</Link></li>
          <li><Link href="#about">О проекте</Link></li>
          <li><Link href="#events">Мероприятия</Link></li>
          <li><Link href="#contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
