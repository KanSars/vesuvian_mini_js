import { Card } from 'entities/Card/model/types';

interface LessonCardSource {
  id: string;
  name: string;
  terms: string[];
}

const lessonCardSources: LessonCardSource[] = [
  {
    id: 'introduction-browser-events',
    name: 'Введение в браузерные события',
    terms: ['Обработчики событий', 'Доступ к элементу через this', 'Частые ошибки', 'addEventListener', 'Объект события', 'Объект-обработчик: handleEvent', 'Итого'],
  },
  {
    id: 'bubbling-and-capturing',
    name: 'Всплытие и погружение',
    terms: ['Всплытие', 'event.target', 'Прекращение всплытия', 'Погружение', 'Итого'],
  },
  {
    id: 'event-delegation',
    name: 'Делегирование событий',
    terms: ['Применение делегирования: действия в разметке', 'Приём проектирования «поведение»', 'Итого'],
  },
  {
    id: 'default-browser-action',
    name: 'Действия браузера по умолчанию',
    terms: ['Отмена действия браузера', 'Опция «passive» для обработчика', 'event.defaultPrevented', 'Итого'],
  },
  {
    id: 'dispatch-events',
    name: 'Генерация пользовательских событий',
    terms: ['Конструктор Event', 'Метод dispatchEvent', 'Пример всплытия', 'MouseEvent, KeyboardEvent и другие', 'Пользовательские события', 'event.preventDefault()', 'Вложенные события обрабатываются синхронно', 'Итого'],
  },
  {
    id: 'mouse-events-basics',
    name: 'Основы событий мыши',
    terms: ['Типы событий мыши', 'Порядок событий', 'Кнопки мыши', 'Модификаторы: shift, alt, ctrl и meta', 'Координаты: clientX/Y, pageX/Y', 'Отключаем выделение', 'Итого'],
  },
  {
    id: 'mousemove-mouseover-mouseout-mouseenter-mouseleave',
    name: 'Движение мыши: mouseover/out, mouseenter/leave',
    terms: ['События mouseover/mouseout, relatedTarget', 'Пропуск элементов', 'Событие mouseout при переходе на потомка', 'События mouseenter и mouseleave', 'Делегирование событий', 'Итого'],
  },
  {
    id: 'mouse-drag-and-drop',
    name: 'Drag\'n\'Drop с событиями мыши',
    terms: ['Алгоритм Drag’n’Drop', 'Правильное позиционирование', 'Цели переноса (droppable)', 'Итого'],
  },
  {
    id: 'keyboard-events',
    name: 'Клавиатура: keydown и keyup',
    terms: ['Тестовый стенд', 'События keydown и keyup', 'Автоповтор', 'Действия по умолчанию', '«Дела минувших дней»', 'Итого'],
  },
  {
    id: 'pointer-events',
    name: 'События указателя',
    terms: ['Краткая история', 'Типы событий указателя', 'Свойства событий указателя', 'Мульти-тач', 'Событие: pointercancel', 'Захват указателя', 'Итого'],
  },
  {
    id: 'onscroll',
    name: 'Прокрутка',
    terms: ['Предотвращение прокрутки'],
  },
  {
    id: 'form-elements',
    name: 'Свойства и методы формы',
    terms: ['Навигация: формы и элементы', 'Обратная ссылка: element.form', 'Элементы формы', 'Ссылки', 'Итого'],
  },
  {
    id: 'focus-blur',
    name: 'Фокусировка: focus/blur',
    terms: ['События focus/blur', 'Методы focus/blur', 'Включаем фокусировку на любом элементе: tabindex', 'События focusin/focusout', 'Итого'],
  },
  {
    id: 'events-change-input',
    name: 'События: change, input, cut, copy, paste',
    terms: ['Событие: change', 'Событие: input', 'События: cut, copy, paste', 'Итого'],
  },
  {
    id: 'forms-submit',
    name: 'Отправка формы: событие и метод submit',
    terms: ['Событие: submit', 'Метод: submit'],
  },
  {
    id: 'onload-ondomcontentloaded',
    name: 'Страница: DOMContentLoaded, load, beforeunload, unload',
    terms: ['DOMContentLoaded', 'window.onload', 'window.onunload', 'window.onbeforeunload', 'readyState', 'Итого'],
  },
  {
    id: 'script-async-defer',
    name: 'Скрипты: async, defer',
    terms: ['defer', 'async', 'Динамически загружаемые скрипты', 'Итого'],
  },
  {
    id: 'onload-onerror',
    name: 'Загрузка ресурсов: onload и onerror',
    terms: ['Загрузка скриптов', 'Другие ресурсы', 'Ошибка в скрипте с другого источника', 'Итого'],
  },
  {
    id: 'mutation-observer',
    name: 'MutationObserver: наблюдатель за изменениями',
    terms: ['Синтаксис', 'Использование для интеграции', 'Использование для архитектуры', 'Дополнительные методы', 'Сборка мусора', 'Итого'],
  },
  {
    id: 'selection-range',
    name: 'Selection и Range',
    terms: ['Range', 'Методы Range', 'Selection', 'Свойства Selection', 'События при выделении', 'Методы Selection', 'Выделение в элементах форм', 'Сделать что-то невыделяемым', 'Ссылки', 'Итого'],
  },
  {
    id: 'event-loop',
    name: 'Событийный цикл: микрозадачи и макрозадачи',
    terms: ['Событийный цикл', 'Пример 1: разбиение «тяжёлой» задачи.', 'Пример 2: индикация прогресса', 'Пример 3: делаем что-нибудь после события', 'Макрозадачи и Микрозадачи', 'Итого'],
  },
];

const codeByLessonAndTerm: Record<string, string> = {
  'introduction-browser-events::Обработчики событий': `element.onclick = function(event) {
  // обработчик
};`,
  'introduction-browser-events::addEventListener': `element.addEventListener('click', handler);
element.removeEventListener('click', handler);`,
  'introduction-browser-events::Объект события': `element.onclick = function(event) {
  console.log(event.type);
};`,
  'introduction-browser-events::Объект-обработчик: handleEvent': `element.addEventListener('click', {
  handleEvent(event) {
    // обработка
  },
});`,
  'bubbling-and-capturing::Прекращение всплытия': `event.stopPropagation();`,
  'bubbling-and-capturing::Погружение': `element.addEventListener('click', handler, true);`,
  'default-browser-action::Отмена действия браузера': `event.preventDefault();`,
  'default-browser-action::Опция «passive» для обработчика': `element.addEventListener('touchmove', handler, {
  passive: true,
});`,
  'dispatch-events::Конструктор Event': `const event = new Event('click');`,
  'dispatch-events::Метод dispatchEvent': `element.dispatchEvent(event);`,
  'dispatch-events::Пользовательские события': `const event = new CustomEvent('hello', {
  detail: { name: 'John' },
});`,
  'mouse-events-basics::Модификаторы: shift, alt, ctrl и meta': `if (event.ctrlKey || event.metaKey) {
  // нажата управляющая клавиша
}`,
  'mouse-events-basics::Координаты: clientX/Y, pageX/Y': `event.clientX;
event.clientY;
event.pageX;
event.pageY;`,
  'keyboard-events::События keydown и keyup': `element.addEventListener('keydown', (event) => {
  console.log(event.key);
});`,
  'pointer-events::Захват указателя': `element.setPointerCapture(event.pointerId);`,
  'form-elements::Навигация: формы и элементы': `document.forms.myForm;
form.elements.login;`,
  'form-elements::Обратная ссылка: element.form': `input.form;`,
  'focus-blur::Методы focus/blur': `element.focus();
element.blur();`,
  'focus-blur::Включаем фокусировку на любом элементе: tabindex': `<div tabindex="0">...</div>`,
  'forms-submit::Событие: submit': `form.addEventListener('submit', (event) => {
  event.preventDefault();
});`,
  'forms-submit::Метод: submit': `form.submit();`,
  'onload-ondomcontentloaded::DOMContentLoaded': `document.addEventListener('DOMContentLoaded', () => {
  // DOM готов
});`,
  'onload-ondomcontentloaded::window.onload': `window.onload = function() {
  // страница и ресурсы загружены
};`,
  'script-async-defer::defer': `<script defer src="script.js"></script>`,
  'script-async-defer::async': `<script async src="script.js"></script>`,
  'onload-onerror::Загрузка скриптов': `script.onload = () => {};
script.onerror = () => {};`,
  'mutation-observer::Синтаксис': `const observer = new MutationObserver(callback);
observer.observe(node, {
  childList: true,
  subtree: true,
});`,
  'selection-range::Range': `const range = new Range();
range.setStart(node, 0);
range.setEnd(node, 1);`,
  'event-loop::Макрозадачи и Микрозадачи': `setTimeout(() => {}, 0);
Promise.resolve().then(() => {});`,
};

const hintByTerm: Record<string, string> = {
  'Частые ошибки': 'Функцию-обработчик нужно передавать, а не вызывать при назначении.',
  'event.target': 'target — исходный элемент события, currentTarget — элемент текущего обработчика.',
  'Опция «passive» для обработчика': 'passive: true означает, что обработчик не будет вызывать preventDefault().',
  'Автоповтор': 'При удержании клавиши keydown повторяется, а keyup происходит при отпускании.',
  'Метод: submit': 'form.submit() не генерирует событие submit.',
  'window.onbeforeunload': 'Браузер ограничивает текст предупреждения при уходе со страницы.',
  'async': 'async-скрипты выполняются независимо и не ждут друг друга.',
  'Сборка мусора': 'MutationObserver удаляется, когда наблюдаемый узел становится недостижимым.',
  'Итого': 'Итоговая карточка собирает главные правила урока.',
};

const defineByKeyword: Array<[RegExp, (lessonName: string, term: string) => string]> = [
  [/^Итого$/, (lessonName) => 'Кратко закрепляет основные правила урока «' + lessonName + '» и показывает, что важно запомнить для работы с интерфейсом.'],
  [/обработчик|addEventListener|событи|event|Event|dispatch|defaultPrevented|preventDefault|всплыт|погруж/i, (_lessonName, term) => 'Объясняет «' + term + '» в модели событий браузера: как событие возникает, передаётся обработчику и управляется кодом.'],
  [/мыш|mouseover|mouseout|mouseenter|mouseleave|Drag|Drop|droppable|координат|кнопк/i, (_lessonName, term) => 'Разбирает «' + term + '» для событий мыши: какие данные даёт событие и как использовать их в интерфейсе.'],
  [/клавиатур|keydown|keyup|Автоповтор|key/i, (_lessonName, term) => 'Описывает «' + term + '» при работе с клавиатурой: какие события приходят, что в них проверять и где учитывать действия по умолчанию.'],
  [/указател|pointer|Мульти-тач|Захват/i, (_lessonName, term) => 'Показывает «' + term + '» в Pointer Events: единый механизм для мыши, пера и сенсорного ввода.'],
  [/форм|form|submit|input|change|focus|blur|tabindex|cut|copy|paste/i, (_lessonName, term) => 'Объясняет «' + term + '» для форм и элементов управления: навигацию, фокус, ввод, отправку или связь элементов с формой.'],
  [/DOMContentLoaded|onload|beforeunload|unload|readyState|defer|async|скрипт|ресурс/i, (_lessonName, term) => 'Разбирает «' + term + '» при загрузке страницы и ресурсов: когда событие происходит и как оно влияет на выполнение кода.'],
  [/MutationObserver|мутац|интеграц|архитектур/i, (_lessonName, term) => 'Описывает «' + term + '» при наблюдении за изменениями DOM: что отслеживать, как получать записи изменений и когда отключать наблюдение.'],
  [/Range|Selection|выделен|невыделяем/i, (_lessonName, term) => 'Объясняет «' + term + '» для выделения текста и диапазонов документа: как создать диапазон, прочитать выделение или управлять им.'],
  [/Событийный цикл|Макрозадачи|Микрозадачи|тяжёлой|прогресса/i, (_lessonName, term) => 'Показывает «' + term + '» в event loop: как браузер чередует задачи, микрозадачи, рендеринг и пользовательские события.'],
  [/Ссылки/, (lessonName) => 'Собирает дополнительные ссылки из урока «' + lessonName + '» для уточнения поведения API и связанных возможностей.'],
];

const makeDefinition = (lessonName: string, term: string): string => {
  const found = defineByKeyword.find(([pattern]) => pattern.test(term) || pattern.test(lessonName));
  if (found) {
    return found[1](lessonName, term);
  }

  return 'Раздел урока «' + lessonName + '» объясняет тему «' + term + '» и её роль при создании браузерного интерфейса.';
};

const makeCardId = (lessonId: string, index: number): string => lessonId + '-card-' + String(index + 1).padStart(2, '0');

const makeCards = (lesson: LessonCardSource): Card[] => lesson.terms.map((term, index) => {
  const key = lesson.id + '::' + term;
  const card: Card = {
    id: makeCardId(lesson.id, index),
    term,
    definition: makeDefinition(lesson.name, term),
  };
  const code = codeByLessonAndTerm[key];
  if (code) {
    card.code = code;
  }
  const hint = hintByTerm[term];
  if (hint) {
    card.hint = hint;
  }
  return card;
});

export const browserInterfaceCards: Record<string, Card[]> = Object.fromEntries(
  lessonCardSources.map((lesson) => [lesson.id, makeCards(lesson)])
);
