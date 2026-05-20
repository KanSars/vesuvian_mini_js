import { Card } from 'entities/Card/model/types';

interface LessonCardSource {
  id: string;
  name: string;
  terms: string[];
}

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
  },
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
  },
  {
    "id": "js-property-descriptors",
    "name": "Флаги и дескрипторы свойств",
    "terms": [
      "Флаги свойств",
      "Только для чтения",
      "Неперечислимое свойство",
      "Неконфигурируемое свойство",
      "Метод Object.defineProperties",
      "Object.getOwnPropertyDescriptors",
      "Глобальное запечатывание объекта"
    ]
  },
  {
    "id": "js-property-accessors",
    "name": "Свойства - геттеры и сеттеры",
    "terms": [
      "Геттеры и сеттеры",
      "Дескрипторы свойств доступа",
      "Умные геттеры/сеттеры",
      "Использование для совместимости"
    ]
  },
  {
    "id": "js-prototype-inheritance",
    "name": "Прототипное наследование",
    "terms": [
      "[[Prototype]]",
      "Операция записи не использует прототип",
      "Значение «this»",
      "Цикл for…in",
      "Итого"
    ]
  },
  {
    "id": "js-function-prototype",
    "name": "F.prototype",
    "terms": [
      "F.prototype по умолчанию, свойство constructor",
      "Итого"
    ]
  },
  {
    "id": "js-native-prototypes",
    "name": "Встроенные прототипы",
    "terms": [
      "Object.prototype",
      "Другие встроенные прототипы",
      "Примитивы",
      "Изменение встроенных прототипов",
      "Заимствование у прототипов",
      "Итого"
    ]
  },
  {
    "id": "js-prototype-methods",
    "name": "Методы прототипов, объекты без свойства __proto__",
    "terms": [
      "Краткая история",
      "\"Простейший\" объект",
      "Итого"
    ]
  },
  {
    "id": "js-class",
    "name": "Класс: базовый синтаксис",
    "terms": [
      "Синтаксис «class»",
      "Что такое класс?",
      "Не просто синтаксический сахар",
      "Class Expression",
      "Геттеры/сеттеры, другие сокращения",
      "Свойства классов",
      "Итого"
    ]
  },
  {
    "id": "js-class-inheritance",
    "name": "Наследование классов",
    "terms": [
      "Ключевое слово «extends»",
      "Переопределение методов",
      "Переопределение конструктора",
      "Устройство super, [[HomeObject]]",
      "Итого"
    ]
  },
  {
    "id": "js-static-properties-methods",
    "name": "Статические свойства и методы",
    "terms": [
      "Статические свойства",
      "Наследование статических свойств и методов",
      "Итого"
    ]
  },
  {
    "id": "js-private-protected-properties-methods",
    "name": "Приватные и защищённые методы и свойства",
    "terms": [
      "Пример из реальной жизни",
      "Внутренний и внешний интерфейсы",
      "Защищённое свойство «waterAmount»",
      "Свойство только для чтения «power»",
      "Приватное свойство «#waterLimit»",
      "Итого"
    ]
  },
  {
    "id": "js-extend-natives",
    "name": "Расширение встроенных классов",
    "terms": [
      "Отсутствие статического наследования встроенных классов"
    ]
  },
  {
    "id": "js-instanceof",
    "name": "Проверка класса: \"instanceof\"",
    "terms": [
      "Оператор instanceof",
      "Бонус: Object.prototype.toString возвращает тип",
      "Итого"
    ]
  },
  {
    "id": "js-mixins",
    "name": "Примеси",
    "terms": [
      "Пример примеси",
      "EventMixin",
      "Итого"
    ]
  },
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
  },
  {
    "id": "js-callbacks",
    "name": "Введение: колбэки",
    "terms": [
      "Колбэк в колбэке",
      "Перехват ошибок",
      "Адская пирамида вызовов"
    ]
  },
  {
    "id": "js-promise-basics",
    "name": "Промисы",
    "terms": [
      "Потребители: then, catch",
      "Очистка: finally",
      "Пример: loadScript"
    ]
  },
  {
    "id": "js-promise-chaining",
    "name": "Цепочка промисов",
    "terms": [
      "Возвращаем промисы",
      "Пример: loadScript",
      "Более сложный пример: fetch",
      "Итого"
    ]
  },
  {
    "id": "js-promise-error-handling",
    "name": "Промисы: обработка ошибок",
    "terms": [
      "Неявный try…catch",
      "Пробрасывание ошибок",
      "Необработанные ошибки",
      "Итого"
    ]
  },
  {
    "id": "js-promise-api",
    "name": "Promise API",
    "terms": [
      "Promise.all",
      "Promise.allSettled",
      "Promise.race",
      "Promise.any",
      "Promise.resolve/reject",
      "Итого"
    ]
  },
  {
    "id": "js-promisify",
    "name": "Промисификация",
    "terms": []
  },
  {
    "id": "js-microtask-queue",
    "name": "Микрозадачи",
    "terms": [
      "Очередь микрозадач",
      "Необработанные ошибки",
      "Итого"
    ]
  },
  {
    "id": "js-async-await",
    "name": "Async/await",
    "terms": [
      "Асинхронные функции",
      "Await",
      "Обработка ошибок",
      "Итого"
    ]
  },
  {
    "id": "js-generators",
    "name": "Генераторы",
    "terms": [
      "Функция-генератор",
      "Перебор генераторов",
      "Использование генераторов для перебираемых объектов",
      "Композиция генераторов",
      "yield – дорога в обе стороны",
      "generator.throw",
      "Итого"
    ]
  },
  {
    "id": "js-async-iterators-generators",
    "name": "Асинхронные итераторы и генераторы",
    "terms": [
      "Асинхронные итераторы",
      "Асинхронные генераторы",
      "Асинхронно перебираемые объекты",
      "Пример из реальной практики",
      "Итого"
    ]
  },
  {
    "id": "js-modules-intro",
    "name": "Модули, введение",
    "terms": [
      "Что такое модуль?",
      "Основные возможности модулей",
      "Особенности в браузерах",
      "Инструменты сборки",
      "Итого"
    ]
  },
  {
    "id": "js-import-export",
    "name": "Экспорт и импорт",
    "terms": [
      "Экспорт до объявления",
      "Экспорт отдельно от объявления",
      "Импорт *",
      "Импорт «как»",
      "Экспортировать «как»",
      "Экспорт по умолчанию",
      "Реэкспорт",
      "Итого"
    ]
  },
  {
    "id": "js-modules-dynamic-imports",
    "name": "Динамические импорты",
    "terms": [
      "Выражение import()"
    ]
  },
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

const makeDefinition = (lessonName: string, term: string): string => {
  const found = defineByKeyword.find(([pattern]) => pattern.test(term) || pattern.test(lessonName));
  if (found) {
    return found[1](lessonName, term);
  }

  return 'Раздел урока «' + lessonName + '» объясняет тему «' + term + '»: правило, поведение или приём, который нужен для уверенного использования этой части JavaScript.';
};

const makeHint = (term: string): string | undefined => {
  const found = hintByKeyword.find(([keyword]) => term.includes(keyword));
  return found?.[1];
};

const makeCardId = (lessonId: string, index: number): string => lessonId + '-card-' + String(index + 1).padStart(2, '0');

const makeCards = (lesson: LessonCardSource): Card[] => lesson.terms.map((term, index) => {
  const key = lesson.id + '::' + term;
  const card: Card = {
    id: makeCardId(lesson.id, index),
    term,
    definition: makeDefinition(lesson.name, term),
  };
  const code = codeByLessonAndTerm[key];
  if (code) {
    card.code = code;
  }
  const hint = makeHint(term);
  if (hint) {
    card.hint = hint;
  }
  return card;
});

export const languageAdvancedCards: Record<string, Card[]> = Object.fromEntries(
  lessonCardSources.map((lesson) => [lesson.id, makeCards(lesson)])
);
