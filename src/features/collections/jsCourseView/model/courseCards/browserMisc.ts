import { LessonCardSource } from './createSectionCards';
import { createBrowserInterfaceSectionCards } from './browserInterfaceCardRules';

// Covers the visible "Разное" section under "Браузер: документ, события, интерфейсы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "mutation-observer",
    "name": "MutationObserver: наблюдатель за изменениями",
    "terms": [
      "Синтаксис",
      "Использование для интеграции",
      "Использование для архитектуры",
      "Дополнительные методы",
      "Сборка мусора",
      "Итого"
    ]
  },
  {
    "id": "selection-range",
    "name": "Selection и Range",
    "terms": [
      "Range",
      "Методы Range",
      "Selection",
      "Свойства Selection",
      "События при выделении",
      "Методы Selection",
      "Выделение в элементах форм",
      "Сделать что-то невыделяемым",
      "Ссылки",
      "Итого"
    ]
  },
  {
    "id": "event-loop",
    "name": "Событийный цикл: микрозадачи и макрозадачи",
    "terms": [
      "Событийный цикл",
      "Пример 1: разбиение «тяжёлой» задачи.",
      "Пример 2: индикация прогресса",
      "Пример 3: делаем что-нибудь после события",
      "Макрозадачи и Микрозадачи",
      "Итого"
    ]
  }
];

export const browserMiscCards = createBrowserInterfaceSectionCards(lessonCardSources);
