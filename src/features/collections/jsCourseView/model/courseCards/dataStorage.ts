import { LessonCardSource } from './createSectionCards';
import { createThematicSectionCards } from './thematicCardRules';

// Covers the visible "Хранение данных в браузере" section under "Тематические разделы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "cookie",
    "name": "Куки, document.cookie",
    "terms": [
      "Чтение из document.cookie",
      "Запись в document.cookie",
      "path",
      "domain",
      "expires, max-age",
      "secure",
      "samesite",
      "httpOnly",
      "Приложение: Функции для работы с куки",
      "Приложение: Сторонние куки",
      "Приложение: GDPR",
      "Итого"
    ]
  },
  {
    "id": "localstorage",
    "name": "LocalStorage, sessionStorage",
    "terms": [
      "Демо localStorage",
      "Доступ как к обычному объекту",
      "Перебор ключей",
      "Только строки",
      "sessionStorage",
      "Событие storage",
      "Итого"
    ]
  },
  {
    "id": "indexeddb",
    "name": "IndexedDB",
    "terms": [
      "Открыть базу данных",
      "Хранилище объектов",
      "Транзакции",
      "Автоматическая фиксация транзакций",
      "Обработка ошибок",
      "Поиск по ключам",
      "Поиск по индексированному полю",
      "Удаление из хранилища",
      "Курсоры",
      "Обёртка для промисов",
      "Итого"
    ]
  }
];

export const dataStorageCards = createThematicSectionCards(lessonCardSources);
