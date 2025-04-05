import React from 'react';
import styles from './Vector.module.css';

interface VectorProps {
  position: 'top-right' | 'middle-left' | 'bottom-right';
}

const Vector: React.FC<VectorProps> = ({ position }) => {
  return (
    <div className={`${styles.vectorDecoration} ${styles[position]}`}></div>
  );
};

export default Vector;
