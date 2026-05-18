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
    {
      id: 'intro-what-is-js',
      term: 'Что такое JavaScript?',
      definition: 'JavaScript — язык для оживления веб-страниц. Программы на нём называются скриптами: браузер может читать их как текст и выполнять прямо на странице.',
      hint: 'Смысл первого подраздела: зачем язык появился и как запускается код.',
    },
    {
      id: 'intro-browser-can',
      term: 'Что может JavaScript в браузере?',
      definition: 'Он может менять HTML и стили, реагировать на действия пользователя, отправлять сетевые запросы, работать с cookies и хранить данные в браузере.',
      hint: 'Страница, пользователь, сеть и локальное хранение.',
    },
    {
      id: 'intro-browser-cannot',
      term: 'Чего не может JavaScript в браузере?',
      definition: 'Из соображений безопасности он не получает свободный доступ к файлам, системным функциям, устройствам и данным других сайтов без явного разрешения.',
      hint: 'Ограничения защищают пользователя и его данные.',
    },
    {
      id: 'intro-special',
      term: 'Что делает JavaScript особенным?',
      definition: 'Он полностью интегрирован с HTML/CSS, хорошо подходит для простых интерфейсных задач и поддерживается всеми основными браузерами по умолчанию.',
      hint: 'Именно это сделало его главным языком браузера.',
    },
    {
      id: 'intro-languages-over-js',
      term: 'Что такое языки “над” JavaScript?',
      definition: 'Это языки, которые перед запуском преобразуются в JavaScript. Они могут добавлять другой синтаксис, типизацию или возможности для конкретных задач.',
      hint: 'Например, TypeScript транспилируется в JavaScript.',
    },
    {
      id: 'intro-summary',
      term: 'Итого: где применяется JavaScript?',
      definition: 'JavaScript начинался как язык браузера, но теперь используется и на сервере, и на других платформах. В браузере он остаётся ключевой технологией интерфейсов.',
      hint: 'Браузер — главная, но не единственная среда.',
    },
  ],
  '2': [
    {
      id: 'manuals-specification',
      term: 'Для чего нужна спецификация ECMAScript?',
      definition: 'Она формально описывает сам язык JavaScript. Это самый точный источник, но обычно он нужен не для ежедневного чтения, а для глубокого уточнения деталей.',
      hint: 'Самый официальный источник про язык.',
    },
    {
      id: 'manuals-references',
      term: 'Зачем нужны справочники вроде MDN?',
      definition: 'Справочники удобны для повседневной работы: в них быстро ищут методы, свойства, примеры и подробности по конкретной возможности JavaScript.',
      hint: 'Когда нужно вспомнить API или метод.',
    },
    {
      id: 'manuals-compatibility',
      term: 'Для чего нужны таблицы совместимости?',
      definition: 'Они показывают, какие возможности JavaScript поддерживаются разными браузерами и движками. Это помогает понять, можно ли использовать конкретную функцию.',
      hint: 'Например, caniuse и compat-table.',
    },
  ],
  '3': [
    {
      id: 'editors-ide',
      term: 'Что такое IDE?',
      definition: 'IDE — мощная среда разработки, которая работает с проектом целиком: знает файлы, помогает с автодополнением, интегрируется с git, тестами и другими инструментами.',
      hint: 'Это больше, чем просто редактор одного файла.',
    },
    {
      id: 'editors-light',
      term: 'Чем “лёгкие” редакторы отличаются от IDE?',
      definition: 'Они быстрее и проще, хорошо подходят для быстрого открытия и редактирования файлов. При этом с плагинами граница между ними и IDE может размываться.',
      hint: 'Скорость и простота против проектной “тяжеловесности”.',
    },
    {
      id: 'editors-choice',
      term: 'Как выбрать редактор кода?',
      definition: 'Выбор зависит от проекта, привычек и личных предпочтений. Лучше попробовать несколько инструментов и оставить тот, в котором удобно работать.',
      hint: 'Не существует одного идеального редактора для всех.',
    },
  ],
  '4': [
    {
      id: 'devtools-chrome',
      term: 'Как открыть консоль разработчика в Chrome?',
      definition: 'В Chrome консоль обычно открывают клавишей F12, а на Mac — сочетанием Cmd+Opt+J. Во вкладке Console видны ошибки и можно выполнять JavaScript-команды.',
      hint: 'Console показывает ошибки и принимает команды.',
    },
    {
      id: 'devtools-other-browsers',
      term: 'Как устроены devtools в Firefox, Edge и других браузерах?',
      definition: 'В большинстве браузеров инструменты разработчика открываются через F12 и работают по похожим принципам. Разобравшись в одном, легче перейти к другому.',
      hint: 'Общий принцип важнее конкретного браузера.',
    },
    {
      id: 'devtools-safari',
      term: 'Что особенного с devtools в Safari?',
      definition: 'В Safari сначала нужно включить меню разработки в настройках. После этого консоль можно открыть через Cmd+Opt+C.',
      hint: 'Сначала включить Develop menu.',
    },
    {
      id: 'devtools-summary',
      term: 'Зачем нужны инструменты разработчика?',
      definition: 'Они помогают видеть ошибки, запускать команды, проверять значения и исследовать поведение страницы. Это базовый инструмент отладки.',
      hint: 'Без devtools сложно понять, что именно сломалось.',
    },
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
