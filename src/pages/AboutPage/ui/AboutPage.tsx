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

        <section className={styles.sources}>
          <h2>Источники и лицензия</h2>
          <p>
            Карточки являются неофициальной адаптацией материалов учебника{' '}
            <a href="https://learn.javascript.ru/" target="_blank" rel="noreferrer">
              learn.javascript.ru
            </a>
            {' / '}
            <a href="https://javascript.info/" target="_blank" rel="noreferrer">
              The Modern JavaScript Tutorial
            </a>
            {' '}by Ilya Kantor в формат карточек для повторения.
          </p>
          <p>
            Условия использования материалов учебника описаны на странице{' '}
            <a href="https://javascript.info/terms" target="_blank" rel="noreferrer">
              javascript.info/terms
            </a>
            . Контент карточек распространяется на условиях{' '}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              CC BY-NC-SA
            </a>
            .
          </p>
          <p>
            Проект не является официальным проектом learn.javascript.ru или javascript.info
            и не аффилирован с авторами учебника.
          </p>
          <p>
            Проект не использует рекламу, платный доступ или коммерческую
            монетизацию контента, основанного на материалах учебника.
          </p>
        </section>
      </section>
    </div>
  );
};
