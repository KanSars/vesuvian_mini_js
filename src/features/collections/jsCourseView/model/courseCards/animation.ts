import { LessonCardSource } from './createSectionCards';
import { createThematicSectionCards } from './thematicCardRules';

// Covers the visible "Анимация" section under "Тематические разделы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "bezier-curve",
    "name": "Кривые Безье",
    "terms": [
      "Опорные точки",
      "Алгоритм «де Кастельжо»",
      "Математика",
      "Итого"
    ]
  },
  {
    "id": "css-animations",
    "name": "CSS-анимации",
    "terms": [
      "CSS-переходы",
      "transition-property",
      "transition-duration",
      "transition-delay",
      "transition-timing-function",
      "Событие: «transitionend»",
      "Ключевые кадры",
      "Итого"
    ]
  },
  {
    "id": "js-animation",
    "name": "JavaScript-анимации",
    "terms": [
      "Использование setInterval",
      "Использование requestAnimationFrame",
      "Структура анимации",
      "Функции расчёта времени",
      "Реверсивные функции: ease*",
      "Более интересная функция «draw»",
      "Итого"
    ]
  }
];

export const animationCards = createThematicSectionCards(lessonCardSources);
