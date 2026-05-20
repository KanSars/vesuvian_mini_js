import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Классы" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-class",
    "name": "Класс: базовый синтаксис",
    "terms": [
      "Синтаксис «class»",
      "Что такое класс?",
      "Не просто синтаксический сахар",
      "Class Expression",
      "Геттеры/сеттеры, другие сокращения",
      "Свойства классов",
      "Итого"
    ]
  },
  {
    "id": "js-class-inheritance",
    "name": "Наследование классов",
    "terms": [
      "Ключевое слово «extends»",
      "Переопределение методов",
      "Переопределение конструктора",
      "Устройство super, [[HomeObject]]",
      "Итого"
    ]
  },
  {
    "id": "js-static-properties-methods",
    "name": "Статические свойства и методы",
    "terms": [
      "Статические свойства",
      "Наследование статических свойств и методов",
      "Итого"
    ]
  },
  {
    "id": "js-private-protected-properties-methods",
    "name": "Приватные и защищённые методы и свойства",
    "terms": [
      "Пример из реальной жизни",
      "Внутренний и внешний интерфейсы",
      "Защищённое свойство «waterAmount»",
      "Свойство только для чтения «power»",
      "Приватное свойство «#waterLimit»",
      "Итого"
    ]
  },
  {
    "id": "js-extend-natives",
    "name": "Расширение встроенных классов",
    "terms": [
      "Отсутствие статического наследования встроенных классов"
    ]
  },
  {
    "id": "js-instanceof",
    "name": "Проверка класса: \"instanceof\"",
    "terms": [
      "Оператор instanceof",
      "Бонус: Object.prototype.toString возвращает тип",
      "Итого"
    ]
  },
  {
    "id": "js-mixins",
    "name": "Примеси",
    "terms": [
      "Пример примеси",
      "EventMixin",
      "Итого"
    ]
  }
];

export const classesCards = createLanguageSectionCards(lessonCardSources);
