import React from 'react';
import styles from './StoriesSection.module.css';
import StoryCard from '@/components/ui/StoryCard';

// Данные об историях участников
const stories = [
  {
    id: 1,
    name: 'ИМЯ ФАМИЛ',
    faculty: 'Мегафакультет: КТУ',
    description: 'Годовой проект состоит из двух раундов и включает в себя лекции по повышению надпрофессиональных качеств студентов, выезды мегафакультетов в УСОЦ «Ягодное», интеллектуальные игры, спортивные состязания и многое другое.',
    image: '/assets/participant1.jpg',
    date: '2 ноября 2024'
  },
  {
    id: 2,
    name: 'ИМЯ ФАМИЛ',
    faculty: 'Мегафакультет: ТИНТ',
    description: 'Участие в проекте позволило мне раскрыть свой потенциал и найти единомышленников. Особенно запомнились творческие мастер-классы и командные соревнования.',
    image: '/assets/participant2.jpg',
    date: '15 ноября 2024'
  },
  {
    id: 3,
    name: 'ИМЯ ФАМИЛ',
    faculty: 'Мегафакультет: ФТиН',
    description: 'MEGABATTLE стал для меня отличной возможностью проявить свои организаторские способности. Работа в команде и обмен опытом с другими участниками - бесценны.',
    image: '/assets/participant3.jpg',
    date: '5 декабря 2024'
  },
  {
    id: 4,
    name: 'ИМЯ ФАМИЛ',
    faculty: 'Мегафакультет: ИКТ',
    description: 'Благодаря проекту я смог применить свои технические навыки в организации мероприятий. Особенно понравилась работа со звуковым и световым оборудованием.',
    image: '/assets/participant4.jpg',
    date: '18 декабря 2024'
  },
  {
    id: 5,
    name: 'ИМЯ ФАМИЛ',
    faculty: 'Мегафакультет: БиТ',
    description: 'MEGABATTLE научил меня работать в условиях многозадачности и сжатых сроков. Это отличная школа личностного роста и профессионального развития.',
    image: '/assets/participant5.jpg',
    date: '10 января 2025'
  },
  {
    id: 6,
    name: 'ИМЯ ФАМИЛ',
    faculty: 'Мегафакультет: КТУ',
    description: 'Участие в проекте помогло мне развить soft skills и найти новых друзей. Командная работа и творческая атмосфера вдохновляют на новые достижения.',
    image: '/assets/participant6.jpg',
    date: '25 января 2025'
  }
];

const StoriesSection: React.FC = () => {
  return (
    <section id="stories" className={styles.stories}>
      <h2 className={styles.storiesTitle}>ИСТОРИИ УЧАСТНИКОВ</h2>
      
      <div className={styles.storiesContainer}>
        <div className={styles.storiesScroll}>
          {stories.map(story => (
            <StoryCard 
              key={story.id}
              name={story.name}
              faculty={story.faculty}
              description={story.description}
              image={story.image}
              date={story.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
