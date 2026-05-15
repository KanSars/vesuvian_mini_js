import { FC } from 'react';
import styles from './ProgressBar.module.scss';

interface TrainingProgressProps {
  current: number;
  total: number;
}

export const TrainingProgress: FC<TrainingProgressProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span>Прогресс: {current} / {total}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className={styles.track}>
        <div className={styles.bar} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};
