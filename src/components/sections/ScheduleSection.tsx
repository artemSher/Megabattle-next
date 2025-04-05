import React, { useState } from 'react';
import styles from './ScheduleSection.module.css';
import EventCard from '@/components/ui/EventCard';
import MonthSelector from '@/components/ui/MonthSelector';

// Данные о мероприятиях
const events = [
  {
    id: 1,
    title: 'Мероприятие 1',
    date: '29 ноября',
    location: 'Ул. Ломоносова, д. 9',
    description: 'Описание мероприятия 1. Здесь будет подробная информация о мероприятии, его целях и программе.',
    image: '/assets/event1.jpg',
    month: 'ноябрь'
  },
  {
    id: 2,
    title: 'Мероприятие 2',
    date: '15 декабря',
    location: 'Кронверкский пр., д. 49',
    description: 'Описание мероприятия 2. Здесь будет подробная информация о мероприятии, его целях и программе.',
    image: '/assets/event2.jpg',
    month: 'декабрь'
  },
  {
    id: 3,
    title: 'Мероприятие 3',
    date: '20 января',
    location: 'Биржевая линия, д. 14',
    description: 'Описание мероприятия 3. Здесь будет подробная информация о мероприятии, его целях и программе.',
    image: '/assets/event3.jpg',
    month: 'январь'
  },
  {
    id: 4,
    title: 'Мероприятие 4',
    date: '10 февраля',
    location: 'Ул. Чайковского, д. 11/2',
    description: 'Описание мероприятия 4. Здесь будет подробная информация о мероприятии, его целях и программе.',
    image: '/assets/event4.jpg',
    month: 'февраль'
  },
  {
    id: 5,
    title: 'Мероприятие 5',
    date: '15 марта',
    location: 'Кронверкский пр., д. 49',
    description: 'Описание мероприятия 5. Здесь будет подробная информация о мероприятии, его целях и программе.',
    image: '/assets/event5.jpg',
    month: 'март'
  },
  {
    id: 6,
    title: 'Мероприятие 6',
    date: '5 апреля',
    location: 'Ул. Ломоносова, д. 9',
    description: 'Описание мероприятия 6. Здесь будет подробная информация о мероприятии, его целях и программе.',
    image: '/assets/event6.jpg',
    month: 'апрель'
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
