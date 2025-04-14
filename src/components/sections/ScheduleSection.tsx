import React, { useState } from 'react';
import styles from './ScheduleSection.module.css';
import EventCard from '@/components/ui/EventCard';
import MonthSelector from '@/components/ui/MonthSelector';

// Данные о мероприятиях
const events = [
  {
    id: 1,
    title: 'MIniGames',
    date: '24.02 – 10.03',
    location: 'ИТМО',
    description: 'Приветствую вас, о славные аббаты, и крестьяне, и ремесленники, и рыцари 🙂 Мы все здесь собравшись, дабы с размахом праздновать и гулять весенний праздник MiniGames, и будет наше празднование длиться 14 дней и 14 ночей с дня 24 марта!',
    image: '/assets/event1.jpg',
    month: 'февраль',
    organizer: 'Никита Руднев, глав орг'
  },
  {
    id: 2,
    title: 'MegaQuiz IV',
    date: '22.03 – 23.03',
    location: 'ул. Гривцова, д. 14-16',
    description: '«Скажи мне, что ты ешь, и я скажу, кто ты» — вот философия шеф-повара кафе Quizine. Для наших гостей мы готовим только лучшее, такое же изысканное и уникальное, как они сами 🍩 Пришло время и тебе окунуться в волшебный мир кулинарии попробовать наши невероятные блюда.',
    image: '/assets/events/quiz.jpg',
    month: 'март',
    organizer: 'Юлия Валеева, ГлавОрг'
  },
  {
    id: 3,
    title: 'Megagame',
    date: '12.04',
    location: 'ИТМО',
    description: 'Космос — 6 букв, в которых заключена целая вечность. Миллионы звёзд, тысячи космических тел, огромные неизведанные просторы 🚀 Команда ITMO.Megabattle приготовила для тебя нечто космическое — время погрузиться во Вселенную MegaGame 6.0 🌟 MegaGame — возможность собраться с друзьями и вместе покорить неизведанные галактики игр и вдобавок заработать баллы для своего Мегафакультета',
    image: '/assets/event3.jpg',
    month: 'апрель',
    organizer: 'Сергей Ершов, ГлавОрг'
  },
  {
    id: 4,
    title: 'Гала-концерт',
    date: '27.05',
    location: 'ИТМО',
    description: 'TBD',
    image: '/assets/event4.jpg',
    month: 'май',
    organizer: 'Егор Корякин, Режиссёр'
  }
];

// Массив месяцев для селектора
const months = [
  'сентябрь', 'октябрь', 'ноябрь', 'декабрь',
  'январь', 'февраль', 'март', 'апрель',
  'май', 'июнь', 'июль', 'август'
];

const ScheduleSection: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('ноябрь');

  // Находим первое мероприятие для выбранного месяца (в оригинале показывается одно мероприятие)
  const currentEvent = events.find(event => event.month === selectedMonth);

  return (
    <section id="events" className={styles.schedule}>
      <h2 className={styles.scheduleTitle}>МЕРОПРИЯТИЯ 2024 - 2025</h2>
      
      <div className={styles.monthsContainer}>
        <MonthSelector 
          months={months} 
          selectedMonth={selectedMonth} 
          onChange={(month) => setSelectedMonth(month)} 
        />
      </div>
      
      <div className={styles.eventCards}>
        {/* Отображаем все EventCard, но активным делаем только соответствующий месяцу */}
        {events.map(event => (
          <EventCard 
            key={event.id} 
            id={String(event.id)} 
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
            image={event.image}
            organizer={event.organizer}
            isActive={event.month === selectedMonth}
          />
        ))}
        
        {!currentEvent && (
          <div className={styles.noEvents}>
            <p>Нет запланированных мероприятий на этот месяц</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScheduleSection;
