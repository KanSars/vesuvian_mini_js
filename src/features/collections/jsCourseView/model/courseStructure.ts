import { Collection } from 'entities/Collection/model/types';

export interface JsCourseLesson extends Collection {
  sourceUrl: string;
}

export interface JsCourseSection {
  id: string;
  title: string;
  lessons: JsCourseLesson[];
}

export interface JsCoursePart {
  id: string;
  title: string;
  description: string;
  sections: JsCourseSection[];
}

const createLesson = (
  collection_id: string,
  name: string,
  sourceUrl: string,
  tagName: string
): JsCourseLesson => ({
  collection_id,
  name,
  sourceUrl,
  created_at: '2026-01-01T00:00:00Z',
  tags: [{ id: tagName.toLowerCase().replace(/\s+/g, '-'), name: tagName }],
});

export const jsCourseParts: JsCoursePart[] = [
  {
    id: 'language',
    title: 'Язык JavaScript',
    description: 'База языка: синтаксис, типы, функции, объекты, классы, промисы и модули.',
    sections: [
      {
        id: 'intro',
        title: 'Введение',
        lessons: [
          createLesson('1', 'Введение в JavaScript', 'https://learn.javascript.ru/intro', 'Введение'),
          createLesson('2', 'Справочники и спецификации', 'https://learn.javascript.ru/manuals-specifications', 'Введение'),
          createLesson('3', 'Редакторы кода', 'https://learn.javascript.ru/code-editors', 'Введение'),
          createLesson('4', 'Консоль разработчика', 'https://learn.javascript.ru/devtools', 'Введение'),
        ],
      },
      {
        id: 'fundamentals',
        title: 'Основы JavaScript',
        lessons: [
          createLesson('js-hello-world', 'Привет, мир!', 'https://learn.javascript.ru/hello-world', 'Основы'),
          createLesson('js-code-structure', 'Структура кода', 'https://learn.javascript.ru/structure', 'Основы'),
          createLesson('js-strict-mode', 'Строгий режим', 'https://learn.javascript.ru/strict-mode', 'Основы'),
          createLesson('js-variables', 'Переменные', 'https://learn.javascript.ru/variables', 'Основы'),
          createLesson('js-types', 'Типы данных', 'https://learn.javascript.ru/types', 'Основы'),
        ],
      },
      {
        id: 'code-quality',
        title: 'Качество кода',
        lessons: [
          createLesson('js-debugging', 'Отладка в браузере', 'https://learn.javascript.ru/debugging-chrome', 'Качество'),
          createLesson('js-coding-style', 'Советы по стилю кода', 'https://learn.javascript.ru/coding-style', 'Качество'),
          createLesson('js-comments', 'Комментарии', 'https://learn.javascript.ru/comments', 'Качество'),
          createLesson('js-testing', 'Автоматическое тестирование c Mocha', 'https://learn.javascript.ru/testing-mocha', 'Качество'),
        ],
      },
      {
        id: 'objects-basics',
        title: 'Объекты: основы',
        lessons: [
          createLesson('js-objects', 'Объекты', 'https://learn.javascript.ru/object', 'Объекты'),
          createLesson('js-object-copy', 'Копирование объектов и ссылки', 'https://learn.javascript.ru/object-copy', 'Объекты'),
          createLesson('js-garbage-collection', 'Сборка мусора', 'https://learn.javascript.ru/garbage-collection', 'Объекты'),
          createLesson('js-object-methods', 'Методы объекта, "this"', 'https://learn.javascript.ru/object-methods', 'Объекты'),
        ],
      },
      {
        id: 'data-types',
        title: 'Типы данных',
        lessons: [
          createLesson('js-primitives-methods', 'Методы примитивов', 'https://learn.javascript.ru/primitives-methods', 'Типы'),
          createLesson('js-number', 'Числа', 'https://learn.javascript.ru/number', 'Типы'),
          createLesson('js-string', 'Строки', 'https://learn.javascript.ru/string', 'Типы'),
          createLesson('js-array', 'Массивы', 'https://learn.javascript.ru/array', 'Типы'),
        ],
      },
    ],
  },
  {
    id: 'browser',
    title: 'Браузер: документ, события, интерфейсы',
    description: 'Работа со страницей: DOM, события, формы, загрузка ресурсов и браузерные API.',
    sections: [
      {
        id: 'document',
        title: 'Документ',
        lessons: [
          createLesson('browser-environment', 'Браузерное окружение, спецификации', 'https://learn.javascript.ru/browser-environment', 'DOM'),
          createLesson('dom-nodes', 'DOM-дерево', 'https://learn.javascript.ru/dom-nodes', 'DOM'),
          createLesson('dom-navigation', 'Навигация по DOM-элементам', 'https://learn.javascript.ru/dom-navigation', 'DOM'),
          createLesson('searching-elements-dom', 'Поиск элементов', 'https://learn.javascript.ru/searching-elements-dom', 'DOM'),
        ],
      },
      {
        id: 'events',
        title: 'Введение в события',
        lessons: [
          createLesson('introduction-browser-events', 'Введение в браузерные события', 'https://learn.javascript.ru/introduction-browser-events', 'События'),
          createLesson('bubbling-and-capturing', 'Всплытие и погружение', 'https://learn.javascript.ru/bubbling-and-capturing', 'События'),
          createLesson('event-delegation', 'Делегирование событий', 'https://learn.javascript.ru/event-delegation', 'События'),
          createLesson('default-browser-action', 'Действия браузера по умолчанию', 'https://learn.javascript.ru/default-browser-action', 'События'),
        ],
      },
      {
        id: 'forms',
        title: 'Формы, элементы управления',
        lessons: [
          createLesson('form-elements', 'Свойства и методы формы', 'https://learn.javascript.ru/form-elements', 'Формы'),
          createLesson('focus-blur', 'Фокусировка', 'https://learn.javascript.ru/focus-blur', 'Формы'),
          createLesson('events-change-input', 'События change, input, cut, copy, paste', 'https://learn.javascript.ru/events-change-input', 'Формы'),
        ],
      },
    ],
  },
  {
    id: 'additional',
    title: 'Тематические разделы',
    description: 'Отдельные важные темы: сеть, хранение данных, анимация, компоненты и регулярные выражения.',
    sections: [
      {
        id: 'network',
        title: 'Сетевые запросы',
        lessons: [
          createLesson('fetch', 'Fetch', 'https://learn.javascript.ru/fetch', 'Сеть'),
          createLesson('formdata', 'FormData', 'https://learn.javascript.ru/formdata', 'Сеть'),
          createLesson('fetch-abort', 'Fetch: прерывание запроса', 'https://learn.javascript.ru/fetch-abort', 'Сеть'),
          createLesson('websocket', 'WebSocket', 'https://learn.javascript.ru/websocket', 'Сеть'),
        ],
      },
      {
        id: 'browser-storage',
        title: 'Хранение данных в браузере',
        lessons: [
          createLesson('cookies', 'Куки, document.cookie', 'https://learn.javascript.ru/cookie', 'Хранение'),
          createLesson('localstorage', 'LocalStorage, sessionStorage', 'https://learn.javascript.ru/localstorage', 'Хранение'),
          createLesson('indexeddb', 'IndexedDB', 'https://learn.javascript.ru/indexeddb', 'Хранение'),
        ],
      },
      {
        id: 'regular-expressions',
        title: 'Регулярные выражения',
        lessons: [
          createLesson('regexp-introduction', 'Шаблоны и флаги', 'https://learn.javascript.ru/regexp-introduction', 'RegExp'),
          createLesson('regexp-character-classes', 'Символьные классы', 'https://learn.javascript.ru/regexp-character-classes', 'RegExp'),
          createLesson('regexp-quantifiers', 'Квантификаторы', 'https://learn.javascript.ru/regexp-quantifiers', 'RegExp'),
        ],
      },
    ],
  },
];

export const jsCourseLessons = jsCourseParts.flatMap((part) => (
  part.sections.flatMap((section) => section.lessons)
));
