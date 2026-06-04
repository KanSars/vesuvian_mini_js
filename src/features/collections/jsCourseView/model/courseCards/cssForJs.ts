import { LessonCardSource } from './createSectionCards';
import { createThematicSectionCards } from './thematicCardRules';

// Covers the visible "CSS для JavaScript-разработчика" section under "Тематические разделы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "css-why",
    "name": "О чём пойдёт речь",
    "terms": [
      "Чек-лист",
      "Почитать"
    ]
  },
  {
    "id": "css-units",
    "name": "Единицы измерения: px, em, rem и другие",
    "terms": [
      "Пиксели: px",
      "Относительно шрифта: em",
      "Проценты %",
      "Единица rem: смесь px и em",
      "Относительно экрана: vw, vh, vmin, vmax",
      "Итого"
    ]
  },
  {
    "id": "display",
    "name": "Все значения свойства display",
    "terms": [
      "Значение none",
      "Значение block",
      "Значение inline",
      "Значение inline-block",
      "Значения table-*",
      "Значения list-item, run-in и flex"
    ]
  },
  {
    "id": "float",
    "name": "Свойство float",
    "terms": [
      "Как работает float",
      "Очистка под float",
      "Заполнение блока-родителя",
      "float вместо display:inline-block",
      "Вёрстка в несколько колонок"
    ]
  },
  {
    "id": "position",
    "name": "Свойство position",
    "terms": [
      "position: static",
      "position: relative",
      "position: absolute",
      "position: absolute в позиционированном родителе",
      "position: fixed",
      "Итого",
      "Почитать"
    ]
  },
  {
    "id": "css-center",
    "name": "Центрирование горизонтальное и вертикальное",
    "terms": [
      "Горизонтальное",
      "Вертикальное",
      "Итого"
    ]
  },
  {
    "id": "font-size-line-height",
    "name": "Свойства font-size и line-height",
    "terms": [
      "font-size и line-height",
      "Множитель для line-height",
      "Синтаксис font: size/height family",
      "Итого"
    ]
  },
  {
    "id": "white-space",
    "name": "Свойство white-space",
    "terms": [
      "pre / nowrap",
      "pre-wrap/pre-line"
    ]
  },
  {
    "id": "outline",
    "name": "Свойство outline",
    "terms": [
      "outline",
      "outline и border",
      "Не участвует в блочной модели",
      "Нет outline-top/left",
      "Перекрытие outline",
      "outline-offset",
      "Использование для hover"
    ]
  },
  {
    "id": "box-sizing",
    "name": "Свойство box-sizing",
    "terms": [
      "Значения box-sizing",
      "Пример: подстроить ширину к родителю"
    ]
  },
  {
    "id": "margin",
    "name": "Свойство margin",
    "terms": [
      "Объединение отступов",
      "Отрицательные margin-top/left",
      "Пример: вынос заголовка",
      "Пример: вынос разрыва",
      "Отрицательные margin-right/bottom",
      "Итого"
    ]
  },
  {
    "id": "space-under-img",
    "name": "Лишнее место под IMG",
    "terms": [
      "Демонстрация проблемы",
      "Решение: сделать элемент блочным",
      "Решение: задать vertical-align",
      "Итого"
    ]
  },
  {
    "id": "overflow",
    "name": "Свойство overflow",
    "terms": [
      "visible",
      "hidden",
      "auto",
      "scroll",
      "overflow-x, overflow-y",
      "Итого"
    ]
  },
  {
    "id": "height-percent",
    "name": "Особенности свойства height в %",
    "terms": [
      "Пример",
      "Демо height:100% + float:left",
      "Правильно: height:100% + position:absolute",
      "Проблема с height: 100%, проявляющаяся, когда у родительского элемента не установлен height, но указан min-height",
      "Итого"
    ]
  },
  {
    "id": "css-selectors",
    "name": "Знаете ли вы селекторы?",
    "terms": [
      "Основные виды селекторов",
      "Отношения",
      "Фильтр по месту среди соседей",
      "Фильтр по месту среди соседей с тем же тегом",
      "Селекторы атрибутов",
      "Другие псевдоклассы",
      "Псевдоэлементы ::before, ::after",
      "Практика"
    ]
  },
  {
    "id": "css-sprite",
    "name": "CSS-спрайты",
    "terms": [
      "Шаг 1. Использовать background",
      "Шаг 2. Объединить изображения",
      "Шаг 3. Показать часть спрайта в «окошке»",
      "Шаг 4. Сдвинуть спрайт",
      "Итого"
    ]
  },
  {
    "id": "css-format",
    "name": "Правила форматирования CSS",
    "terms": [
      "Каждое свойство – на отдельной строке",
      "Каждый селектор – на отдельной строке",
      "Свойства, сильнее влияющие на документ, идут первыми",
      "Организация CSS-файлов проекта"
    ]
  }
];

export const cssForJsCards = createThematicSectionCards(lessonCardSources);
