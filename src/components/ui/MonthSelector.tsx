import React from 'react';
import styles from './MonthSelector.module.css';

interface MonthSelectorProps {
  months: string[];
  selectedMonth: string;
  onChange: (month: string) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ months, selectedMonth, onChange }) => {
  return (
    <div className={styles.monthsContainer}>
      <div className={styles.monthsScroll}>
        {months.map((month) => (
          <div 
            key={month}
            className={`${styles.month} ${month === selectedMonth ? styles.active : ''}`}
            onClick={() => onChange(month)}
          >
            <span>{month.charAt(0).toUpperCase() + month.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthSelector;
