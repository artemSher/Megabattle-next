import React from 'react';
import styles from './ContactsSection.module.css';

const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      <h2>КОНТАКТЫ</h2>
      <div className={styles.contactsContainer}>
        <div className={styles.map}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.9241447337692!2d30.307466377172915!3d59.95690938717192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQmNCi0JzQng!5e0!3m2!1sru!2sru!4v1710580962396!5m2!1sru!2sru" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта расположения Университета ИТМО на ул. Ломоносова, д.9"
          ></iframe>
        </div>
        
        <div className={styles.contactInfo}>
          <p><i className={styles.iconLocation}></i> ул. Ломоносова, д.9</p>
          <p><i className={styles.iconPhone}></i> <a href="tel:+79999999999">+7 (999) 999-99-99</a></p>
          <p><i className={styles.iconEmail}></i> <a href="mailto:artem.b@itmo.ru">artem.b@itmo.ru</a></p>
          <button className={styles.contactButton}>Построить маршрут</button>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
