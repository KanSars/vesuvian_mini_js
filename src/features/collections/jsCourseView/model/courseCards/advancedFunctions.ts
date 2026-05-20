import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Продвинутая работа с функциями" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-recursion",
    "name": "Рекурсия и стек",
    "terms": [
      "Два способа мышления",
      "Контекст выполнения, стек",
      "Рекурсивные обходы",
      "Рекурсивные структуры",
      "Итого"
    ]
  },
  {
    "id": "js-rest-parameters-spread-operator",
    "name": "Остаточные параметры и оператор расширения",
    "terms": [
      "Остаточные параметры (...)",
      "Переменная \"arguments\"",
      "Оператор расширения",
      "Итого"
    ]
  },
  {
    "id": "js-closure",
    "name": "Область видимости переменных, замыкание",
    "terms": [
      "Блоки кода",
      "Вложенные функции",
      "Лексическое окружение",
      "Сборка мусора"
    ]
  },
  {
    "id": "js-var",
    "name": "Устаревшее ключевое слово \"var\"",
    "terms": [
      "Для «var» не существует блочной области видимости",
      "«var» допускает повторное объявление",
      "«var» обрабатываются в начале запуска функции",
      "IIFE",
      "Итого"
    ]
  },
  {
    "id": "js-global-object",
    "name": "Глобальный объект",
    "terms": [
      "Использование для полифилов",
      "Итого"
    ]
  },
  {
    "id": "js-function-object",
    "name": "Объект функции, NFE",
    "terms": [
      "Свойство «name»",
      "Свойство «length»",
      "Пользовательские свойства",
      "Named Function Expression",
      "Итого"
    ]
  },
  {
    "id": "js-new-function",
    "name": "Синтаксис \"new Function\"",
    "terms": [
      "Синтаксис",
      "Замыкание",
      "Итого"
    ]
  },
  {
    "id": "js-settimeout-setinterval",
    "name": "Планирование: setTimeout и setInterval",
    "terms": [
      "setTimeout",
      "setInterval",
      "Вложенный setTimeout",
      "setTimeout с нулевой задержкой",
      "Итого"
    ]
  },
  {
    "id": "js-call-apply-decorators",
    "name": "Декораторы и переадресация вызова, call/apply",
    "terms": [
      "Прозрачное кеширование",
      "Применение «func.call» для передачи контекста",
      "Переходим к нескольким аргументам с «func.apply»",
      "Заимствование метода",
      "Итого"
    ]
  },
  {
    "id": "js-bind",
    "name": "Привязка контекста к функции",
    "terms": [
      "Потеря «this»",
      "Решение 1: сделать функцию-обёртку",
      "Решение 2: привязать контекст с помощью bind",
      "Частичное применение",
      "Частичное применение без контекста",
      "Итого"
    ]
  },
  {
    "id": "js-arrow-functions",
    "name": "Повторяем стрелочные функции",
    "terms": [
      "У стрелочных функций нет «this»",
      "Стрелочные функции не имеют «arguments»",
      "Итого"
    ]
  }
];

export const advancedFunctionsCards = createLanguageSectionCards(lessonCardSources);
