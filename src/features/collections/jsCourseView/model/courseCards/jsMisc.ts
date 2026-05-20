import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Разное" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-proxy",
    "name": "Proxy и Reflect",
    "terms": [
      "Значение по умолчанию с ловушкой «get»",
      "Валидация с ловушкой «set»",
      "Перебор при помощи «ownKeys» и «getOwnPropertyDescriptor»",
      "Защищённые свойства с ловушкой «deleteProperty» и другими",
      "«В диапазоне» с ловушкой «has»",
      "Оборачиваем функции: «apply»",
      "Reflect",
      "Ограничения прокси",
      "Отключаемые прокси",
      "Ссылки",
      "Итого"
    ]
  },
  {
    "id": "js-eval",
    "name": "Eval: выполнение строки кода",
    "terms": [
      "Использование «eval»",
      "Итого"
    ]
  },
  {
    "id": "js-currying-partials",
    "name": "Каррирование",
    "terms": [
      "Каррирование? Зачем?",
      "Продвинутая реализация каррирования",
      "Итого"
    ]
  },
  {
    "id": "js-reference-type",
    "name": "Ссылочный тип",
    "terms": [
      "Ссылочный тип: объяснение",
      "Итого"
    ]
  },
  {
    "id": "js-bitwise-operators",
    "name": "Побитовые операторы",
    "terms": [
      "Формат 32-битного целого числа со знаком",
      "Список операторов",
      "& (Побитовое И)",
      "| (Побитовое ИЛИ)",
      "^ (Исключающее ИЛИ)",
      "~ (Побитовое НЕ)",
      "Применение побитовых операторов",
      "Итого"
    ]
  },
  {
    "id": "js-bigint",
    "name": "BigInt",
    "terms": [
      "Математические операторы",
      "Операции сравнения",
      "Логические операции",
      "Полифилы",
      "Ссылки"
    ]
  },
  {
    "id": "js-unicode",
    "name": "Юникод, внутреннее устройство строк",
    "terms": [
      "Суррогатные пары",
      "Диакритические знаки и нормализация"
    ]
  },
  {
    "id": "js-intl",
    "name": "Intl: интернационализация в JavaScript",
    "terms": [
      "Основные объекты",
      "Локаль",
      "Строки, Intl.Collator",
      "Даты, Intl.DateTimeFormat",
      "Числа, Intl.NumberFormat",
      "Методы в Date, String, Number",
      "Старые IE"
    ]
  },
  {
    "id": "js-weakref-finalizationregistry",
    "name": "WeakRef и FinalizationRegistry",
    "terms": [
      "WeakRef",
      "Варианты использования WeakRef",
      "Пример №1: применение WeakRef для кеширования",
      "Пример №2: применение WeakRef для отслеживания объектов DOM",
      "FinalizationRegistry",
      "Кеширование с FinalizationRegistry",
      "Использование WeakRef и FinalizationRegistry на практике",
      "Итого"
    ]
  }
];

export const jsMiscCards = createLanguageSectionCards(lessonCardSources);
