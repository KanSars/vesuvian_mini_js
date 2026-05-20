import { LessonCardSource } from './createSectionCards';
import { createBrowserInterfaceSectionCards } from './browserInterfaceCardRules';

// Covers the visible "Формы, элементы управления" section under "Браузер: документ, события, интерфейсы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "form-elements",
    "name": "Свойства и методы формы",
    "terms": [
      "Навигация: формы и элементы",
      "Обратная ссылка: element.form",
      "Элементы формы",
      "Ссылки",
      "Итого"
    ]
  },
  {
    "id": "focus-blur",
    "name": "Фокусировка: focus/blur",
    "terms": [
      "События focus/blur",
      "Методы focus/blur",
      "Включаем фокусировку на любом элементе: tabindex",
      "События focusin/focusout",
      "Итого"
    ]
  },
  {
    "id": "events-change-input",
    "name": "События: change, input, cut, copy, paste",
    "terms": [
      "Событие: change",
      "Событие: input",
      "События: cut, copy, paste",
      "Итого"
    ]
  },
  {
    "id": "forms-submit",
    "name": "Отправка формы: событие и метод submit",
    "terms": [
      "Событие: submit",
      "Метод: submit"
    ]
  }
];

export const browserFormsControlsCards = createBrowserInterfaceSectionCards(lessonCardSources);
