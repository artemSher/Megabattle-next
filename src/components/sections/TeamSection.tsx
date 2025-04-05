import React, { useState } from 'react';
import styles from './TeamSection.module.css';
import TeamMember from '@/components/ui/TeamMember';
import TeamMemberExpanded from '@/components/ui/TeamMemberExpanded';

// Данные о команде организаторов
const organizers = [
  {
    id: 1,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member1.jpg',
    fullImage: '/assets/member1-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 2,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member2.jpg',
    fullImage: '/assets/member2-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 3,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member3.jpg',
    fullImage: '/assets/member3-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 4,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member4.jpg',
    fullImage: '/assets/member4-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 5,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member5.jpg',
    fullImage: '/assets/member5-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 6,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member6.jpg',
    fullImage: '/assets/member6-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  }
];

// Данные о команде ответственных
const responsible = [
  {
    id: 7,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member7.jpg',
    fullImage: '/assets/member7-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 8,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member8.jpg',
    fullImage: '/assets/member8-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 9,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member9.jpg',
    fullImage: '/assets/member9-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 10,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member10.jpg',
    fullImage: '/assets/member10-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 11,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member11.jpg',
    fullImage: '/assets/member11-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
    }
  },
  {
    id: 12,
    name: 'Имя Фамилия',
    role: 'Деятельность',
    image: '/assets/member12.jpg',
    fullImage: '/assets/member12-full.jpg',
    description: 'че то еще\nкто это зачем это что это',
    contacts: {
      email: 'example@megabattle.itmo.ru',
      telegram: '@example',
      phone: 'Номер'
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
    <section className={styles.team}>
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
