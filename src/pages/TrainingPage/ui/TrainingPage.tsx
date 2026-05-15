import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TrainingCarousel } from 'widgets/Training/Carousel/TrainingCarousel';
import { TrainingProgress } from 'widgets/Training/ProgressBar/ProgressBar';
import { Card } from 'entities/Card/model/types';
import { jsCourseLessons } from 'features/collections/jsCourseView/model/courseStructure';
import styles from './TrainingPage.module.scss';

// Моковые данные для карточек (в будущем будут приходить из API по collectionId)
const mockCards: Record<string, Card[]> = {
  '1': [
    { id: 'c1', term: 'Apple', definition: 'Яблоко', hint: 'Красный фрукт' },
    { id: 'c2', term: 'Banana', definition: 'Банан', hint: 'Желтый фрукт' },
    { id: 'c3', term: 'Cherry', definition: 'Вишня', hint: 'Маленькая красная ягода' },
  ],
  '2': [
    { id: 'c4', term: 'Lion', definition: 'Лев', hint: 'Царь зверей' },
    { id: 'c5', term: 'Elephant', definition: 'Слон', hint: 'Самое большое сухопутное животное' },
    { id: 'c6', term: 'Giraffe', definition: 'Жираф', hint: 'Длинная шея' },
  ],
  '3': [
    { id: 'c7', term: '1 + 1', definition: '2', hint: 'Простейшее сложение' },
    { id: 'c8', term: '2 * 2', definition: '4', hint: 'Умножение' },
    { id: 'c9', term: '10 / 2', definition: '5', hint: 'Деление' },
  ],
  '4': [
    { id: 'c10', term: 'Sparrow', definition: 'Воробей', hint: 'Маленькая птичка' },
    { id: 'c11', term: 'Eagle', definition: 'Орел', hint: 'Хищная птица' },
    { id: 'c12', term: 'Owl', definition: 'Сова', hint: 'Ночная птица' },
  ]
};

const TrainingPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const collection = jsCourseLessons.find(c => c.collection_id === id);
  const cards = id ? mockCards[id] ?? [] : [];

  if (!collection) {
    return (
      <div className={styles.errorPage}>
        <h2>Коллекция не найдена</h2>
        <button onClick={() => navigate('/collections')}>Вернуться к списку</button>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className={styles.congratulations}>
        <h1>Поздравляем!</h1>
        <p>Вы успешно прошли коллекцию: <strong>{collection.name}</strong></p>
        <button onClick={() => navigate('/collections')} className={styles.backButton}>
          К списку коллекций
        </button>
      </div>
    );
  }

  return (
    <div className={styles.trainingPage}>
      <header className={styles.header}>
        <h1>Тренировка: {collection.name}</h1>
        {cards.length > 0 && <TrainingProgress current={currentStep} total={cards.length} />}
      </header>
      
      <main className={styles.main}>
        <TrainingCarousel 
          cards={cards} 
          onComplete={() => setIsCompleted(true)}
          onProgressUpdate={setCurrentStep}
        />
      </main>
    </div>
  );
};

export default TrainingPage;
