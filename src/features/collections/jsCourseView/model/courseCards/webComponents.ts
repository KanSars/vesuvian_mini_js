import { LessonCardSource } from './createSectionCards';
import { createThematicSectionCards } from './thematicCardRules';

// Covers the visible "Веб-компоненты" section under "Тематические разделы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "webcomponents-intro",
    "name": "С орбитальной высоты",
    "terms": [
      "Что общего между…",
      "Компонентная архитектура"
    ]
  },
  {
    "id": "custom-elements",
    "name": "Пользовательские элементы (Custom Elements)",
    "terms": [
      "Пример: «time-formatted»",
      "Наблюдение за атрибутами",
      "Порядок рендеринга",
      "Модифицированные встроенные элементы",
      "Ссылки",
      "Итого"
    ]
  },
  {
    "id": "shadow-dom",
    "name": "Shadow DOM",
    "terms": [
      "Встроенный теневой DOM",
      "Теневое дерево",
      "Инкапсуляция",
      "Ссылки",
      "Итого"
    ]
  },
  {
    "id": "template-element",
    "name": "Элемент \"template\"",
    "terms": [
      "Использование template",
      "Итого"
    ]
  },
  {
    "id": "slots-composition",
    "name": "Слоты теневого DOM, композиция",
    "terms": [
      "Именованные слоты",
      "Содержимое слота «по умолчанию»",
      "Слот по умолчанию (первый без имени)",
      "Пример меню",
      "Обновление слотов",
      "API слотов",
      "Итого"
    ]
  },
  {
    "id": "shadow-dom-style",
    "name": "Настройка стилей теневого DOM",
    "terms": [
      ":host",
      "Каскадирование",
      ":host(selector)",
      "Применение стилей к содержимому слотов",
      "CSS-хуки с пользовательскими свойствами",
      "Итого"
    ]
  },
  {
    "id": "shadow-dom-events",
    "name": "Теневой DOM и события",
    "terms": [
      "Всплытие и метод event.composedPath()",
      "Свойство: event.composed",
      "Генерация событий",
      "Итого"
    ]
  }
];

export const webComponentsCards = createThematicSectionCards(lessonCardSources);
