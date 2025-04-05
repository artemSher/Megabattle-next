import React from 'react';
import Image from 'next/image';
import styles from './TeamMember.module.css';

interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  image: string;
  onClick: (id: number) => void;
  isActive?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  id,
  name,
  role,
  image,
  onClick,
  isActive = false
}) => {
  return (
    <div 
      className={`${styles.teamMember} ${isActive ? styles.active : ''}`} 
      onClick={() => onClick(id)}
      data-member={`member${id}`}
    >
      <div className={styles.memberImage}>
        <Image 
          src={image} 
          alt={`Участник команды ${name}`}
          width={200}
          height={200}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h3 className={styles.memberName}>{name}</h3>
      <p className={styles.memberRole}>{role}</p>
    </div>
  );
};

export default TeamMember;
