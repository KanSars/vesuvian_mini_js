import { FC } from 'react';
import { Collection } from '../../model/types';
import { CardTag } from 'shared/ui/CardTag/CardTag';
import styles from './CollectionCard.module.scss';

interface CollectionCardProps {
  collection: Collection;
  onCollectionCardClick: (collection: Collection) => void;
}

export const CollectionCard: FC<CollectionCardProps> = ({ collection, onCollectionCardClick }) => {
  const { name, tags } = collection;

  return (
    <div 
      onClick={() => onCollectionCardClick(collection)}
      className={styles.collectionCard}
    >
      <span className={styles.title}>{name}</span>
      {tags?.length > 0 && (
        <div className={styles.tagsWrapper}>
          {tags.map(tag => <CardTag key={tag.id} tagText={tag.name} />)}
        </div>
      )}
    </div>
  );
};
