import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Прототипы, наследование" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-prototype-inheritance",
    "name": "Прототипное наследование",
    "terms": [
      "[[Prototype]]",
      "Операция записи не использует прототип",
      "Значение «this»",
      "Цикл for…in",
      "Итого"
    ]
  },
  {
    "id": "js-function-prototype",
    "name": "F.prototype",
    "terms": [
      "F.prototype по умолчанию, свойство constructor",
      "Итого"
    ]
  },
  {
    "id": "js-native-prototypes",
    "name": "Встроенные прототипы",
    "terms": [
      "Object.prototype",
      "Другие встроенные прототипы",
      "Примитивы",
      "Изменение встроенных прототипов",
      "Заимствование у прототипов",
      "Итого"
    ]
  },
  {
    "id": "js-prototype-methods",
    "name": "Методы прототипов, объекты без свойства __proto__",
    "terms": [
      "Краткая история",
      "\"Простейший\" объект",
      "Итого"
    ]
  }
];

export const prototypesCards = createLanguageSectionCards(lessonCardSources);
