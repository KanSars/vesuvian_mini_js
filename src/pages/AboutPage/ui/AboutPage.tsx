import styles from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.content}>
        <h1>О проекте</h1>
        <p>
          Vesuvian — приложение для повторения JavaScript по карточкам.
          Сейчас курс собирается вокруг структуры learn.javascript.ru:
          язык JavaScript, браузерные API и тематические разделы.
        </p>
        <p>
          Коллекции будут постепенно наполняться вопросами, определениями и
          короткими подсказками для тренировки.
        </p>
      </section>
    </div>
  );
};
