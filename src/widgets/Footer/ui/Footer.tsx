import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/Button/Button';
import styles from './Footer.module.scss';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={`${styles.footer} small-text`}>
      <ul className={styles.footerNav}>
        <li>
          <Button
            btnStyle='link'
            fontSize='small'
            label='О проекте'
            onClick={() => navigate('/about')}
          />
        </li>
        {/* <li>
          <Button
            btnStyle='link'
            fontSize='small'
            label='FAQ'
          />
        </li> */}
        {/* <li>
          <ul className={styles.socialLinks}>
            <li><IconButton iconName={'telleg_icon'} width='25' height='25' /></li>
            <li><IconButton iconName={'twit_icon'} width='25' height='25' /></li>
            <li><IconButton iconName={'vk_icon'} width='25' height='25' /></li>
          </ul>
        </li> */}
      </ul>
      {/* <div className={styles.copyright}>
        <p>© 2023 - 2024 ООО “ВезувианРу”</p>
      </div> */}
    </footer>
  );
};
