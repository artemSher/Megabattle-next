import React from 'react';
import Image from 'next/image';
import styles from './TeamMemberExpanded.module.css';

interface MemberData {
  id: number;
  name: string;
  role: string;
  image: string;
  fullImage: string;
  description: string;
  contacts: {
    email: string;
    telegram: string;
    phone: string;
  };
}

interface TeamMemberExpandedProps {
  member: MemberData;
  onClose: () => void;
  isActive?: boolean;
}

const TeamMemberExpanded: React.FC<TeamMemberExpandedProps> = ({ member, onClose, isActive = true }) => {
  return (
    <div className={`${styles.memberInfoExpanded} ${isActive ? styles.active : ''}`} id={`member${member.id}-info`}>
      <div className={styles.memberExpandedImage}>
        <Image 
          src={member.fullImage || member.image} 
          alt={`Фото участника ${member.name}`}
          width={600}
          height={600}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <div className={styles.memberExpandedInfo}>
        <h2 className={styles.memberExpandedName}>{member.name}</h2>
        <span className={styles.memberExpandedRole}>Мегаотв. {member.role.split(' ')[0]}</span>
        
        <div className={styles.memberExpandedContacts}>
          <h4>Контактные данные:</h4>
          <p>{member.contacts.phone}</p>
          <p>{member.contacts.email}</p>
        </div>
        
        <p className={styles.memberExpandedDescription}>
          {member.description}
        </p>
        
        <div className={styles.memberExpandedFooter}>
          <span className={styles.memberExpandedDate}>5 декабря 2024</span>
          <span className={styles.memberExpandedSmile}>:)</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberExpanded;
