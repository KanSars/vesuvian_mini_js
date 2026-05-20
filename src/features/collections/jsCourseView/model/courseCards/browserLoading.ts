import { LessonCardSource } from './createSectionCards';
import { createBrowserInterfaceSectionCards } from './browserInterfaceCardRules';

// Covers the visible "Загрузка документа и ресурсов" section under "Браузер: документ, события, интерфейсы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "onload-ondomcontentloaded",
    "name": "Страница: DOMContentLoaded, load, beforeunload, unload",
    "terms": [
      "DOMContentLoaded",
      "window.onload",
      "window.onunload",
      "window.onbeforeunload",
      "readyState",
      "Итого"
    ]
  },
  {
    "id": "script-async-defer",
    "name": "Скрипты: async, defer",
    "terms": [
      "defer",
      "async",
      "Динамически загружаемые скрипты",
      "Итого"
    ]
  },
  {
    "id": "onload-onerror",
    "name": "Загрузка ресурсов: onload и onerror",
    "terms": [
      "Загрузка скриптов",
      "Другие ресурсы",
      "Ошибка в скрипте с другого источника",
      "Итого"
    ]
  }
];

export const browserLoadingCards = createBrowserInterfaceSectionCards(lessonCardSources);
