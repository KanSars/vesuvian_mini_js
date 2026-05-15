import { FC, useState, useEffect } from 'react';
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
  
  // Состояния для анимации (как в прототипе)
  const [firstCardClass, setFirstCardClass] = useState(styles.previous);
  const [secondCardClass, setSecondCardClass] = useState(styles.current);
  const [thirdCardClass, setThirdCardClass] = useState(styles.next);

  useEffect(() => {
    onProgressUpdate(currentIndex + 1);
  }, [currentIndex, onProgressUpdate]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
      
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
      setIsFlipped(false);
      setCurrentIndex(prev => prev - 1);
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
              hint={prevCard.hint}
              isFlipped={false}
              onClick={() => {}}
            />
          </div>
        )}
        
        <div className={secondCardClass}>
          <FlashCard 
            term={currentCard.term} 
            definition={currentCard.definition} 
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
          disabled={currentIndex === 0}
          className={styles.navButton}
        >
          Назад
        </button>
        <span className={styles.counter}>{currentIndex + 1} / {cards.length}</span>
        <button 
          onClick={handleNext} 
          className={styles.navButton}
        >
          {currentIndex === cards.length - 1 ? 'Завершить' : 'Вперед'}
        </button>
      </div>
    </div>
  );
};
