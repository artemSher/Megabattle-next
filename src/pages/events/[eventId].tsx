import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaArrowLeft } from 'react-icons/fa';
import EventHeroSection from '@/components/sections/EventHeroSection';
import TeamMember from '@/components/ui/TeamMember';
import ContactsSection from '@/components/sections/ContactsSection';
import styles from '@/styles/EventPage.module.css';

// Данные о мероприятиях
const eventsData = [
  {
    id: '1',
    title: 'MIniGames',
    description: 'Приветствую вас, о славные аббаты, и крестьяне, и ремесленники, и рыцари 🙂 Мы все здесь собравшись, дабы с размахом праздновать и гулять весенний праздник MiniGames, и будет наше празднование длиться 14 дней и 14 ночей с дня 24 марта!',
    date: '2025-02-24',
    time: '10:00 - 20:00',
    address: 'ИТМО, Кронверкский пр., д. 49',
    image: '/assets/events/event-hero.jpg',
    month: 'февраль',
    gallery: [
      { image: '/assets/events/event1.jpg', title: 'Средневековые игры' },
      { image: '/assets/events/event2.jpg', title: 'Рыцарский турнир' },
      { image: '/assets/events/event3.jpg', title: 'Командные состязания' },
      { image: '/assets/events/event4.jpg', title: 'Ярмарка' },
      { image: '/assets/events/event5.jpg', title: 'Средневековые танцы' },
      { image: '/assets/events/event6.jpg', title: 'Награждение победителей' },
    ],
    schedule: [
      { time: '10:00', title: 'Открытие фестиваля', description: 'Торжественное открытие и приветственное слово организаторов' },
      { time: '11:00', title: 'Начало турниров', description: 'Старт основных соревнований и игр' },
      { time: '14:00', title: 'Обеденный перерыв', description: 'Средневековая трапеза и выступления менестрелей' },
      { time: '15:30', title: 'Продолжение состязаний', description: 'Второй этап турниров и командных игр' },
      { time: '18:00', title: 'Церемония награждения', description: 'Объявление победителей и вручение призов' },
    ],
    organizers: [
      { id: '1', name: 'Никита Руднев', role: 'Главный организатор', image: '/assets/team-placeholder.jpg' },
    ],
    mapCoordinates: { lat: 59.956909, lng: 30.307466 }
  },
  {
    id: '2',
    title: 'MegaQuiz IV',
    description: '«Скажи мне, что ты ешь, и я скажу, кто ты» — вот философия шеф-повара кафе Quizine. Для наших гостей мы готовим только лучшее, такое же изысканное и уникальное, как они сами 🍩 Пришло время и тебе окунуться в волшебный мир кулинарии попробовать наши невероятные блюда.',
    date: '2025-03-22',
    time: '14:00 - 20:20',
    address: 'ул. Гривцова, д. 14-16, Санкт-Петербург',
    image: '/assets/events/quiz.jpg',
    month: 'март',
    gallery: [
      { image: '/assets/events/megaquiz-gallery/HZV_7e_qRwY.jpg', title: 'Участники викторины' },
      { image: '/assets/events/megaquiz-gallery/D3bZJDfyZPE.jpg', title: 'Командная игра' },
      { image: '/assets/events/megaquiz-gallery/JTVx4qLrAGM.jpg', title: 'Кулинарные загадки' },
      { image: '/assets/events/megaquiz-gallery/3n-Pp3IGgwc.jpg', title: 'Дегустация блюд' },
      { image: '/assets/events/megaquiz-gallery/MJcF4vGNkuY.jpg', title: 'Шеф-повар за работой' },
      { image: '/assets/events/megaquiz-gallery/k2ern62TBz0.jpg', title: 'Атмосфера мероприятия' },
    ],
    schedule: [
      // 22 марта
      { time: '14:00', title: 'Рассадка первый поток', description: 'Регистрация участников и рассадка команд' },
      { time: '14:20', title: 'Начало мероприятия', description: 'Приветственное слово и начало викторины' },
      { time: '15:20', title: 'Перерыв', description: 'Кофе-брейк и дегустация закусок' },
      { time: '16:20', title: 'Конец первого потока', description: 'Подведение итогов и награждение победителей' },
      { time: '18:00', title: 'Второй поток', description: 'Регистрация и рассадка участников второго потока' },
      { time: '18:20', title: 'Начало мероприятия', description: 'Приветственное слово и начало викторины' },
      { time: '19:20', title: 'Перерыв', description: 'Кофе-брейк и дегустация закусок' },
      { time: '20:20', title: 'Конец второго потока', description: 'Подведение итогов и награждение победителей' },
      
      // 23 марта - такая же программа
      { time: '14:00', title: 'Рассадка первый поток (23 марта)', description: 'Регистрация участников и рассадка команд' },
      { time: '14:20', title: 'Начало мероприятия (23 марта)', description: 'Приветственное слово и начало викторины' },
      { time: '15:20', title: 'Перерыв (23 марта)', description: 'Кофе-брейк и дегустация закусок' },
      { time: '16:20', title: 'Конец первого потока (23 марта)', description: 'Подведение итогов и награждение победителей' },
      { time: '18:00', title: 'Второй поток (23 марта)', description: 'Регистрация и рассадка участников второго потока' },
      { time: '18:20', title: 'Начало мероприятия (23 марта)', description: 'Приветственное слово и начало викторины' },
      { time: '19:20', title: 'Перерыв (23 марта)', description: 'Кофе-брейк и дегустация закусок' },
      { time: '20:20', title: 'Конец второго потока (23 марта)', description: 'Подведение итогов и награждение победителей' },
    ],
    organizers: [
      { id: '1', name: 'Юлия Валеева', role: 'Главный организатор', image: '/assets/organizers/megaquiz/2025-04-14 14.57.55.jpg' },
    ],
    mapCoordinates: { lat: 59.956909, lng: 30.307466 }
  },
  {
    id: '3',
    title: 'Megagame',
    description: 'Космос — 6 букв, в которых заключена целая вечность. Миллионы звёзд, тысячи космических тел, огромные неизведанные просторы 🚀 Команда ITMO.Megabattle приготовила для тебя нечто космическое — время погрузиться во Вселенную MegaGame 6.0 🌟 MegaGame — возможность собраться с друзьями и вместе покорить неизведанные галактики игр и вдобавок заработать баллы для своего Мегафакультета',
    date: '2025-04-12',
    time: '12:00 - 22:00',
    address: 'ИТМО, Кронверкский пр., д. 49',
    image: '/assets/events/event-hero.jpg',
    month: 'апрель',
    gallery: [
      { image: '/assets/events/event1.jpg', title: 'Космические игры' },
      { image: '/assets/events/event2.jpg', title: 'Командные соревнования' },
      { image: '/assets/events/event3.jpg', title: 'Киберспорт' },
      { image: '/assets/events/event4.jpg', title: 'Настольные игры' },
      { image: '/assets/events/event5.jpg', title: 'Квесты' },
      { image: '/assets/events/event6.jpg', title: 'Награждение победителей' },
    ],
    schedule: [
      { time: '12:00', title: 'Открытие MegaGame', description: 'Торжественное открытие и представление мегафакультетов' },
      { time: '13:00', title: 'Старт соревнований', description: 'Начало игр и состязаний между командами' },
      { time: '16:00', title: 'Перерыв', description: 'Космический фуршет и развлекательная программа' },
      { time: '17:00', title: 'Финальные состязания', description: 'Решающие игры и определение победителей' },
      { time: '21:00', title: 'Церемония награждения', description: 'Объявление результатов и награждение лучших команд' },
    ],
    organizers: [
      { id: '1', name: 'Сергей Ершов', role: 'Главный организатор', image: '/assets/team-placeholder.jpg' },
    ],
    mapCoordinates: { lat: 59.956909, lng: 30.307466 }
  },
  {
    id: '4',
    title: 'Гала-концерт',
    description: 'TBD',
    date: '2025-05-27',
    time: '18:00 - 22:00',
    address: 'ИТМО, Кронверкский пр., д. 49',
    image: '/assets/events/event-hero.jpg',
    month: 'май',
    gallery: [
      { image: '/assets/events/event1.jpg', title: 'Выступления' },
      { image: '/assets/events/event2.jpg', title: 'Музыкальные номера' },
      { image: '/assets/events/event3.jpg', title: 'Танцевальные номера' },
      { image: '/assets/events/event4.jpg', title: 'Театральные постановки' },
      { image: '/assets/events/event5.jpg', title: 'Награждение участников' },
      { image: '/assets/events/event6.jpg', title: 'Финальное шоу' },
    ],
    schedule: [
      { time: '18:00', title: 'Открытие концерта', description: 'Приветственное слово и начало программы' },
      { time: '18:30', title: 'Первое отделение', description: 'Выступления творческих коллективов' },
      { time: '20:00', title: 'Антракт', description: 'Перерыв и фуршет для гостей' },
      { time: '20:30', title: 'Второе отделение', description: 'Продолжение концертной программы' },
      { time: '21:45', title: 'Финал', description: 'Заключительные номера и благодарности' },
    ],
    organizers: [
      { id: '1', name: 'Егор Корякин', role: 'Режиссёр', image: '/assets/team-placeholder.jpg' },
    ],
    mapCoordinates: { lat: 59.956909, lng: 30.307466 }
  }
];

// Получение данных о мероприятии по ID
const getEventData = (eventId: string | string[] | undefined) => {
  if (!eventId || typeof eventId !== 'string') return null;
  
  // Находим мероприятие по ID
  const event = eventsData.find(event => event.id === eventId);
  
  // Если мероприятие не найдено, возвращаем null
  if (!event) return null;
  
  return event;
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
          
          {/* Компонент "Примите участие в мероприятии" временно скрыт
          <div className={`${styles.section} ${styles.registrationSection}`} id="registration">
            <div className={styles.registrationCard}>
              <h3>Примите участие в мероприятии</h3>
              <p>Присоединяйтесь к нашему мероприятию и получите все необходимые материалы.</p>
              <Link href="#" className={styles.registrationButton}>Зарегистрироваться</Link>
            </div>
          </div>
          */}
        </div>

        <ContactsSection />
      </main>
    </>
  );
};

export default EventPage;
