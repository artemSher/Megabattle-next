import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EventCard.module.css';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  isActive?: boolean;
  organizer?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  location,
  description,
  image,
  isActive = false,
  organizer
}) => {
  return (
    <div className={`${styles.eventCard} ${isActive ? styles.active : ''}`}>
      <div className={styles.eventImage}>
        <Image 
          src={image} 
          alt={title} 
          width={800}
          height={500}
          priority={isActive}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className={styles.eventInfo}>
        <h3>{title}</h3>
        <div className={styles.eventDate}>{date}</div>
        <div className={styles.eventLocation}>{location}</div>
        <div className={styles.eventDescription}>{description}</div>
        {organizer && <div className={styles.eventOrganizer}>{organizer}</div>}
        <Link href={`/events/${id}`} passHref legacyBehavior>
          <a className={styles.eventButton}>Подробнее</a>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
