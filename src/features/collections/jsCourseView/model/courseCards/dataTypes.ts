import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Типы данных" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-primitives-methods",
    "name": "Методы примитивов",
    "terms": [
      "Примитив как объект",
      "Итого"
    ]
  },
  {
    "id": "js-number",
    "name": "Числа",
    "terms": [
      "Способы записи числа",
      "toString(base)",
      "Округление",
      "Неточные вычисления",
      "Проверка: isFinite и isNaN",
      "parseInt и parseFloat",
      "Другие математические функции",
      "Итого"
    ]
  },
  {
    "id": "js-string",
    "name": "Строки",
    "terms": [
      "Кавычки",
      "Спецсимволы",
      "Длина строки",
      "Доступ к символам",
      "Строки неизменяемы",
      "Изменение регистра",
      "Поиск подстроки",
      "Получение подстроки",
      "Сравнение строк",
      "Итого"
    ]
  },
  {
    "id": "js-array",
    "name": "Массивы",
    "terms": [
      "Объявление",
      "Получение последних элементов при помощи «at»",
      "Методы pop/push, shift/unshift",
      "Внутреннее устройство массива",
      "Эффективность",
      "Перебор элементов",
      "Немного о «length»",
      "new Array()",
      "Многомерные массивы",
      "toString",
      "Не сравнивайте массивы при помощи ==",
      "Итого"
    ]
  },
  {
    "id": "js-array-methods",
    "name": "Методы массивов",
    "terms": [
      "Добавление/удаление элементов",
      "Перебор: forEach",
      "Поиск в массиве",
      "Преобразование массива",
      "Array.isArray",
      "Большинство методов поддерживают «thisArg»",
      "Итого"
    ]
  },
  {
    "id": "js-iterable",
    "name": "Перебираемые объекты",
    "terms": [
      "Symbol.iterator",
      "Строка – перебираемый объект",
      "Явный вызов итератора",
      "Итерируемые объекты и псевдомассивы",
      "Array.from",
      "Итого"
    ]
  },
  {
    "id": "js-map-set",
    "name": "Map и Set",
    "terms": [
      "Map",
      "Перебор Map",
      "Object.entries: Map из Object",
      "Object.fromEntries: Object из Map",
      "Set",
      "Перебор объекта Set",
      "Итого"
    ]
  },
  {
    "id": "js-weakmap-weakset",
    "name": "WeakMap и WeakSet",
    "terms": [
      "WeakMap",
      "Пример: дополнительные данные",
      "Применение для кеширования",
      "WeakSet",
      "Итого"
    ]
  },
  {
    "id": "js-keys-values-entries",
    "name": "Object.keys, values, entries",
    "terms": [
      "Object.keys, values, entries",
      "Трансформации объекта"
    ]
  },
  {
    "id": "js-destructuring-assignment",
    "name": "Деструктурирующее присваивание",
    "terms": [
      "Деструктуризация массива",
      "Деструктуризация объекта",
      "Вложенная деструктуризация",
      "Умные параметры функций",
      "Итого"
    ]
  },
  {
    "id": "js-date",
    "name": "Дата и время",
    "terms": [
      "Создание",
      "Получение компонентов даты",
      "Установка компонентов даты",
      "Автоисправление даты",
      "Преобразование к числу, разность дат",
      "Date.now()",
      "Бенчмаркинг",
      "Разбор строки с датой",
      "Итого"
    ]
  },
  {
    "id": "js-json",
    "name": "Формат JSON, метод toJSON",
    "terms": [
      "JSON.stringify",
      "Исключаем и преобразуем: replacer",
      "Форматирование: space",
      "Пользовательский «toJSON»",
      "JSON.parse",
      "Использование reviver",
      "Итого"
    ]
  }
];

export const dataTypesCards = createLanguageSectionCards(lessonCardSources);
