import { FC } from 'react';
import { Collection } from 'entities/Collection/model/types';
import { Title } from 'shared/ui/Title/Title';
import { CollectionCard } from 'entities/Collection/ui/CollectionCard/CollectionCard';
import { CollectionCardCreatedAt } from 'entities/Collection/ui/CollectionCardCreatedAt/CollectionCardCreatedAt';
import styles from '../CollectionPageGroup.module.scss';

interface CollectionPageGroupProps {
  groupTitle: string;
  collections: Collection[];
  onCollectionCardClick: (collection: Collection) => void;
}

export const CollectionPageGroup: FC<CollectionPageGroupProps> = ({ 
  groupTitle, 
  collections, 
  onCollectionCardClick 
}) => {
  return (
    <div className={styles.group}>
      <Title text={groupTitle} />
      <div className={styles.cardsWrapper}>
        {collections.map((collection) => (
          <div key={collection.collection_id} className={styles.cardItem}>
            <CollectionCard 
              collection={collection} 
              onCollectionCardClick={onCollectionCardClick} 
            />
            <CollectionCardCreatedAt createdAtDate={collection.created_at} />
          </div>
        ))}
      </div>
    </div>
  );
};
