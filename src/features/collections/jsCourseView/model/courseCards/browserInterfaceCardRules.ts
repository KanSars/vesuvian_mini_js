import { LessonCardSource, createSectionCards } from './createSectionCards';
import { browserInterfaceDefinitions } from './sourceDefinitions';

const codeByLessonAndTerm: Record<string, string> = {
  "introduction-browser-events::Обработчики событий": "element.onclick = function(event) {\n  // обработчик\n};",
  "introduction-browser-events::addEventListener": "element.addEventListener('click', handler);\nelement.removeEventListener('click', handler);",
  "introduction-browser-events::Объект события": "element.onclick = function(event) {\n  console.log(event.type);\n};",
  "introduction-browser-events::Объект-обработчик: handleEvent": "element.addEventListener('click', {\n  handleEvent(event) {\n    // обработка\n  },\n});",
  "bubbling-and-capturing::Прекращение всплытия": "event.stopPropagation();",
  "bubbling-and-capturing::Погружение": "element.addEventListener('click', handler, true);",
  "default-browser-action::Отмена действия браузера": "event.preventDefault();",
  "default-browser-action::Опция «passive» для обработчика": "element.addEventListener('touchmove', handler, {\n  passive: true,\n});",
  "dispatch-events::Конструктор Event": "const event = new Event('click');",
  "dispatch-events::Метод dispatchEvent": "element.dispatchEvent(event);",
  "dispatch-events::Пользовательские события": "const event = new CustomEvent('hello', {\n  detail: { name: 'John' },\n});",
  "mouse-events-basics::Модификаторы: shift, alt, ctrl и meta": "if (event.ctrlKey || event.metaKey) {\n  // нажата управляющая клавиша\n}",
  "mouse-events-basics::Координаты: clientX/Y, pageX/Y": "event.clientX;\nevent.clientY;\nevent.pageX;\nevent.pageY;",
  "keyboard-events::События keydown и keyup": "element.addEventListener('keydown', (event) => {\n  console.log(event.key);\n});",
  "pointer-events::Захват указателя": "element.setPointerCapture(event.pointerId);",
  "form-elements::Навигация: формы и элементы": "document.forms.myForm;\nform.elements.login;",
  "form-elements::Обратная ссылка: element.form": "input.form;",
  "focus-blur::Методы focus/blur": "element.focus();\nelement.blur();",
  "focus-blur::Включаем фокусировку на любом элементе: tabindex": "<div tabindex=\"0\">...</div>",
  "forms-submit::Событие: submit": "form.addEventListener('submit', (event) => {\n  event.preventDefault();\n});",
  "forms-submit::Метод: submit": "form.submit();",
  "onload-ondomcontentloaded::DOMContentLoaded": "document.addEventListener('DOMContentLoaded', () => {\n  // DOM готов\n});",
  "onload-ondomcontentloaded::window.onload": "window.onload = function() {\n  // страница и ресурсы загружены\n};",
  "script-async-defer::defer": "<script defer src=\"script.js\"></script>",
  "script-async-defer::async": "<script async src=\"script.js\"></script>",
  "onload-onerror::Загрузка скриптов": "script.onload = () => {};\nscript.onerror = () => {};",
  "mutation-observer::Синтаксис": "const observer = new MutationObserver(callback);\nobserver.observe(node, {\n  childList: true,\n  subtree: true,\n});",
  "selection-range::Range": "const range = new Range();\nrange.setStart(node, 0);\nrange.setEnd(node, 1);",
  "event-loop::Макрозадачи и Микрозадачи": "setTimeout(() => {}, 0);\nPromise.resolve().then(() => {});"
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

export const createBrowserInterfaceSectionCards = (lessonCardSources: LessonCardSource[]) => createSectionCards(
  lessonCardSources,
  {
    definitionByLessonAndTerm: browserInterfaceDefinitions,
    codeByLessonAndTerm,
    hintByTerm,
    defineByKeyword,
    fallbackDefinition: (lessonName, term) => 'Раздел урока «' + lessonName + '» объясняет тему «' + term + '» и её роль при создании браузерного интерфейса.',
  }
);
