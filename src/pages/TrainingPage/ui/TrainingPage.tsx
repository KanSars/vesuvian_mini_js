import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TrainingCarousel } from 'widgets/Training/Carousel/TrainingCarousel';
import { TrainingProgress } from 'widgets/Training/ProgressBar/ProgressBar';
import { courseCards } from 'features/collections/jsCourseView/model/courseCards';
import { jsCourseLessons } from 'features/collections/jsCourseView/model/courseStructure';
import styles from './TrainingPage.module.scss';

const TrainingPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const collection = jsCourseLessons.find(c => c.collection_id === id);
  const cards = id ? courseCards[id] ?? [] : [];

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
        <h1>{collection.name}</h1>
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
