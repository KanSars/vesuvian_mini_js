import { Card } from 'entities/Card/model/types';

// Covers only the visible "Документ" section under
// "Браузер: документ, события, интерфейсы".
interface LessonCardSource {
  id: string;
  name: string;
  terms: string[];
}

const lessonCardSources: LessonCardSource[] = [
  {
    id: 'browser-environment',
    name: 'Браузерное окружение, спецификации',
    terms: [
      'DOM (Document Object Model)',
      'BOM (Browser Object Model)',
      'Итого',
    ],
  },
  {
    id: 'dom-nodes',
    name: 'DOM-дерево',
    terms: [
      'Пример DOM',
      'Автоисправление',
      'Другие типы узлов',
      'Поэкспериментируйте сами',
      'Взаимодействие с консолью',
      'Итого',
    ],
  },
  {
    id: 'dom-navigation',
    name: 'Навигация по DOM-элементам',
    terms: [
      'Сверху: documentElement и body',
      'Дети: childNodes, firstChild, lastChild',
      'Соседи и родитель',
      'Навигация только по элементам',
      'Ещё немного ссылок: таблицы',
      'Итого',
    ],
  },
  {
    id: 'searching-elements-dom',
    name: 'Поиск: getElement*, querySelector*',
    terms: [
      'document.getElementById или просто id',
      'querySelectorAll',
      'querySelector',
      'matches',
      'closest',
      'getElementsBy*',
      'Живые коллекции',
      'Итого',
    ],
  },
  {
    id: 'basic-dom-node-properties',
    name: 'Свойства узлов: тип, тег и содержимое',
    terms: [
      'Классы DOM-узлов',
      'Свойство «nodeType»',
      'Тег: nodeName и tagName',
      'innerHTML: содержимое элемента',
      'outerHTML: HTML элемента целиком',
      'nodeValue/data: содержимое текстового узла',
      'textContent: просто текст',
      'Свойство «hidden»',
      'Другие свойства',
      'Итого',
    ],
  },
  {
    id: 'dom-attributes-and-properties',
    name: 'Атрибуты и свойства',
    terms: [
      'DOM-свойства',
      'HTML-атрибуты',
      'Синхронизация между атрибутами и свойствами',
      'DOM-свойства типизированы',
      'Нестандартные атрибуты, dataset',
      'Итого',
    ],
  },
  {
    id: 'modifying-document',
    name: 'Изменение документа',
    terms: [
      'Пример: показать сообщение',
      'Создание элемента',
      'Методы вставки',
      'insertAdjacentHTML/Text/Element',
      'Удаление узлов',
      'Клонирование узлов: cloneNode',
      'DocumentFragment',
      'Устаревшие методы вставки/удаления',
      'Несколько слов о «document.write»',
      'Итого',
    ],
  },
  {
    id: 'styles-and-classes',
    name: 'Стили и классы',
    terms: [
      'className и classList',
      'Свойство style',
      'Сброс стилей',
      'Следите за единицами измерения',
      'Вычисленные стили: getComputedStyle',
      'Итого',
    ],
  },
  {
    id: 'size-and-scroll',
    name: 'Размеры и прокрутка элементов',
    terms: [
      'Простой пример',
      'Метрики',
      'offsetParent, offsetLeft/Top',
      'offsetWidth/Height',
      'clientTop/Left',
      'clientWidth/Height',
      'scrollWidth/Height',
      'scrollLeft/scrollTop',
      'Не стоит брать width/height из CSS',
      'Итого',
    ],
  },
  {
    id: 'size-and-scroll-window',
    name: 'Размеры и прокрутка окна',
    terms: [
      'Ширина/высота окна',
      'Ширина/высота документа',
      'Получение текущей прокрутки',
      'Прокрутка: scrollTo, scrollBy, scrollIntoView',
      'scrollIntoView',
      'Запретить прокрутку',
      'Итого',
    ],
  },
  {
    id: 'coordinates',
    name: 'Координаты',
    terms: [
      'Координаты относительно окна: getBoundingClientRect',
      'elementFromPoint(x, y)',
      'Применение для fixed позиционирования',
      'Координаты относительно документа',
      'Итого',
    ],
  },
];

const codeByLessonAndTerm: Record<string, string> = {
  'dom-navigation::Сверху: documentElement и body': `document.documentElement;
document.body;
document.head;`,
  'dom-navigation::Дети: childNodes, firstChild, lastChild': `element.childNodes;
element.firstChild;
element.lastChild;`,
  'dom-navigation::Соседи и родитель': `node.parentNode;
node.previousSibling;
node.nextSibling;`,
  'dom-navigation::Навигация только по элементам': `element.children;
element.firstElementChild;
element.lastElementChild;`,
  'searching-elements-dom::document.getElementById или просто id': `const elem = document.getElementById('id');`,
  'searching-elements-dom::querySelectorAll': `const elements = document.querySelectorAll('ul > li:last-child');`,
  'searching-elements-dom::querySelector': `const first = document.querySelector('.item');`,
  'searching-elements-dom::matches': `if (element.matches('a[href$="zip"]')) {
  // подходит под CSS-селектор
}`,
  'searching-elements-dom::closest': `const form = element.closest('form');`,
  'searching-elements-dom::getElementsBy*': `document.getElementsByTagName('div');
document.getElementsByClassName('item');
document.getElementsByName('login');`,
  'basic-dom-node-properties::Свойство «nodeType»': `node.nodeType;`,
  'basic-dom-node-properties::Тег: nodeName и tagName': `element.tagName;
node.nodeName;`,
  'basic-dom-node-properties::innerHTML: содержимое элемента': `element.innerHTML = '<b>Привет</b>';`,
  'basic-dom-node-properties::outerHTML: HTML элемента целиком': `element.outerHTML = '<p>Новый элемент</p>';`,
  'basic-dom-node-properties::nodeValue/data: содержимое текстового узла': `textNode.data;
textNode.nodeValue;`,
  'basic-dom-node-properties::textContent: просто текст': `element.textContent = '<b>текст</b>';`,
  'basic-dom-node-properties::Свойство «hidden»': `element.hidden = true;`,
  'dom-attributes-and-properties::HTML-атрибуты': `element.hasAttribute('name');
element.getAttribute('name');
element.setAttribute('name', 'value');
element.removeAttribute('name');`,
  'dom-attributes-and-properties::Нестандартные атрибуты, dataset': `element.dataset.userId;`,
  'modifying-document::Создание элемента': `const div = document.createElement('div');
const text = document.createTextNode('текст');`,
  'modifying-document::Методы вставки': `node.append(elem);
node.prepend(elem);
node.before(elem);
node.after(elem);
node.replaceWith(elem);`,
  'modifying-document::insertAdjacentHTML/Text/Element': `element.insertAdjacentHTML('beforeend', '<p>Привет</p>');`,
  'modifying-document::Удаление узлов': `node.remove();`,
  'modifying-document::Клонирование узлов: cloneNode': `const clone = node.cloneNode(true);`,
  'modifying-document::DocumentFragment': `const fragment = new DocumentFragment();`,
  'styles-and-classes::className и classList': `element.className = 'active';
element.classList.add('active');
element.classList.toggle('hidden');`,
  'styles-and-classes::Свойство style': `element.style.backgroundColor = 'red';`,
  'styles-and-classes::Сброс стилей': `element.style.display = '';`,
  'styles-and-classes::Вычисленные стили: getComputedStyle': `const styles = getComputedStyle(element);
styles.marginTop;`,
  'size-and-scroll-window::Прокрутка: scrollTo, scrollBy, scrollIntoView': `window.scrollTo(0, 0);
window.scrollBy(0, 100);
element.scrollIntoView();`,
  'coordinates::Координаты относительно окна: getBoundingClientRect': `const rect = element.getBoundingClientRect();`,
  'coordinates::elementFromPoint(x, y)': `const elem = document.elementFromPoint(x, y);`,
};

const hintByTerm: Record<string, string> = {
  'BOM (Browser Object Model)': 'Например: navigator, location, alert, confirm и prompt.',
  'Автоисправление': 'Браузер сам достраивает некорректную HTML-разметку в DOM.',
  'Живые коллекции': 'Живая коллекция меняется автоматически при изменении документа.',
  'innerHTML: содержимое элемента': 'Не вставляйте непроверенный пользовательский HTML.',
  'textContent: просто текст': 'Безопаснее innerHTML, когда нужен именно текст.',
  'Несколько слов о «document.write»': 'После загрузки страницы document.write может перезаписать документ.',
  'Следите за единицами измерения': 'Для числовых CSS-свойств обычно нужна единица: px, em, %, и т.д.',
  'Не стоит брать width/height из CSS': 'CSS-значения могут быть auto, зависеть от box-sizing или отличаться от реальных метрик.',
  'Итого': 'Итоговая карточка собирает главные правила урока.',
};

const defineByKeyword: Array<[RegExp, (lessonName: string, term: string) => string]> = [
  [/^Итого$/, (lessonName) => 'Кратко закрепляет основные правила урока «' + lessonName + '» и показывает, что важно запомнить для работы с DOM.'],
  [/DOM|узл|дерев|node|Node|элемент|Element/i, (_lessonName, term) => 'Объясняет «' + term + '» как часть DOM: как браузер представляет страницу узлами, элементами и связями между ними.'],
  [/BOM|Browser Object Model/, (_lessonName, term) => 'Описывает «' + term + '»: браузерные объекты вне документа, через которые JavaScript взаимодействует с окружением браузера.'],
  [/documentElement|body|childNodes|firstChild|lastChild|Соседи|родитель|children|таблиц/i, (_lessonName, term) => 'Показывает «' + term + '» для навигации по DOM: как перейти к верхним, дочерним, соседним или специальным элементам.'],
  [/getElement|querySelector|matches|closest|getElementsBy|коллекц/i, (_lessonName, term) => 'Разбирает «' + term + '» как способ найти элементы в документе и понять, возвращается один элемент, список или живая коллекция.'],
  [/innerHTML|outerHTML|textContent|nodeValue|data|hidden|tagName|nodeName|nodeType|свойств/i, (_lessonName, term) => 'Объясняет «' + term + '» как свойство DOM-узла: что оно читает, что меняет и где важно учитывать тип узла.'],
  [/атрибут|dataset|синхронизац/i, (_lessonName, term) => 'Показывает «' + term + '» при связи HTML-атрибутов и DOM-свойств: как читать, менять и хранить пользовательские данные.'],
  [/Создание|вставк|insertAdjacent|Удаление|cloneNode|DocumentFragment|document.write|сообщение/i, (_lessonName, term) => 'Описывает «' + term + '» при изменении документа: как создавать, вставлять, удалять или клонировать DOM-узлы.'],
  [/class|style|стил|единиц|getComputedStyle/i, (_lessonName, term) => 'Разбирает «' + term + '» для управления внешним видом: классы, inline-стили, сброс значений и вычисленные CSS-свойства.'],
  [/Метрики|offset|client|scroll|width|height|прокрутк|окна|документа/i, (_lessonName, term) => 'Объясняет «' + term + '» как метрику размера или прокрутки: что именно измеряется и когда значение берут у элемента, окна или документа.'],
  [/Координат|getBoundingClientRect|elementFromPoint|fixed/i, (_lessonName, term) => 'Показывает «' + term + '» в системе координат браузера: как получить положение элемента или найти элемент по точке.'],
];

const makeDefinition = (lessonName: string, term: string): string => {
  const found = defineByKeyword.find(([pattern]) => pattern.test(term) || pattern.test(lessonName));
  if (found) {
    return found[1](lessonName, term);
  }

  return 'Раздел урока «' + lessonName + '» объясняет тему «' + term + '» и её роль при работе со страницей в браузере.';
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

export const browserDocumentCards: Record<string, Card[]> = Object.fromEntries(
  lessonCardSources.map((lesson) => [lesson.id, makeCards(lesson)])
);
