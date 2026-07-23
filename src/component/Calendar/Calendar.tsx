'use client'
import { useState } from 'react';
import styles from './style.module.css';

type Props = {
      tripDates: string[];
      selectedDate: string;
      onSelectDate: (date: string) => void;
};

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

function toDateKey(year: number, month: number, day: number) {
      const mm = String(month + 1).padStart(2, '0');
      const dd = String(day).padStart(2, '0');
      return `${year}-${mm}-${dd}`;
}

export default function TravelCalendar({ tripDates, selectedDate, onSelectDate }: Props) {
      const [baseDate, setBaseDate] = useState(selectedDate);
      const [y, m] = baseDate.split('-').map(Number);
      const year = y;
      const month = m - 1; // 0-indexed

      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      const cells: (number | null)[] = [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: lastDate }, (_, i) => i + 1),
      ];

      const goPrevMonth = () => {
      const prev = new Date(year, month - 1, 1);
      setBaseDate(toDateKey(prev.getFullYear(), prev.getMonth(), 1));
      };

      const goNextMonth = () => {
      const next = new Date(year, month + 1, 1);
      setBaseDate(toDateKey(next.getFullYear(), next.getMonth(), 1));
      };

      return (
            <div className={styles.calendarWrap}>
                  <div className={styles.calendarHeader}>
                        <button className={styles.navBtn} onClick={goPrevMonth}>‹</button>
                        <span className={styles.monthLabel}>{year}년 {month + 1}월</span>
                        <button className={styles.navBtn} onClick={goNextMonth}>›</button>
                  </div>

                  <div className={styles.weekRow}>
                        {WEEKDAYS.map((w) => (
                        <span key={w} className={styles.weekday}>{w}</span>
                        ))}
                  </div>

                  <div className={styles.dateGrid}>
                        {cells.map((day, i) => {
                              if (day === null) return <span key={`empty-${i}`} className={styles.dateCell} />;

                                    const dateKey = toDateKey(year, month, day);
                                    const hasTrip = tripDates.includes(dateKey);
                                    const isSelected = dateKey === selectedDate;

                                    return (
                                          <button
                                                key={dateKey}
                                                className={`${styles.dateCell} ${hasTrip ? styles.hasTrip : ''} ${isSelected ? styles.selected : ''}`}
                                                onClick={() => hasTrip && onSelectDate(dateKey)}
                                                disabled={!hasTrip}
                                          >
                                                {day}
                                          </button>
                                    );
                              }
                        )}
                  </div>
            </div>
      );
}