import styles from './Button.module.scss';

interface ButtonProps {
  label?: string;
  btnStyle?: 'link' | 'primary' | 'secondary';
  fontSize?: 'small' | 'medium' | 'large';
  link?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({ label, btnStyle = 'primary', fontSize = 'medium', children, onClick }: ButtonProps) => {
  const className = `${styles.button} ${styles[btnStyle]} ${styles[fontSize]}`;
  
  return (
    <button className={className} onClick={onClick}>
      {label || children}
    </button>
  );
};

export const IconButton = ({ iconName, width = '25', height = '25' }: { iconName: string; width?: string; height?: string }) => {
  return (
    <button className={styles.iconButton}>
      <span style={{ width: `${width}px`, height: `${height}px` }}>{iconName}</span>
    </button>
  );
};
