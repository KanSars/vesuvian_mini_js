import { LessonCardSource, createSectionCards } from './createSectionCards';

const codeByLessonAndTerm: Record<string, string> = {
  "js-array::Объявление": "const arr = [item1, item2, item3];",
  "js-iterable::Symbol.iterator": "const iterable = {\n  [Symbol.iterator]() {\n    return {\n      next() {\n        return { done: true };\n      },\n    };\n  },\n};",
  "js-destructuring-assignment::Деструктуризация массива": "const [first, second] = array;",
  "js-destructuring-assignment::Деструктуризация объекта": "const { name, age } = user;",
  "js-new-function::Синтаксис": "const sum = new Function('a', 'b', 'return a + b');",
  "js-settimeout-setinterval::setTimeout": "const timerId = setTimeout(() => {\n  // код\n}, 1000);",
  "js-settimeout-setinterval::setInterval": "const timerId = setInterval(() => {\n  // код\n}, 1000);",
  "js-bind::Решение 2: привязать контекст с помощью bind": "const bound = func.bind(context);",
  "js-class::Синтаксис «class»": "class User {\n  constructor(name) {\n    this.name = name;\n  }\n\n  sayHi() {\n    alert(this.name);\n  }\n}",
  "js-class-inheritance::Ключевое слово «extends»": "class Child extends Parent {\n  // ...\n}",
  "js-try-catch::Синтаксис «try…catch»": "try {\n  // код\n} catch (err) {\n  // обработка ошибки\n}",
  "js-generators::Функция-генератор": "function* generate() {\n  yield 1;\n  yield 2;\n}",
  "js-async-iterators-generators::Асинхронные итераторы": "for await (const item of asyncIterable) {\n  // код\n}",
  "js-modules-intro::Что такое модуль?": "<script type=\"module\" src=\"app.js\"></script>",
  "js-import-export::Экспорт до объявления": "export function sayHi(user) {\n  alert('Привет, ' + user + '!');\n}",
  "js-modules-dynamic-imports::Выражение import()": "const module = await import('./module.js');",
  "js-proxy::Reflect": "const proxy = new Proxy(target, handler);\nReflect.get(target, prop, receiver);"
};

const hintByKeyword: Array<[string, string]> = [
  ['Итого', 'Итоговая карточка собирает правила урока в короткую памятку.'],
  ['устаревшее', 'В современном коде эту возможность важно узнавать при чтении старого кода.'],
  ['WeakRef', 'Используйте только когда обычное управление ссылками не подходит.'],
  ['eval', 'eval усложняет безопасность и оптимизацию, поэтому почти всегда есть лучший способ.'],
  ['this', 'Значение this зависит от формы функции и способа вызова.'],
  ['super', 'super работает вместе с механизмом классов и наследования.'],
  ['JSON', 'JSON поддерживает только данные, которые можно представить в текстовом формате обмена.'],
  ['Promise', 'Промис представляет результат асинхронной операции: успешный или ошибочный.'],
];

const defineByKeyword: Array<[RegExp, (lessonName: string, term: string) => string]> = [
  [/^Итого$/, (lessonName) => 'Кратко закрепляет основные правила урока «' + lessonName + '» и показывает, что нужно запомнить для дальнейшей работы.'],
  [/Синтаксис|Объявление|Выражение import|Функция-генератор|try…catch|extends/, (lessonName, term) => 'Показывает форму записи «' + term + '» в теме «' + lessonName + '»: какие части конструкции обязательны и как она используется в коде.'],
  [/Map|Set|WeakMap|WeakSet/, (_lessonName, term) => 'Объясняет коллекцию или приём «' + term + '»: какие значения она хранит, как с ними работать и чем это отличается от обычного объекта.'],
  [/JSON|toJSON|replacer|reviver|stringify|parse/, (_lessonName, term) => 'Описывает «' + term + '» при работе с JSON: как данные превращаются в строку, восстанавливаются обратно или настраиваются при преобразовании.'],
  [/Promise|Промис|then|catch|finally|async|Await|Микрозадач/, (_lessonName, term) => 'Разбирает «' + term + '» в асинхронном JavaScript: порядок выполнения, получение результата и обработку ошибок.'],
  [/Прототип|prototype|F\.prototype|__proto__/, (_lessonName, term) => 'Объясняет «' + term + '» в механизме прототипов: где JavaScript ищет свойства и как устроено наследование объектов.'],
  [/class|Класс|extends|super|instanceof|Примеси/, (_lessonName, term) => 'Сжимает раздел «' + term + '» про классы: как описывать объекты, наследовать поведение и проверять принадлежность экземпляров.'],
  [/Ошибка|ошиб|try|catch|finally|Error|исключен/i, (_lessonName, term) => 'Показывает, как «' + term + '» участвует в обработке ошибок: где ошибка появляется, как её перехватить и как передать дальше.'],
  [/Строк|символ|Юникод|Диакрит|Суррогат/, (_lessonName, term) => 'Объясняет «' + term + '» при работе со строками: как JavaScript хранит, ищет, сравнивает или преобразует текст.'],
  [/Массив|Array|pop|push|forEach|length/, (_lessonName, term) => 'Разбирает «' + term + '» для массивов: как хранить элементы, обходить их и применять методы без лишней ручной логики.'],
  [/Дата|Date|время|Бенчмаркинг/, (_lessonName, term) => 'Объясняет «' + term + '» при работе с датами и временем: создание, чтение, изменение или измерение временных значений.'],
  [/Деструктур|параметры|arguments|оператор расширения|Остаточные/, (_lessonName, term) => 'Показывает «' + term + '» как способ компактно получать значения из массивов, объектов или аргументов функции.'],
  [/Замык|Лексическое окружение|Область видимости|Вложенные функции/, (_lessonName, term) => 'Объясняет «' + term + '»: где переменные доступны, как функции запоминают окружение и когда связанные значения очищаются.'],
  [/bind|call|apply|контекст|Декоратор|кеширован|Каррирован|Частичное/, (_lessonName, term) => 'Разбирает «' + term + '» как приём работы с функциями: передачу контекста, аргументов или обёртку вызова.'],
  [/Proxy|Reflect|ловушк|ownKeys|deleteProperty|has|apply/, (_lessonName, term) => 'Описывает «' + term + '» в Proxy/Reflect: как перехватывать операции с объектом и сохранять ожидаемое поведение.'],
  [/Intl|Локаль|Collator|DateTimeFormat|NumberFormat/, (_lessonName, term) => 'Объясняет «' + term + '» в Intl: как форматировать строки, даты и числа с учётом языка и региона.'],
  [/Побитов|бит|BigInt|32-бит/, (_lessonName, term) => 'Сжимает раздел «' + term + '»: как JavaScript работает с целыми числами, битами или большими целыми значениями.'],
  [/Модул|Экспорт|Импорт|Реэкспорт/, (_lessonName, term) => 'Объясняет «' + term + '» в системе модулей: как разделять код по файлам и связывать части приложения через import/export.'],
];

export const createLanguageSectionCards = (lessonCardSources: LessonCardSource[]) => createSectionCards(
  lessonCardSources,
  {
    codeByLessonAndTerm,
    hintByKeyword,
    defineByKeyword,
    fallbackDefinition: (lessonName, term) => 'Раздел урока «' + lessonName + '» объясняет тему «' + term + '»: правило, поведение или приём, который нужен для уверенного использования этой части JavaScript.',
  }
);
