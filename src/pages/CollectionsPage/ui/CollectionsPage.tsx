import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CollectionsHeader } from 'widgets/Collections/Header/ui/CollectionsHeader';
import { List as CollectionsList } from 'widgets/Collections/List/ui/List';
import { mockCollections } from 'entities/Collection/model/mockData';
import { SortingOption, GroupingOption, Collection } from 'entities/Collection/model/types';
import styles from './CollectionsPage.module.scss';

const sortingOptions: SortingOption[] = [
  { name: '↑ Сортировка по алфавиту', prop: 'name', sortDirection: 'asc' },
  { name: '↓ Сортировка по алфавиту', prop: 'name', sortDirection: 'desc' },
  { name: '↓ Сортировка по дате создания', prop: 'created_at', sortDirection: 'desc' },
  { name: '↑ Сортировка по дате создания', prop: 'created_at', sortDirection: 'asc' },
];

const groupingOptions: GroupingOption[] = [
  { name: '↑ Группировка по алфавиту', prop: 'name', sortDirection: 'asc' },
  { name: '↓ Группировка по алфавиту', prop: 'name', sortDirection: 'desc' },
];

const CollectionsPage: FC = () => {
  const navigate = useNavigate();
  const [selectedGroupOtionIndex, setSelectedGroupOtionIndex] = useState(0);
  const [selectedOtionIndex, setSelectedOptionIndex] = useState(0);

  const onCollectionCardClick = (collection: Collection) => {
    navigate(`/training/${collection.collection_id}`);
  };

  return (
    <div className={styles.collectionsPage} >
      {/* <CollectionsHeader
        groupingOptions={groupingOptions}
        selectedGroupOtionIndex={selectedGroupOtionIndex}
        setSelectedGroupOtionIndex={setSelectedGroupOtionIndex}
        sortingOptions={sortingOptions}
        selectedOtionIndex={selectedOtionIndex}
        setSelectedOptionIndex={setSelectedOptionIndex}
      /> */}
      <CollectionsList
        collections={mockCollections}
        // groupingProp={groupingOptions[selectedGroupOtionIndex]}
        // sortingProp={sortingOptions[selectedOtionIndex]}
        onCollectionCardClick={onCollectionCardClick}
      />
    </div>
  );
};

export default CollectionsPage;
