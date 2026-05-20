import { LessonCardSource } from './createSectionCards';
import { createThematicSectionCards } from './thematicCardRules';

// Covers the visible "Фреймы и окна" section under "Тематические разделы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "popup-windows",
    "name": "Открытие окон и методы window",
    "terms": [
      "Блокировка попапов",
      "Полный синтаксис window.open",
      "Пример: минималистичное окно",
      "Доступ к попапу из основного окна",
      "Доступ к открывшему окну из попапа",
      "Закрытие попапа",
      "Прокрутка и изменение размеров",
      "Прокрутка окна",
      "Установка и потеря фокуса",
      "Итого"
    ]
  },
  {
    "id": "cross-window-communication",
    "name": "Общение между окнами",
    "terms": [
      "Политика \"Одинакового источника\"",
      "Окна на поддоменах: document.domain",
      "Коллекция window.frames",
      "Атрибут ифрейма sandbox",
      "Обмен сообщениями между окнами",
      "Итого"
    ]
  },
  {
    "id": "clickjacking",
    "name": "Атака типа clickjacking",
    "terms": [
      "Идея",
      "Демонстрация",
      "Примеры слабой защиты",
      "Заголовок X-Frame-Options",
      "Отображение с ограниченными возможностями",
      "Атрибут cookie: samesite",
      "Итого"
    ]
  }
];

export const framesAndWindowsCards = createThematicSectionCards(lessonCardSources);
