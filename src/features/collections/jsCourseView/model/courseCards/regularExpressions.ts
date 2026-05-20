import { LessonCardSource } from './createSectionCards';
import { createThematicSectionCards } from './thematicCardRules';

// Covers the visible "Регулярные выражения" section under "Тематические разделы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "regexp-introduction",
    "name": "Введение: шаблоны и флаги",
    "terms": [
      "Регулярные выражения",
      "Флаги",
      "Поиск: str.match",
      "Замена: str.replace",
      "Проверка: regexp.test",
      "Итого"
    ]
  },
  {
    "id": "regexp-character-classes",
    "name": "Символьные классы",
    "terms": [
      "Обратные символьные классы",
      "Точка – это любой символ",
      "Итого"
    ]
  },
  {
    "id": "regexp-unicode",
    "name": "Юникод: флаг \"u\" и класс \\p{...}",
    "terms": [
      "Юникодные свойства \\p{…}",
      "Итого"
    ]
  },
  {
    "id": "regexp-anchors",
    "name": "Якоря: начало строки ^ и конец $",
    "terms": [
      "Проверка на полное совпадение"
    ]
  },
  {
    "id": "regexp-multiline-mode",
    "name": "Многострочный режим якорей ^ $, флаг \"m\"",
    "terms": [
      "Поиск в начале строки ^",
      "Поиск в конце строки $",
      "Ищем \\n вместо ^ $"
    ]
  },
  {
    "id": "regexp-boundary",
    "name": "Граница слова: \\b",
    "terms": []
  },
  {
    "id": "regexp-escaping",
    "name": "Экранирование, специальные символы",
    "terms": [
      "Экранирование символов",
      "Косая черта",
      "new RegExp",
      "Итого"
    ]
  },
  {
    "id": "regexp-character-sets-and-ranges",
    "name": "Наборы и диапазоны [...]",
    "terms": [
      "Наборы",
      "Диапазоны",
      "Исключающие диапазоны",
      "Экранирование внутри […]",
      "Наборы и флаг «u»"
    ]
  },
  {
    "id": "regexp-quantifiers",
    "name": "Квантификаторы +, *, ? и {n}",
    "terms": [
      "Количество {n}",
      "Короткие обозначения",
      "Ещё примеры"
    ]
  },
  {
    "id": "regexp-greedy-and-lazy",
    "name": "Жадные и ленивые квантификаторы",
    "terms": [
      "Жадный поиск",
      "Ленивый режим",
      "Альтернативный подход",
      "Итого"
    ]
  },
  {
    "id": "regexp-groups",
    "name": "Скобочные группы",
    "terms": [
      "Примеры",
      "Содержимое скобок в match",
      "Поиск всех совпадений с группами: matchAll",
      "Именованные группы",
      "Скобочные группы при замене",
      "Исключение из запоминания через ?:",
      "Итого"
    ]
  },
  {
    "id": "regexp-backreferences",
    "name": "Обратные ссылки в шаблоне: \\N и \\k<имя>",
    "terms": [
      "Обратная ссылка по номеру: \\N",
      "Обратная ссылка по имени: \\k<имя>"
    ]
  },
  {
    "id": "regexp-alternation",
    "name": "Альтернация (или) |",
    "terms": [
      "Пример: шаблон для времени"
    ]
  },
  {
    "id": "regexp-lookahead-lookbehind",
    "name": "Опережающие и ретроспективные проверки",
    "terms": [
      "Опережающая проверка",
      "Негативная опережающая проверка",
      "Ретроспективная проверка",
      "Скобочные группы",
      "Итого"
    ]
  },
  {
    "id": "regexp-catastrophic-backtracking",
    "name": "Катастрофический возврат",
    "terms": [
      "Пример",
      "Упрощённый пример",
      "Назад к словам и строкам",
      "Как исправить?",
      "Запрет возврата"
    ]
  },
  {
    "id": "regexp-sticky",
    "name": "Поиск на заданной позиции, флаг \"y\"",
    "terms": []
  },
  {
    "id": "regexp-methods",
    "name": "Методы RegExp и String",
    "terms": [
      "str.match(regexp)",
      "str.matchAll(regexp)",
      "str.split(regexp|substr, limit)",
      "str.search(regexp)",
      "str.replace(str|regexp, str|func)",
      "regexp.exec(str)",
      "regexp.test(str)"
    ]
  }
];

export const regularExpressionsCards = createThematicSectionCards(lessonCardSources);
