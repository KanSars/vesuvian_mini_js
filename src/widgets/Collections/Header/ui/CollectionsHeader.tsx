import { FC } from 'react';
import { SortingOption, GroupingOption } from 'entities/Collection/model/types';
import styles from './Header.module.scss';

interface HeaderProps {
  groupingOptions?: GroupingOption[];
  selectedGroupOtionIndex?: number;
  setSelectedGroupOtionIndex?: (index: number) => void;
  sortingOptions?: SortingOption[];
  selectedOtionIndex?: number;
  setSelectedOptionIndex?: (index: number) => void;
}

export const CollectionsHeader: FC<HeaderProps> = ({
  groupingOptions,
  selectedGroupOtionIndex,
  setSelectedGroupOtionIndex,
  sortingOptions,
  selectedOtionIndex,
  setSelectedOptionIndex
}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Collections</h1>
      <div className={styles.controls}>
        {groupingOptions && setSelectedGroupOtionIndex !== undefined && selectedGroupOtionIndex !== undefined && (
          <div className={styles.controlGroup}>
            <label className={styles.label}>Group by:</label>
            <select 
              value={selectedGroupOtionIndex} 
              onChange={(e) => setSelectedGroupOtionIndex(Number(e.target.value))}
              className={styles.select}
            >
              {groupingOptions.map((opt, i) => (
                <option key={i} value={i}>{opt.name}</option>
              ))}
            </select>
          </div>
        )}
        {sortingOptions && setSelectedOptionIndex !== undefined && selectedOtionIndex !== undefined && (
          <div className={styles.controlGroup}>
            <label className={styles.label}>Sort by:</label>
            <select 
              value={selectedOtionIndex} 
              onChange={(e) => setSelectedOptionIndex(Number(e.target.value))}
              className={styles.select}
            >
              {sortingOptions.map((opt, i) => (
                <option key={i} value={i}>{opt.name}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </header>
  );
};
