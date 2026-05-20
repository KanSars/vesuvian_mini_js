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
          createLesson('js-strict-mode', 'Строгий режим — "use strict"', 'https://learn.javascript.ru/strict-mode', 'Основы'),
          createLesson('js-variables', 'Переменные', 'https://learn.javascript.ru/variables', 'Основы'),
          createLesson('js-types', 'Типы данных', 'https://learn.javascript.ru/types', 'Основы'),
          createLesson('js-alert-prompt-confirm', 'Взаимодействие: alert, prompt, confirm', 'https://learn.javascript.ru/alert-prompt-confirm', 'Основы'),
          createLesson('js-type-conversions', 'Преобразование типов', 'https://learn.javascript.ru/type-conversions', 'Основы'),
          createLesson('js-operators', 'Базовые операторы, математика', 'https://learn.javascript.ru/operators', 'Основы'),
          createLesson('js-comparison', 'Операторы сравнения', 'https://learn.javascript.ru/comparison', 'Основы'),
          createLesson('js-ifelse', 'Условное ветвление: if, "?"', 'https://learn.javascript.ru/ifelse', 'Основы'),
          createLesson('js-logical-operators', 'Логические операторы', 'https://learn.javascript.ru/logical-operators', 'Основы'),
          createLesson('js-nullish-coalescing', 'Операторы нулевого слияния и присваивания: "??", "??="', 'https://learn.javascript.ru/nullish-coalescing-operator', 'Основы'),
          createLesson('js-while-for', 'Циклы while и for', 'https://learn.javascript.ru/while-for', 'Основы'),
          createLesson('js-switch', 'Конструкция "switch"', 'https://learn.javascript.ru/switch', 'Основы'),
          createLesson('js-functions', 'Функции', 'https://learn.javascript.ru/function-basics', 'Основы'),
          createLesson('js-function-expressions', 'Function Expression', 'https://learn.javascript.ru/function-expressions', 'Основы'),
          createLesson('js-arrow-functions-basics', 'Стрелочные функции, основы', 'https://learn.javascript.ru/arrow-functions-basics', 'Основы'),
          createLesson('js-javascript-specials', 'Особенности JavaScript', 'https://learn.javascript.ru/javascript-specials', 'Основы'),
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
          createLesson('js-constructor-new', 'Конструктор, оператор "new"', 'https://learn.javascript.ru/constructor-new', 'Объекты'),
          createLesson('js-optional-chaining', 'Опциональная цепочка \'?.\'', 'https://learn.javascript.ru/optional-chaining', 'Объекты'),
          createLesson('js-symbol', 'Тип данных Symbol', 'https://learn.javascript.ru/symbol', 'Объекты'),
          createLesson('js-object-toprimitive', 'Преобразование объектов в примитивы', 'https://learn.javascript.ru/object-toprimitive', 'Объекты'),
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
          createLesson('js-array-methods', 'Методы массивов', 'https://learn.javascript.ru/array-methods', 'Типы'),
          createLesson('js-iterable', 'Перебираемые объекты', 'https://learn.javascript.ru/iterable', 'Типы'),
          createLesson('js-map-set', 'Map и Set', 'https://learn.javascript.ru/map-set', 'Типы'),
          createLesson('js-weakmap-weakset', 'WeakMap и WeakSet', 'https://learn.javascript.ru/weakmap-weakset', 'Типы'),
          createLesson('js-keys-values-entries', 'Object.keys, values, entries', 'https://learn.javascript.ru/keys-values-entries', 'Типы'),
          createLesson('js-destructuring-assignment', 'Деструктурирующее присваивание', 'https://learn.javascript.ru/destructuring-assignment', 'Типы'),
          createLesson('js-date', 'Дата и время', 'https://learn.javascript.ru/date', 'Типы'),
          createLesson('js-json', 'Формат JSON, метод toJSON', 'https://learn.javascript.ru/json', 'Типы'),
        ],
      },
      {
        id: 'advanced-functions',
        title: 'Продвинутая работа с функциями',
        lessons: [
          createLesson('js-recursion', 'Рекурсия и стек', 'https://learn.javascript.ru/recursion', 'Функции+'),
          createLesson('js-rest-parameters-spread-operator', 'Остаточные параметры и оператор расширения', 'https://learn.javascript.ru/rest-parameters-spread-operator', 'Функции+'),
          createLesson('js-closure', 'Область видимости переменных, замыкание', 'https://learn.javascript.ru/closure', 'Функции+'),
          createLesson('js-var', 'Устаревшее ключевое слово "var"', 'https://learn.javascript.ru/var', 'Функции+'),
          createLesson('js-global-object', 'Глобальный объект', 'https://learn.javascript.ru/global-object', 'Функции+'),
          createLesson('js-function-object', 'Объект функции, NFE', 'https://learn.javascript.ru/function-object', 'Функции+'),
          createLesson('js-new-function', 'Синтаксис "new Function"', 'https://learn.javascript.ru/new-function', 'Функции+'),
          createLesson('js-settimeout-setinterval', 'Планирование: setTimeout и setInterval', 'https://learn.javascript.ru/settimeout-setinterval', 'Функции+'),
          createLesson('js-call-apply-decorators', 'Декораторы и переадресация вызова, call/apply', 'https://learn.javascript.ru/call-apply-decorators', 'Функции+'),
          createLesson('js-bind', 'Привязка контекста к функции', 'https://learn.javascript.ru/bind', 'Функции+'),
          createLesson('js-arrow-functions', 'Повторяем стрелочные функции', 'https://learn.javascript.ru/arrow-functions', 'Функции+'),
        ],
      },
      {
        id: 'object-properties',
        title: 'Свойства объекта, их конфигурация',
        lessons: [
          createLesson('js-property-descriptors', 'Флаги и дескрипторы свойств', 'https://learn.javascript.ru/property-descriptors', 'Свойства'),
          createLesson('js-property-accessors', 'Свойства - геттеры и сеттеры', 'https://learn.javascript.ru/property-accessors', 'Свойства'),
        ],
      },
      {
        id: 'prototypes',
        title: 'Прототипы, наследование',
        lessons: [
          createLesson('js-prototype-inheritance', 'Прототипное наследование', 'https://learn.javascript.ru/prototype-inheritance', 'Прототипы'),
          createLesson('js-function-prototype', 'F.prototype', 'https://learn.javascript.ru/function-prototype', 'Прототипы'),
          createLesson('js-native-prototypes', 'Встроенные прототипы', 'https://learn.javascript.ru/native-prototypes', 'Прототипы'),
          createLesson('js-prototype-methods', 'Методы прототипов, объекты без свойства __proto__', 'https://learn.javascript.ru/prototype-methods', 'Прототипы'),
        ],
      },
      {
        id: 'classes',
        title: 'Классы',
        lessons: [
          createLesson('js-class', 'Класс: базовый синтаксис', 'https://learn.javascript.ru/class', 'Классы'),
          createLesson('js-class-inheritance', 'Наследование классов', 'https://learn.javascript.ru/class-inheritance', 'Классы'),
          createLesson('js-static-properties-methods', 'Статические свойства и методы', 'https://learn.javascript.ru/static-properties-methods', 'Классы'),
          createLesson('js-private-protected-properties-methods', 'Приватные и защищённые методы и свойства', 'https://learn.javascript.ru/private-protected-properties-methods', 'Классы'),
          createLesson('js-extend-natives', 'Расширение встроенных классов', 'https://learn.javascript.ru/extend-natives', 'Классы'),
          createLesson('js-instanceof', 'Проверка класса: "instanceof"', 'https://learn.javascript.ru/instanceof', 'Классы'),
          createLesson('js-mixins', 'Примеси', 'https://learn.javascript.ru/mixins', 'Классы'),
        ],
      },
      {
        id: 'error-handling',
        title: 'Обработка ошибок',
        lessons: [
          createLesson('js-try-catch', 'Обработка ошибок, "try..catch"', 'https://learn.javascript.ru/try-catch', 'Ошибки'),
          createLesson('js-custom-errors', 'Пользовательские ошибки, расширение Error', 'https://learn.javascript.ru/custom-errors', 'Ошибки'),
        ],
      },
      {
        id: 'async',
        title: 'Промисы, async/await',
        lessons: [
          createLesson('js-callbacks', 'Введение: колбэки', 'https://learn.javascript.ru/callbacks', 'Async'),
          createLesson('js-promise-basics', 'Промисы', 'https://learn.javascript.ru/promise-basics', 'Async'),
          createLesson('js-promise-chaining', 'Цепочка промисов', 'https://learn.javascript.ru/promise-chaining', 'Async'),
          createLesson('js-promise-error-handling', 'Промисы: обработка ошибок', 'https://learn.javascript.ru/promise-error-handling', 'Async'),
          createLesson('js-promise-api', 'Promise API', 'https://learn.javascript.ru/promise-api', 'Async'),
          createLesson('js-promisify', 'Промисификация', 'https://learn.javascript.ru/promisify', 'Async'),
          createLesson('js-microtask-queue', 'Микрозадачи', 'https://learn.javascript.ru/microtask-queue', 'Async'),
          createLesson('js-async-await', 'Async/await', 'https://learn.javascript.ru/async-await', 'Async'),
        ],
      },
      {
        id: 'generators-iterators',
        title: 'Генераторы, продвинутая итерация',
        lessons: [
          createLesson('js-generators', 'Генераторы', 'https://learn.javascript.ru/generators', 'Генераторы'),
          createLesson('js-async-iterators-generators', 'Асинхронные итераторы и генераторы', 'https://learn.javascript.ru/async-iterators-generators', 'Генераторы'),
        ],
      },
      {
        id: 'modules',
        title: 'Модули',
        lessons: [
          createLesson('js-modules-intro', 'Модули, введение', 'https://learn.javascript.ru/modules-intro', 'Модули'),
          createLesson('js-import-export', 'Экспорт и импорт', 'https://learn.javascript.ru/import-export', 'Модули'),
          createLesson('js-modules-dynamic-imports', 'Динамические импорты', 'https://learn.javascript.ru/modules-dynamic-imports', 'Модули'),
        ],
      },
      {
        id: 'js-misc',
        title: 'Разное',
        lessons: [
          createLesson('js-proxy', 'Proxy и Reflect', 'https://learn.javascript.ru/proxy', 'Разное'),
          createLesson('js-eval', 'Eval: выполнение строки кода', 'https://learn.javascript.ru/eval', 'Разное'),
          createLesson('js-currying-partials', 'Каррирование', 'https://learn.javascript.ru/currying-partials', 'Разное'),
          createLesson('js-reference-type', 'Ссылочный тип', 'https://learn.javascript.ru/reference-type', 'Разное'),
          createLesson('js-bitwise-operators', 'Побитовые операторы', 'https://learn.javascript.ru/bitwise-operators', 'Разное'),
          createLesson('js-bigint', 'BigInt', 'https://learn.javascript.ru/bigint', 'Разное'),
          createLesson('js-unicode', 'Юникод, внутреннее устройство строк', 'https://learn.javascript.ru/unicode', 'Разное'),
          createLesson('js-intl', 'Intl: интернационализация в JavaScript', 'https://learn.javascript.ru/intl', 'Разное'),
          createLesson('js-weakref-finalizationregistry', 'WeakRef и FinalizationRegistry', 'https://learn.javascript.ru/weakref-finalizationregistry', 'Разное'),
        ],
      }
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
          createLesson('searching-elements-dom', 'Поиск: getElement*, querySelector*', 'https://learn.javascript.ru/searching-elements-dom', 'DOM'),
          createLesson('basic-dom-node-properties', 'Свойства узлов: тип, тег и содержимое', 'https://learn.javascript.ru/basic-dom-node-properties', 'DOM'),
          createLesson('dom-attributes-and-properties', 'Атрибуты и свойства', 'https://learn.javascript.ru/dom-attributes-and-properties', 'DOM'),
          createLesson('modifying-document', 'Изменение документа', 'https://learn.javascript.ru/modifying-document', 'DOM'),
          createLesson('styles-and-classes', 'Стили и классы', 'https://learn.javascript.ru/styles-and-classes', 'DOM'),
          createLesson('size-and-scroll', 'Размеры и прокрутка элементов', 'https://learn.javascript.ru/size-and-scroll', 'DOM'),
          createLesson('size-and-scroll-window', 'Размеры и прокрутка окна', 'https://learn.javascript.ru/size-and-scroll-window', 'DOM'),
          createLesson('coordinates', 'Координаты', 'https://learn.javascript.ru/coordinates', 'DOM'),
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
          createLesson('dispatch-events', 'Генерация пользовательских событий', 'https://learn.javascript.ru/dispatch-events', 'События'),
        ],
      },
      {
        id: 'event-details',
        title: 'Интерфейсные события',
        lessons: [
          createLesson('mouse-events-basics', 'Основы событий мыши', 'https://learn.javascript.ru/mouse-events-basics', 'UI события'),
          createLesson('mousemove-mouseover-mouseout-mouseenter-mouseleave', 'Движение мыши: mouseover/out, mouseenter/leave', 'https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave', 'UI события'),
          createLesson('mouse-drag-and-drop', 'Drag\'n\'Drop с событиями мыши', 'https://learn.javascript.ru/mouse-drag-and-drop', 'UI события'),
          createLesson('keyboard-events', 'Клавиатура: keydown и keyup', 'https://learn.javascript.ru/keyboard-events', 'UI события'),
          createLesson('pointer-events', 'События указателя', 'https://learn.javascript.ru/pointer-events', 'UI события'),
          createLesson('onscroll', 'Прокрутка', 'https://learn.javascript.ru/onscroll', 'UI события'),
        ],
      },
      {
        id: 'forms-controls',
        title: 'Формы, элементы управления',
        lessons: [
          createLesson('form-elements', 'Свойства и методы формы', 'https://learn.javascript.ru/form-elements', 'Формы'),
          createLesson('focus-blur', 'Фокусировка: focus/blur', 'https://learn.javascript.ru/focus-blur', 'Формы'),
          createLesson('events-change-input', 'События: change, input, cut, copy, paste', 'https://learn.javascript.ru/events-change-input', 'Формы'),
          createLesson('forms-submit', 'Отправка формы: событие и метод submit', 'https://learn.javascript.ru/forms-submit', 'Формы'),
        ],
      },
      {
        id: 'loading',
        title: 'Загрузка документа и ресурсов',
        lessons: [
          createLesson('onload-ondomcontentloaded', 'Страница: DOMContentLoaded, load, beforeunload, unload', 'https://learn.javascript.ru/onload-ondomcontentloaded', 'Загрузка'),
          createLesson('script-async-defer', 'Скрипты: async, defer', 'https://learn.javascript.ru/script-async-defer', 'Загрузка'),
          createLesson('onload-onerror', 'Загрузка ресурсов: onload и onerror', 'https://learn.javascript.ru/onload-onerror', 'Загрузка'),
        ],
      },
      {
        id: 'ui-misc',
        title: 'Разное',
        lessons: [
          createLesson('mutation-observer', 'MutationObserver: наблюдатель за изменениями', 'https://learn.javascript.ru/mutation-observer', 'UI разное'),
          createLesson('selection-range', 'Selection и Range', 'https://learn.javascript.ru/selection-range', 'UI разное'),
          createLesson('event-loop', 'Событийный цикл: микрозадачи и макрозадачи', 'https://learn.javascript.ru/event-loop', 'UI разное'),
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
