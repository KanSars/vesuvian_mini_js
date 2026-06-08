import { FC, useEffect, useState } from 'react';
import { Card } from 'entities/Card/model/types';
import { FlashCard } from 'entities/Card/ui/FlashCard/FlashCard';
import styles from './TrainingCarousel.module.scss';

interface TrainingCarouselProps {
  cards: Card[];
  onComplete: () => void;
  onProgressUpdate: (current: number) => void;
}

type SlotId = 0 | 1 | 2;
type SlotRole = 'previous' | 'current' | 'next';
type MotionDirection = 'forward' | 'backward';

interface CarouselSlot {
  id: SlotId;
  role: SlotRole;
  motion?: MotionDirection;
}

const INITIAL_SLOTS: CarouselSlot[] = [
  { id: 0, role: 'previous' },
  { id: 1, role: 'current' },
  { id: 2, role: 'next' },
];

const getCardIndex = (role: SlotRole, currentIndex: number) => {
  if (role === 'previous') {
    return currentIndex - 1;
  }

  if (role === 'next') {
    return currentIndex + 1;
  }

  return currentIndex;
};

export const TrainingCarousel: FC<TrainingCarouselProps> = ({ cards, onComplete, onProgressUpdate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slots, setSlots] = useState<CarouselSlot[]>(INITIAL_SLOTS);
  const [flippedSlots, setFlippedSlots] = useState<Record<SlotId, boolean>>({
    0: false,
    1: false,
    2: false,
  });

  useEffect(() => {
    if (cards.length > 0) {
      onProgressUpdate(currentIndex + 1);
    }
  }, [cards.length, currentIndex, onProgressUpdate]);

  useEffect(() => {
    if (currentIndex >= cards.length) {
      setCurrentIndex(Math.max(cards.length - 1, 0));
      setSlots(INITIAL_SLOTS);
      setFlippedSlots({ 0: false, 1: false, 2: false });
    }
  }, [cards.length, currentIndex]);

  if (cards.length === 0) {
    return (
      <div className={styles.carouselContainer}>
        <div className={styles.emptyState}>Карточек для тренировки пока нет</div>
      </div>
    );
  }

  const handleFlip = (slotId: SlotId) => {
    setFlippedSlots((current) => ({
      ...current,
      [slotId]: !current[slotId],
    }));
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      const incomingSlot = slots.find((slot) => slot.role === 'next');

      setSlots((currentSlots) => currentSlots.map((slot) => {
        if (slot.role === 'previous') {
          return { ...slot, role: 'next', motion: undefined };
        }

        if (slot.role === 'current') {
          return { ...slot, role: 'previous', motion: 'forward' };
        }

        return { ...slot, role: 'current', motion: undefined };
      }));

      if (incomingSlot) {
        setFlippedSlots((current) => ({
          ...current,
          [incomingSlot.id]: false,
        }));
      }

      setCurrentIndex((current) => current + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const incomingSlot = slots.find((slot) => slot.role === 'previous');

      setSlots((currentSlots) => currentSlots.map((slot) => {
        if (slot.role === 'next') {
          return { ...slot, role: 'previous', motion: undefined };
        }

        if (slot.role === 'current') {
          return { ...slot, role: 'next', motion: 'backward' };
        }

        return { ...slot, role: 'current', motion: undefined };
      }));

      if (incomingSlot) {
        setFlippedSlots((current) => ({
          ...current,
          [incomingSlot.id]: false,
        }));
      }

      setCurrentIndex((current) => current - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.cardsWrapper}>
        {slots.map((slot) => {
          const card = cards[getCardIndex(slot.role, currentIndex)];
          const className = [
            styles[slot.role],
            slot.motion ? styles[slot.motion] : '',
          ].filter(Boolean).join(' ');

          return (
            <div key={slot.id} className={className}>
              {card && (
                <FlashCard
                  term={card.term}
                  definition={card.definition}
                  code={card.code}
                  hint={card.hint}
                  isFlipped={flippedSlots[slot.id]}
                  onClick={slot.role === 'current' ? () => handleFlip(slot.id) : () => {}}
                />
              )}
            </div>
          );
        })}
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
