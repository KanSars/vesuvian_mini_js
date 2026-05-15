import { FC } from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  text: string;
}

export const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h2 className={styles.title}>
      {text}
    </h2>
  );
};
