import { FC } from 'react';
import styles from './CardTag.module.scss';

interface CardTagProps {
  tagText: string;
}

export const CardTag: FC<CardTagProps> = ({ tagText }) => {
  return (
    <div className={styles.cardTag}>
      {tagText}
    </div>
  );
};
