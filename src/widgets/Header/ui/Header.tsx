import { useNavigate } from 'react-router-dom';
import { Logo } from 'shared/ui/Logo/Logo';

import styles from './Header.module.scss';
import { Button } from 'shared/ui/Button/Button';

export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.actions}>
        <Button label="Коллекции" onClick={() => navigate('/collections')} />
      </div>
    </header>
  );
};
