import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaArrowLeft } from 'react-icons/fa';
import EventHeroSection from '@/components/sections/EventHeroSection';
import TeamMember from '@/components/ui/TeamMember';
import ContactsSection from '@/components/sections/ContactsSection';
import styles from '@/styles/EventPage.module.css';

// Placeholder data - replace with actual data fetching later
const getEventData = (eventId: string | string[] | undefined) => {
  if (!eventId || typeof eventId !== 'string') return null;
  // In a real app, fetch data from an API based on eventId
  return {
    id: eventId,
    title: `Мероприятие ${eventId}`,
    description: 'Подробное описание мероприятия. Здесь будет много интересного текста о том, что ждет участников. Мы подготовили насыщенную программу, включающую выступления экспертов, мастер-классы, нетворкинг и многое другое. Присоединяйтесь к нам, чтобы получить новые знания, навыки и знакомства в профессиональном сообществе.',
    date: '2025-10-15',
    time: '14:00 - 19:00',
    address: 'ул. Ломоносова, д.9, Санкт-Петербург',
    image: '/assets/events/event-hero.jpg',
    gallery: [
      { image: '/assets/events/event1.jpg', title: 'Выступление спикеров' },
      { image: '/assets/events/event2.jpg', title: 'Мастер-класс' },
      { image: '/assets/events/event3.jpg', title: 'Командная работа' },
      { image: '/assets/events/event4.jpg', title: 'Нетворкинг' },
      { image: '/assets/events/event5.jpg', title: 'Презентация проектов' },
      { image: '/assets/events/event6.jpg', title: 'Награждение победителей' },
      { image: '/assets/events/event7.jpg', title: 'Фотозона' },
      { image: '/assets/events/event8.jpg', title: 'Кофе-брейк' },
    ],
    schedule: [
      { time: '14:00', title: 'Регистрация участников', description: 'Встреча и регистрация участников, выдача бейджей и материалов' },
      { time: '14:30', title: 'Открытие мероприятия', description: 'Приветственное слово организаторов, обзор программы дня' },
      { time: '15:00', title: 'Выступление спикеров', description: 'Серия докладов от ведущих экспертов отрасли' },
      { time: '16:30', title: 'Кофе-брейк', description: 'Время для неформального общения и нетворкинга' },
      { time: '17:00', title: 'Мастер-классы', description: 'Практические занятия в малых группах' },
      { time: '18:30', title: 'Подведение итогов', description: 'Заключительное слово, вручение сертификатов' },
    ],
    organizers: [
      { id: '1', name: 'Иван Иванов', role: 'Главный организатор', image: '/assets/team-placeholder.jpg' },
      { id: '2', name: 'Мария Петрова', role: 'Координатор', image: '/assets/team-placeholder.jpg' },
      { id: '3', name: 'Алексей Смирнов', role: 'Технический специалист', image: '/assets/team-placeholder.jpg' },
      { id: '4', name: 'Екатерина Соколова', role: 'PR-менеджер', image: '/assets/team-placeholder.jpg' },
    ],
    mapCoordinates: { lat: 59.956909, lng: 30.307466 } // Example coordinates
  };
};

const EventPage: React.FC = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  // Fetch event data based on eventId from URL
  const event = getEventData(eventId);

  useEffect(() => {
    // Анимация появления элементов при прокрутке
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.scheduleItem}`);
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && !animatedItems.includes(index)) {
          setAnimatedItems(prev => [...prev, index]);
          (el as HTMLElement).style.setProperty('--i', index.toString());
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Вызываем один раз для элементов, которые уже видны при загрузке
    setTimeout(handleScroll, 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedItems]);

  if (!event) {
    return <div className={styles.container}>Загрузка данных мероприятия...</div>; 
  }

  return (
    <>
      <Head>
        <title>{event.title} - ITMO.MEGABATTLE</title>
        <meta name="description" content={`Узнайте больше о мероприятии ${event.title}`} />
      </Head>
      
      <main>
        <EventHeroSection 
          title={event.title} 
          image={event.image} 
          date={new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
          time={event.time}
          location={event.address}
        />
        
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            <FaArrowLeft /> На главную
          </Link>

          <div className={`${styles.section} ${styles.eventInfoSection}`}>
            <h2 className={styles.sectionTitle}>Информация о мероприятии</h2>
            
            <div className={styles.eventInfo}>
              <div className={styles.eventMeta}>
                <div className={styles.metaItem}>
                  <div className={styles.metaIcon}><FaCalendarAlt /></div>
                  <div>
                    <h4>Дата проведения</h4>
                    <p>{new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  </div>
                </div>
                
                <div className={styles.metaItem}>
                  <div className={styles.metaIcon}><FaClock /></div>
                  <div>
                    <h4>Время</h4>
                    <p>{event.time}</p>
                  </div>
                </div>
                
                <div className={styles.metaItem}>
                  <div className={styles.metaIcon}><FaMapMarkerAlt /></div>
                  <div>
                    <h4>Место проведения</h4>
                    <p>{event.address}</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.eventDescription}>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
          
          <div className={`${styles.section} ${styles.gallerySection}`}>
            <h2 className={styles.sectionTitle}>Галерея</h2>
            <div className={styles.galleryGrid}>
              {event.gallery.slice(0, 6).map((item, index) => {
                return (
                  <div 
                    key={index} 
                    className={styles.galleryItem}
                  >
                    <div 
                      className={styles.galleryItemImage} 
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className={styles.galleryItemCaption}>{item.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className={`${styles.section} ${styles.scheduleSection}`} id="schedule">
            <h2 className={styles.sectionTitle}>Программа мероприятия</h2>
            
            <div className={styles.scheduleTimeline}>
              {event.schedule.map((item, index) => (
                <div key={index} className={`${styles.scheduleItem} ${animatedItems.includes(index) ? styles.animated : ''}`}>
                  <div className={styles.scheduleTime}>{item.time}</div>
                  <div className={styles.scheduleContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.section} ${styles.organizersSection}`}>
            <h2 className={styles.sectionTitle}>Организаторы</h2>
            <p className={styles.sectionSubtitle}>Наша команда профессионалов сделает мероприятие незабываемым</p>
            
            <div className={styles.organizersGrid}>
              {event.organizers.map(org => (
                <div key={org.id} className={styles.organizerCard}>
                  <TeamMember 
                    id={Number(org.id)}
                    name={org.name}
                    role={org.role}
                    image={org.image}
                    onClick={() => {}}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.section} ${styles.registrationSection}`} id="registration">
            <div className={styles.registrationCard}>
              <h3>Примите участие в мероприятии</h3>
              <p>Присоединяйтесь к нашему мероприятию и получите все необходимые материалы.</p>
              <Link href="#" className={styles.registrationButton}>Зарегистрироваться</Link>
            </div>
          </div>
        </div>

        <ContactsSection />
      </main>
    </>
  );
};

export default EventPage;
