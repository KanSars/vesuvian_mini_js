import { LessonCardSource } from './createSectionCards';
import { createLanguageSectionCards } from './languageCardRules';

// Covers the visible "Обработка ошибок" section under "Язык JavaScript".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "js-try-catch",
    "name": "Обработка ошибок, \"try..catch\"",
    "terms": [
      "Синтаксис «try…catch»",
      "Объект ошибки",
      "Блок «catch» без переменной",
      "Использование «try…catch»",
      "Генерация собственных ошибок",
      "Проброс исключения",
      "try…catch…finally",
      "Глобальный catch",
      "Итого"
    ]
  },
  {
    "id": "js-custom-errors",
    "name": "Пользовательские ошибки, расширение Error",
    "terms": [
      "Расширение Error",
      "Дальнейшее наследование",
      "Обёртывание исключений",
      "Итого"
    ]
  }
];

export const errorHandlingCards = createLanguageSectionCards(lessonCardSources);
