import { FC } from 'react';
import styles from './FlashCard.module.scss';

interface FlashCardProps {
  term: string;
  definition: string;
  hint?: string;
  isFlipped: boolean;
  onClick: () => void;
}

export const FlashCard: FC<FlashCardProps> = ({ term, definition, hint, isFlipped, onClick }) => {
  return (
    <button
      type="button"
      className={styles.flipCard}
      onClick={onClick}
      aria-label={isFlipped ? `Показать термин: ${term}` : `Показать определение для: ${term}`}
    >
      <div className={`${styles.flipCardInner} ${isFlipped ? styles.isFlipped : ''}`}>
        <div className={styles.flipCardFront}>
          <div className={styles.cardContent}>
            <span className={styles.term}>{term}</span>
            {hint && <span className={styles.hint}>Подсказка: {hint}</span>}
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <div className={styles.cardContent}>
            <span className={styles.definition}>{definition}</span>
          </div>
        </div>
      </div>
    </button>
  );
};
