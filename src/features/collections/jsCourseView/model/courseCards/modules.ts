import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Модули" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-modules-intro",
    "name": "Модули, введение",
    "terms": [
      "Что такое модуль?",
      "Основные возможности модулей",
      "Особенности в браузерах",
      "Инструменты сборки",
      "Итого"
    ]
  },
  {
    "id": "js-import-export",
    "name": "Экспорт и импорт",
    "terms": [
      "Экспорт до объявления",
      "Экспорт отдельно от объявления",
      "Импорт *",
      "Импорт «как»",
      "Экспортировать «как»",
      "Экспорт по умолчанию",
      "Реэкспорт",
      "Итого"
    ]
  },
  {
    "id": "js-modules-dynamic-imports",
    "name": "Динамические импорты",
    "terms": [
      "Выражение import()"
    ]
  }
];

export const modulesCards = createLanguageSectionCards(lessonCardSources);
