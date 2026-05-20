import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Промисы, async/await" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-callbacks",
    "name": "Введение: колбэки",
    "terms": [
      "Колбэк в колбэке",
      "Перехват ошибок",
      "Адская пирамида вызовов"
    ]
  },
  {
    "id": "js-promise-basics",
    "name": "Промисы",
    "terms": [
      "Потребители: then, catch",
      "Очистка: finally",
      "Пример: loadScript"
    ]
  },
  {
    "id": "js-promise-chaining",
    "name": "Цепочка промисов",
    "terms": [
      "Возвращаем промисы",
      "Пример: loadScript",
      "Более сложный пример: fetch",
      "Итого"
    ]
  },
  {
    "id": "js-promise-error-handling",
    "name": "Промисы: обработка ошибок",
    "terms": [
      "Неявный try…catch",
      "Пробрасывание ошибок",
      "Необработанные ошибки",
      "Итого"
    ]
  },
  {
    "id": "js-promise-api",
    "name": "Promise API",
    "terms": [
      "Promise.all",
      "Promise.allSettled",
      "Promise.race",
      "Promise.any",
      "Promise.resolve/reject",
      "Итого"
    ]
  },
  {
    "id": "js-promisify",
    "name": "Промисификация",
    "terms": []
  },
  {
    "id": "js-microtask-queue",
    "name": "Микрозадачи",
    "terms": [
      "Очередь микрозадач",
      "Необработанные ошибки",
      "Итого"
    ]
  },
  {
    "id": "js-async-await",
    "name": "Async/await",
    "terms": [
      "Асинхронные функции",
      "Await",
      "Обработка ошибок",
      "Итого"
    ]
  }
];

export const asyncCards = createLanguageSectionCards(lessonCardSources);
