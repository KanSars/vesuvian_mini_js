import { LessonCardSource } from './createSectionCards';
import { createThematicSectionCards } from './thematicCardRules';

// Covers the visible "Сетевые запросы" section under "Тематические разделы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "fetch",
    "name": "Fetch",
    "terms": [
      "Заголовки ответа",
      "Заголовки запроса",
      "POST-запросы",
      "Отправка изображения",
      "Итого"
    ]
  },
  {
    "id": "formdata",
    "name": "FormData",
    "terms": [
      "Отправка простой формы",
      "Методы объекта FormData",
      "Отправка формы с файлом",
      "Отправка формы с Blob-данными",
      "Итого"
    ]
  },
  {
    "id": "fetch-progress",
    "name": "Fetch: ход загрузки",
    "terms": [
      "response.body",
      "ReadableStream",
      "reader.read()",
      "done и value",
      "Content-Length",
      "Сборка chunks",
      "TextDecoder",
      "Blob из chunks",
      "Ограничение: только получение данных"
    ]
  },
  {
    "id": "fetch-abort",
    "name": "Fetch: прерывание запроса",
    "terms": [
      "AbortController",
      "controller.signal",
      "controller.abort()",
      "AbortError",
      "Отмена нескольких fetch",
      "Отмена собственных асинхронных задач"
    ]
  },
  {
    "id": "fetch-crossorigin",
    "name": "Fetch: запросы на другие сайты",
    "terms": [
      "Зачем нужен CORS? Экскурс в историю",
      "Простые запросы",
      "CORS для простых запросов",
      "Заголовки ответа",
      "«Непростые» запросы",
      "Авторизационные данные",
      "Итого"
    ]
  },
  {
    "id": "fetch-api",
    "name": "Fetch API",
    "terms": [
      "referrer, referrerPolicy",
      "mode",
      "credentials",
      "cache",
      "redirect",
      "integrity",
      "keepalive"
    ]
  },
  {
    "id": "url",
    "name": "Объекты URL",
    "terms": [
      "Создание URL",
      "SearchParams «?…»",
      "Кодирование"
    ]
  },
  {
    "id": "xmlhttprequest",
    "name": "XMLHttpRequest",
    "terms": [
      "Основы",
      "Тип ответа",
      "Состояния запроса",
      "Отмена запроса",
      "Синхронные запросы",
      "HTTP-заголовки",
      "POST, FormData",
      "Прогресс отправки",
      "Запросы на другой источник",
      "Итого"
    ]
  },
  {
    "id": "resume-upload",
    "name": "Возобновляемая загрузка файлов",
    "terms": [
      "Не очень полезное событие progress",
      "Алгоритм"
    ]
  },
  {
    "id": "long-polling",
    "name": "Длинные опросы",
    "terms": [
      "Частые опросы",
      "Длинные опросы",
      "Демо: чат",
      "Область применения"
    ]
  },
  {
    "id": "websocket",
    "name": "WebSocket",
    "terms": [
      "Простой пример",
      "Открытие веб-сокета",
      "Передача данных",
      "Ограничение скорости",
      "Закрытие подключения",
      "Состояние соединения",
      "Пример чата",
      "Итого"
    ]
  },
  {
    "id": "server-sent-events",
    "name": "Server Sent Events",
    "terms": [
      "Получение сообщений",
      "Переподключение",
      "Идентификатор сообщения",
      "Статус подключения: readyState",
      "Типы событий",
      "Полный пример",
      "Итого"
    ]
  }
];

export const networkCards = createThematicSectionCards(lessonCardSources);
