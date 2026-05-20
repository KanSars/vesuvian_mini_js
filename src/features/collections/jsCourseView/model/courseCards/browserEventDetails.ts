import { LessonCardSource } from './createSectionCards';
import { createBrowserInterfaceSectionCards } from './browserInterfaceCardRules';

// Covers the visible "Интерфейсные события" section under "Браузер: документ, события, интерфейсы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "mouse-events-basics",
    "name": "Основы событий мыши",
    "terms": [
      "Типы событий мыши",
      "Порядок событий",
      "Кнопки мыши",
      "Модификаторы: shift, alt, ctrl и meta",
      "Координаты: clientX/Y, pageX/Y",
      "Отключаем выделение",
      "Итого"
    ]
  },
  {
    "id": "mousemove-mouseover-mouseout-mouseenter-mouseleave",
    "name": "Движение мыши: mouseover/out, mouseenter/leave",
    "terms": [
      "События mouseover/mouseout, relatedTarget",
      "Пропуск элементов",
      "Событие mouseout при переходе на потомка",
      "События mouseenter и mouseleave",
      "Делегирование событий",
      "Итого"
    ]
  },
  {
    "id": "mouse-drag-and-drop",
    "name": "Drag'n'Drop с событиями мыши",
    "terms": [
      "Алгоритм Drag’n’Drop",
      "Правильное позиционирование",
      "Цели переноса (droppable)",
      "Итого"
    ]
  },
  {
    "id": "keyboard-events",
    "name": "Клавиатура: keydown и keyup",
    "terms": [
      "Тестовый стенд",
      "События keydown и keyup",
      "Автоповтор",
      "Действия по умолчанию",
      "«Дела минувших дней»",
      "Итого"
    ]
  },
  {
    "id": "pointer-events",
    "name": "События указателя",
    "terms": [
      "Краткая история",
      "Типы событий указателя",
      "Свойства событий указателя",
      "Мульти-тач",
      "Событие: pointercancel",
      "Захват указателя",
      "Итого"
    ]
  },
  {
    "id": "onscroll",
    "name": "Прокрутка",
    "terms": [
      "Предотвращение прокрутки"
    ]
  }
];

export const browserEventDetailsCards = createBrowserInterfaceSectionCards(lessonCardSources);
