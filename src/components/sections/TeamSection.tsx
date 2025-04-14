import React, { useState } from 'react';
import styles from './TeamSection.module.css';
import TeamMember from '@/components/ui/TeamMember';
import TeamMemberExpanded from '@/components/ui/TeamMemberExpanded';

// Данные о команде организаторов
const organizers = [
  {
    id: 1,
    name: 'Данила Свиненков',
    role: 'Главный организатор',
    image: '/assets/organizers/main/Danila.jpg',
    fullImage: '/assets/organizers/main/Danila.jpg',
    description: 'Главный организатор проекта ITMO.Megabattle',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@danilasvin',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 2,
    name: 'Олег Аршинов',
    role: 'Мегаорганизатор',
    image: '/assets/organizers/main/Oleg.jpg',
    fullImage: '/assets/organizers/main/Oleg.jpg',
    description: 'Отвечает за техническое оснащение и проведение мероприятий',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@arshinov',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 3,
    name: 'Саша Зажарская',
    role: 'Мегаорганизатор',
    image: '/assets/organizers/main/Aleksandra.jpg',
    fullImage: '/assets/organizers/main/Aleksandra.jpg',
    description: 'Отвечает за визуальную составляющую и креативные идеи',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@sashazajar',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 4,
    name: 'Юлия Валеева',
    role: 'Мегаорганизатор',
    image: '/assets/organizers/main/Ulia.jpg',
    fullImage: '/assets/organizers/main/Ulia.jpg',
    description: 'Координирует проведение MegaQuiz и других мероприятий',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@yuliavaleeva',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 5,
    name: 'Илья Лесин',
    role: 'Мегаорганизатор',
    image: '/assets/organizers/main/Ilia.jpg',
    fullImage: '/assets/organizers/main/Ilia.jpg',
    description: 'Отвечает за планирование и реализацию проектов',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@ilyalesin',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 6,
    name: 'Шерстобитов Артем',
    role: 'Мегаорганизатор',
    image: '/assets/organizers/main/Artem.jpg',
    fullImage: '/assets/organizers/main/Artem.jpg',
    description: 'Отвечает за техническую реализацию проектов',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@artemsher',
      phone: '+7 (999) 999-99-99'
    }
  }
];

// Данные о команде ответственных
const responsible = [
  {
    id: 7,
    name: 'Александр Заяц',
    role: 'Главный Ответственный ФТМИ',
    image: '/assets/organizers/megaresponsible/sasha.jpg',
    fullImage: '/assets/organizers/megaresponsible/sasha.jpg',
    description: 'Главный ответственный за мероприятия ФТМИ',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@megabattle',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 8,
    name: 'Козлякова Дарья',
    role: 'Ответственный ФТМИ',
    image: '/assets/organizers/megaresponsible/Dasha.jpg',
    fullImage: '/assets/organizers/megaresponsible/Dasha.jpg',
    description: 'Ответственный за проведение мероприятий ФТМИ',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@megabattle',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 9,
    name: 'Анна Белоусова',
    role: 'Ответственный ФТМИ',
    image: '/assets/organizers/megaresponsible/anna.jpg',
    fullImage: '/assets/organizers/megaresponsible/anna.jpg',
    description: 'Ответственный за проведение мероприятий ФТМИ',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@megabattle',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 10,
    name: 'Мария Федорова',
    role: 'Главный ответственный КТУ',
    image: '/assets/organizers/megaresponsible/mariaFedorova.jpg',
    fullImage: '/assets/organizers/megaresponsible/mariaFedorova.jpg',
    description: 'Главный ответственный за мероприятия КТУ',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@megabattle',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 11,
    name: 'Аня Штурбина',
    role: 'Ответственный ФТМИ',
    image: '/assets/organizers/megaresponsible/Ana shub.jpg',
    fullImage: '/assets/organizers/megaresponsible/Ana shub.jpg',
    description: 'Ответственный за проведение мероприятий ФТМИ',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@megabattle',
      phone: '+7 (999) 999-99-99'
    }
  },
  {
    id: 12,
    name: 'Анастасия Солдатова',
    role: 'Ответственный ФТМИ',
    image: '/assets/organizers/megaresponsible/Anastasia soldatova.jpg',
    fullImage: '/assets/organizers/megaresponsible/Anastasia soldatova.jpg',
    description: 'Ответственный за проведение мероприятий ФТМИ',
    contacts: {
      email: 'megabattle@itmo.ru',
      telegram: '@megabattle',
      phone: '+7 (999) 999-99-99'
    }
  }
];

const TeamSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('organizers');
  const [activeMember, setActiveMember] = useState<number | null>(null);

  const handleMemberClick = (id: number) => {
    setActiveMember(id === activeMember ? null : id);
  };

  const getActiveMemberData = () => {
    if (activeMember === null) return null;
    
    if (activeFilter === 'organizers') {
      return organizers.find(member => member.id === activeMember);
    } else {
      return responsible.find(member => member.id === activeMember);
    }
  };

  return (
    <section id="team" className={styles.team}>
      <h2 className={styles.teamTitle}>АКТУАЛЬНАЯ КОМАНДА</h2>
      <div className={styles.teamFilters}>
        <button 
          className={`${styles.teamFilter} ${activeFilter === 'organizers' ? styles.active : ''}`}
          onClick={() => {
            setActiveFilter('organizers');
            setActiveMember(null);
          }}
          data-filter="organizers"
        >
          Мегаорганизаторы
        </button>
        <button 
          className={`${styles.teamFilter} ${activeFilter === 'responsible' ? styles.active : ''}`}
          onClick={() => {
            setActiveFilter('responsible');
            setActiveMember(null);
          }}
          data-filter="responsible"
        >
          Мегаответственные
        </button>
      </div>
      
      <div className={styles.teamMembersContainer}>
        <div className={`${styles.teamMembersScroll} ${activeFilter === 'organizers' ? styles.active : ''} organizers`}>
          {organizers.map(member => (
            <TeamMember 
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              onClick={handleMemberClick}
              isActive={member.id === activeMember}
            />
          ))}
        </div>
        
        <div className={`${styles.teamMembersScroll} ${activeFilter === 'responsible' ? styles.active : ''} responsible`}>
          {responsible.map(member => (
            <TeamMember 
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              onClick={handleMemberClick}
              isActive={member.id === activeMember}
            />
          ))}
        </div>

        {activeMember !== null && getActiveMemberData() && (
          <div className={styles.memberInfoExpandedWrapper}>
            <TeamMemberExpanded 
              member={getActiveMemberData()!}
              onClose={() => setActiveMember(null)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
