import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Свойства объекта, их конфигурация" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-property-descriptors",
    "name": "Флаги и дескрипторы свойств",
    "terms": [
      "Флаги свойств",
      "Только для чтения",
      "Неперечислимое свойство",
      "Неконфигурируемое свойство",
      "Метод Object.defineProperties",
      "Object.getOwnPropertyDescriptors",
      "Глобальное запечатывание объекта"
    ]
  },
  {
    "id": "js-property-accessors",
    "name": "Свойства - геттеры и сеттеры",
    "terms": [
      "Геттеры и сеттеры",
      "Дескрипторы свойств доступа",
      "Умные геттеры/сеттеры",
      "Использование для совместимости"
    ]
  }
];

export const objectPropertiesCards = createLanguageSectionCards(lessonCardSources);
