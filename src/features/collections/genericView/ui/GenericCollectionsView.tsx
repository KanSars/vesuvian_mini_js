import { FC, useState } from 'react';
import { Collection, GroupingOption, SortingOption } from 'entities/Collection/model/types';
import { CollectionsHeader } from 'widgets/Collections/Header/ui/CollectionsHeader';
import { List as CollectionsList } from 'widgets/Collections/List/ui/List';

interface GenericCollectionsViewProps {
  collections: Collection[];
  onCollectionCardClick: (collection: Collection) => void;
}

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

export const GenericCollectionsView: FC<GenericCollectionsViewProps> = ({
  collections,
  onCollectionCardClick
}) => {
  const [selectedGroupOtionIndex, setSelectedGroupOtionIndex] = useState(0);
  const [selectedOtionIndex, setSelectedOptionIndex] = useState(0);

  return (
    <>
      <CollectionsHeader
        groupingOptions={groupingOptions}
        selectedGroupOtionIndex={selectedGroupOtionIndex}
        setSelectedGroupOtionIndex={setSelectedGroupOtionIndex}
        sortingOptions={sortingOptions}
        selectedOtionIndex={selectedOtionIndex}
        setSelectedOptionIndex={setSelectedOptionIndex}
      />
      <CollectionsList
        collections={collections}
        groupingProp={groupingOptions[selectedGroupOtionIndex]}
        sortingProp={sortingOptions[selectedOtionIndex]}
        onCollectionCardClick={onCollectionCardClick}
      />
    </>
  );
};
