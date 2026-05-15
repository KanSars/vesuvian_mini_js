import { Promo } from 'widgets/Promo/ui/Promo';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <Promo />
    </div>
  );
};
