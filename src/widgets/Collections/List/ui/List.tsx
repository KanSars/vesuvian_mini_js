import { FC } from 'react';
import { Collection, SortingOption, GroupingOption } from 'entities/Collection/model/types';
import { CollectionPageGroup } from './CollectionPageGroup/CollectionPageGroup';
import { sortObjectValues } from 'shared/lib/sort/sortObjectValues';
import { CollectionCard } from 'entities/Collection/ui/CollectionCard/CollectionCard';
import { CollectionCardCreatedAt } from 'entities/Collection/ui/CollectionCardCreatedAt/CollectionCardCreatedAt';
import styles from './CollectionPageGroup.module.scss';

interface ListProps {
  collections: Collection[];
  groupingProp?: GroupingOption;
  sortingProp?: SortingOption;
  onCollectionCardClick: (collection: Collection) => void;
}

export const List: FC<ListProps> = ({
  collections,
  groupingProp,
  sortingProp,
  onCollectionCardClick
}) => {
  
  if (!groupingProp || !sortingProp) {
    return (
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
    );
  }

  const getGroupedCollections = () => {
    const grouped: Record<string, Collection[]> = {};
    
    collections.forEach(collection => {
      let groupKey = '';
      if (groupingProp.prop === 'name') {
        groupKey = collection.name[0].toUpperCase();
      } else if (groupingProp.prop === 'created_at') {
        groupKey = new Date(collection.created_at).toLocaleDateString();
      }
      
      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }
      grouped[groupKey].push(collection);
    });
    
    const descending = sortingProp.sortDirection === 'desc';
    const sortedGroups = sortObjectValues(grouped, descending, sortingProp.prop);
    
    return Object.entries(sortedGroups).sort((a, b) => {
      const order = groupingProp.sortDirection === 'desc' ? -1 : 1;
      return a[0].localeCompare(b[0]) * order;
    });
  };

  const groupedData = getGroupedCollections();

  return (
    <div className="collections-list" >
      {groupedData.map(([title, items]) => (
        <CollectionPageGroup 
          key={title} 
          groupTitle={title} 
          collections={items} 
          onCollectionCardClick={onCollectionCardClick} 
        />
      ))}
    </div>
  );
};
