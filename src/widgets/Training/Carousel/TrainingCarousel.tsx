import { FC, TransitionEvent, useState, useEffect } from 'react';
import { Card } from 'entities/Card/model/types';
import { FlashCard } from 'entities/Card/ui/FlashCard/FlashCard';
import styles from './TrainingCarousel.module.scss';

interface TrainingCarouselProps {
  cards: Card[];
  onComplete: () => void;
  onProgressUpdate: (current: number) => void;
}

export const TrainingCarousel: FC<TrainingCarouselProps> = ({ cards, onComplete, onProgressUpdate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  
  // Состояния для анимации (как в прототипе)
  const [firstCardClass, setFirstCardClass] = useState(styles.previous);
  const [secondCardClass, setSecondCardClass] = useState(styles.current);
  const [thirdCardClass, setThirdCardClass] = useState(styles.next);

  useEffect(() => {
    if (cards.length > 0) {
      onProgressUpdate(currentIndex + 1);
    }
  }, [cards.length, currentIndex, onProgressUpdate]);

  useEffect(() => {
    if (currentIndex >= cards.length) {
      setCurrentIndex(Math.max(cards.length - 1, 0));
      setIsFlipped(false);
      setPendingIndex(null);
    }
  }, [cards.length, currentIndex]);

  if (cards.length === 0) {
    return (
      <div className={styles.carouselContainer}>
        <div className={styles.emptyState}>Карточек для тренировки пока нет</div>
      </div>
    );
  }

  const handleFlip = () => {
    if (pendingIndex === null) {
      setIsFlipped((current) => !current);
    }
  };

  const switchToCard = (targetIndex: number) => {
    if (isFlipped) {
      setPendingIndex(targetIndex);
      setIsFlipped(false);
      return;
    }

    setCurrentIndex(targetIndex);
  };

  const handleFlipEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (pendingIndex === null || event.propertyName !== 'transform') {
      return;
    }

    setCurrentIndex(pendingIndex);
    setPendingIndex(null);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      switchToCard(currentIndex + 1);
      
      // Логика сдвига классов (упрощенная версия прототипа для плавности)
      setFirstCardClass(styles.previous);
      setSecondCardClass(styles.current);
      setThirdCardClass(styles.next);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      switchToCard(currentIndex - 1);
    }
  };

  // Получаем данные для трех карточек
  const prevCard = cards[currentIndex - 1];
  const currentCard = cards[currentIndex];
  const nextCard = cards[currentIndex + 1];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.cardsWrapper}>
        {prevCard && (
          <div className={firstCardClass}>
            <FlashCard 
              term={prevCard.term} 
              definition={prevCard.definition} 
              code={prevCard.code}
              hint={prevCard.hint}
              isFlipped={false}
              onClick={() => {}}
            />
          </div>
        )}
        
        <div className={secondCardClass} onTransitionEnd={handleFlipEnd}>
          <FlashCard 
            term={currentCard.term} 
            definition={currentCard.definition} 
            code={currentCard.code}
            hint={currentCard.hint}
            isFlipped={isFlipped}
            onClick={handleFlip}
          />
        </div>

        {nextCard && (
          <div className={thirdCardClass}>
            <FlashCard 
              term={nextCard.term} 
              definition={nextCard.definition} 
              code={nextCard.code}
              hint={nextCard.hint}
              isFlipped={false}
              onClick={() => {}}
            />
          </div>
        )}
      </div>

      <div className={styles.controls}>
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0 || pendingIndex !== null}
          className={styles.navButton}
        >
          Назад
        </button>
        <span className={styles.counter}>{currentIndex + 1} / {cards.length}</span>
        <button 
          onClick={handleNext} 
          disabled={pendingIndex !== null}
          className={styles.navButton}
        >
          {currentIndex === cards.length - 1 ? 'Завершить' : 'Вперед'}
        </button>
      </div>
    </div>
  );
};
