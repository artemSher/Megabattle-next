import React from 'react';
import Image from 'next/image';
import styles from './StoryCard.module.css';

interface StoryCardProps {
  name: string;
  faculty: string;
  description: string;
  image: string;
  date: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  name,
  faculty,
  description,
  image,
  date
}) => {
  return (
    <div className={styles.storyCard}>
      <div className={styles.storyImageContainer}>
        <Image 
          src={image} 
          alt={name}
          width={200}
          height={200}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className={styles.storyImage}
        />
      </div>
      <h3 className={styles.storyName}>{name}</h3>
      <p className={styles.storyFaculty}>{faculty}</p>
      <p className={styles.storyDescription}>{description}</p>
      <p className={styles.storyDate}>{date}</p>
    </div>
  );
};

export default StoryCard;
