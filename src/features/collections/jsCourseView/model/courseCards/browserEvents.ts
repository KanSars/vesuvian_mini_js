import { LessonCardSource } from './createSectionCards';
import { createBrowserInterfaceSectionCards } from './browserInterfaceCardRules';

// Covers the visible "Введение в события" section under "Браузер: документ, события, интерфейсы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "introduction-browser-events",
    "name": "Введение в браузерные события",
    "terms": [
      "Обработчики событий",
      "Доступ к элементу через this",
      "Частые ошибки",
      "addEventListener",
      "Объект события",
      "Объект-обработчик: handleEvent",
      "Итого"
    ]
  },
  {
    "id": "bubbling-and-capturing",
    "name": "Всплытие и погружение",
    "terms": [
      "Всплытие",
      "event.target",
      "Прекращение всплытия",
      "Погружение",
      "Итого"
    ]
  },
  {
    "id": "event-delegation",
    "name": "Делегирование событий",
    "terms": [
      "Применение делегирования: действия в разметке",
      "Приём проектирования «поведение»",
      "Итого"
    ]
  },
  {
    "id": "default-browser-action",
    "name": "Действия браузера по умолчанию",
    "terms": [
      "Отмена действия браузера",
      "Опция «passive» для обработчика",
      "event.defaultPrevented",
      "Итого"
    ]
  },
  {
    "id": "dispatch-events",
    "name": "Генерация пользовательских событий",
    "terms": [
      "Конструктор Event",
      "Метод dispatchEvent",
      "Пример всплытия",
      "MouseEvent, KeyboardEvent и другие",
      "Пользовательские события",
      "event.preventDefault()",
      "Вложенные события обрабатываются синхронно",
      "Итого"
    ]
  }
];

export const browserEventsCards = createBrowserInterfaceSectionCards(lessonCardSources);
