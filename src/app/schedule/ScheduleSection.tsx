import { scheduleData } from '@/lib/data/schedule/scheduleData';
import styles from './style.module.css';

type Props = {
  date: string;
};

export default function ScheduleSection({ date }: Props) {
  const day = scheduleData.find((d) => d.date === date);

  if (!day) {
    return <p className={styles.empty}>해당 날짜의 일정이 없습니다.</p>;
  }
  
  return (
    <div className={styles.scheduleWrap}>
      {scheduleData.map((day) => (
        <div key={day.date} className={styles.dayBlock}>
          <h3 className={styles.dayTitle}>
            {day.dayLabel} <span className={styles.dayDate}>{day.date}</span>
          </h3>

          <ul className={styles.itemList}>
            {day.items.map((item) => (
              <li key={item.id} className={styles.item}>
                <span className={styles.itemTime}>{item.startTime}</span>~
                <span className={styles.itemTime}>{item.endTime}</span>
                <span className={styles.itemPlace}>{item.place}</span>
                {item.memo && <span className={styles.itemMemo}>{item.memo}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}