import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Генераторы, продвинутая итерация" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-generators",
    "name": "Генераторы",
    "terms": [
      "Функция-генератор",
      "Перебор генераторов",
      "Использование генераторов для перебираемых объектов",
      "Композиция генераторов",
      "yield – дорога в обе стороны",
      "generator.throw",
      "Итого"
    ]
  },
  {
    "id": "js-async-iterators-generators",
    "name": "Асинхронные итераторы и генераторы",
    "terms": [
      "Асинхронные итераторы",
      "Асинхронные генераторы",
      "Асинхронно перебираемые объекты",
      "Пример из реальной практики",
      "Итого"
    ]
  }
];

export const generatorsIteratorsCards = createLanguageSectionCards(lessonCardSources);
