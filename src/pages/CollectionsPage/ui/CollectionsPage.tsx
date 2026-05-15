import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockCollections } from 'entities/Collection/model/mockData';
import { Collection } from 'entities/Collection/model/types';
import { JsCourseCollectionsView } from 'features/collections/jsCourseView';
import styles from './CollectionsPage.module.scss';

const CollectionsPage: FC = () => {
  const navigate = useNavigate();

  const onCollectionCardClick = (collection: Collection) => {
    navigate(`/training/${collection.collection_id}`);
  };

  return (
    <div className={styles.collectionsPage} >
      <JsCourseCollectionsView
        collections={mockCollections}
        onCollectionCardClick={onCollectionCardClick}
      />
    </div>
  );
};

export default CollectionsPage;
