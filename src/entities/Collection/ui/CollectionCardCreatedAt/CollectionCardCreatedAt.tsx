import { FC } from 'react';
import styles from './CollectionCardCreatedAt.module.scss';

interface CollectionCardCreatedAtProps {
  createdAtDate: string;
}

export const CollectionCardCreatedAt: FC<CollectionCardCreatedAtProps> = ({ createdAtDate }) => {
  const date = new Date(createdAtDate).toLocaleDateString();
  return (
    <div className={styles.createdAt}>
      Created: {date}
    </div>
  );
};
