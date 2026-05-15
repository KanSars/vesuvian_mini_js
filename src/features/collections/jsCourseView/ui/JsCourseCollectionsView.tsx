import { FC } from 'react';
import { Collection } from 'entities/Collection/model/types';
import { List as CollectionsList } from 'widgets/Collections/List/ui/List';

interface JsCourseCollectionsViewProps {
  collections: Collection[];
  onCollectionCardClick: (collection: Collection) => void;
}

export const JsCourseCollectionsView: FC<JsCourseCollectionsViewProps> = ({
  collections,
  onCollectionCardClick
}) => {
  return (
    <CollectionsList
      collections={collections}
      onCollectionCardClick={onCollectionCardClick}
    />
  );
};
