import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Качество кода" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-testing",
    "name": "Автоматическое тестирование c Mocha",
    "terms": [
      "Зачем нам нужны тесты?",
      "Behavior Driven Development (BDD)",
      "Спецификация",
      "describe",
      "it",
      "assert.equal",
      "Процесс разработки",
      "Mocha, Chai, Sinon",
      "Вложенные блоки describe",
      "before/after и beforeEach/afterEach",
      "Итого"
    ]
  }
];

export const codeQualityCards = createLanguageSectionCards(lessonCardSources);
