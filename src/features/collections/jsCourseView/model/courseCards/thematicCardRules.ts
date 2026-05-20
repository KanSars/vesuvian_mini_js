import { LessonCardSource, createSectionCards } from './createSectionCards';

const codeByLessonAndTerm: Record<string, string> = {
  "popup-windows::Полный синтаксис window.open": "window.open(url, name, params);",
  "arraybuffer-binary-arrays::Методы TypedArray": "typedArray.set(arrayLike, offset);\ntypedArray.subarray(begin, end);",
  "file::FileReader": "const reader = new FileReader();\nreader.onload = () => console.log(reader.result);\nreader.readAsText(file);",
  "fetch::Fetch": "const response = await fetch(url);\nconst result = await response.json();",
  "formdata::Методы объекта FormData": "const formData = new FormData(form);\nformData.append('name', 'value');\nformData.get('name');",
  "fetch-crossorigin::Пример: PATCH": "await fetch(url, {\n  method: 'PATCH',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify(data),\n});",
  "fetch-api::Запрос с настройками": "await fetch(url, {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify(data),\n});",
  "url::Создание URL": "const url = new URL('/path', 'https://example.com');",
  "xmlhttprequest::Типичный код GET-запроса": "const xhr = new XMLHttpRequest();\nxhr.open('GET', url);\nxhr.send();",
  "xmlhttprequest::POST, FormData": "const formData = new FormData(form);\nxhr.open('POST', url);\nxhr.send(formData);",
  "websocket::Простой пример": "const socket = new WebSocket('wss://example.com');\nsocket.onmessage = (event) => console.log(event.data);",
  "server-sent-events::Получение сообщений": "const eventSource = new EventSource('/events');\neventSource.onmessage = (event) => console.log(event.data);",
  "cookie::Чтение из document.cookie": "const cookies = document.cookie;",
  "cookie::Запись в document.cookie": "document.cookie = 'name=value; path=/; max-age=3600';",
  "localstorage::Демо localStorage": "localStorage.setItem('key', 'value');\nconst value = localStorage.getItem('key');\nlocalStorage.removeItem('key');",
  "indexeddb::Открыть базу данных": "const request = indexedDB.open('store', 1);",
  "css-animations::Ключевые кадры": "@keyframes slide {\n  from { transform: translateX(0); }\n  to { transform: translateX(100px); }\n}",
  "js-animation::Использование requestAnimationFrame": "function animate(time) {\n  // обновить кадр\n  requestAnimationFrame(animate);\n}\nrequestAnimationFrame(animate);",
  "custom-elements::Пример": "customElements.define('my-element', class extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = 'Hello';\n  }\n});",
  "shadow-dom::Создание shadow DOM": "const shadow = element.attachShadow({ mode: 'open' });",
  "template-element::Вставка шаблона": "const template = document.getElementById('tmpl');\nelement.append(template.content.cloneNode(true));",
  "regexp-introduction::Регулярные выражения": "const regexp = /pattern/flags;",
  "regexp-introduction::Проверка: regexp.test": "const hasMatch = /love/i.test(str);",
  "regexp-escaping::new RegExp": "const regexp = new RegExp('\\\\d\\\\.\\\\d');",
  "regexp-methods::str.match(regexp)": "str.match(/pattern/g);",
  "regexp-methods::str.matchAll(regexp)": "Array.from(str.matchAll(/pattern/g));",
  "regexp-methods::str.split(regexp|substr, limit)": "str.split(/[,;]\\s*/);",
  "regexp-methods::str.search(regexp)": "str.search(/pattern/);",
  "regexp-methods::str.replace(str|regexp, str|func)": "str.replace(/pattern/g, 'replacement');",
  "regexp-methods::regexp.exec(str)": "regexp.exec(str);",
  "regexp-methods::regexp.test(str)": "regexp.test(str);",
  "font-size-line-height::Синтаксис font: size/height family": "font: 16px/1.5 Arial, sans-serif;"
};

const hintByKeyword: Array<[string, string]> = [
  ['Итого', 'Итоговая карточка собирает правила урока в короткую памятку.'],
  ['Ссылки', 'Справочная карточка: здесь источник указывает дополнительные материалы по теме.'],
  ['Устарев', 'Эта возможность важна в основном при чтении старого кода.'],
  ['Безопас', 'Обращайте внимание на ограничения безопасности браузера.'],
  ['sameSite', 'sameSite помогает ограничить отправку cookie при переходах с других сайтов.'],
];

const defineByKeyword: Array<[RegExp, (lessonName: string, term: string) => string]> = [
  [/^Итого$/, (lessonName) => 'Кратко закрепляет основные правила урока «' + lessonName + '» и показывает, что важно запомнить для практики.'],
  [/window|окн|iframe|postMessage|кликджекинг|clickjacking/i, (_lessonName, term) => 'Объясняет «' + term + '» при работе с окнами и фреймами: как открывать, связывать или защищать разные browsing context.'],
  [/ArrayBuffer|TypedArray|DataView|TextDecoder|TextEncoder|Blob|File|FileReader|base64|бинар/i, (_lessonName, term) => 'Разбирает «' + term + '» для бинарных данных и файлов: как хранить байты, преобразовывать текст, читать файлы или создавать Blob.'],
  [/Fetch|FormData|CORS|XMLHttpRequest|URL|WebSocket|Server Sent|опрос|загрузк|PATCH|POST|Abort|headers|Request|Response/i, (_lessonName, term) => 'Описывает «' + term + '» в сетевых запросах: как отправлять данные, получать ответ, следить за загрузкой или работать с сетевыми API браузера.'],
  [/cookie|localStorage|sessionStorage|IndexedDB|ключ|хранилищ|транзакц|объектное/i, (_lessonName, term) => 'Объясняет «' + term + '» при хранении данных в браузере: где лежат значения, как они читаются и какие ограничения важно учитывать.'],
  [/анимац|Безье|transition|keyframes|requestAnimationFrame|Timing|progress|CSS/i, (_lessonName, term) => 'Сжимает раздел «' + term + '» про анимацию: как описать изменение во времени, управлять кадрами или использовать CSS-переходы.'],
  [/Custom Elements|customElements|Shadow DOM|template|slot|тенев|компонент|composed/i, (_lessonName, term) => 'Разбирает «' + term + '» в веб-компонентах: как инкапсулировать DOM, стили, шаблоны и события внутри пользовательских элементов.'],
  [/regexp|RegExp|флаг|символьн|Юникод|якор|границ|экранир|диапазон|квантификатор|групп|ссылк|альтернац|провер|возврат|match|replace|split|search/i, (_lessonName, term) => 'Объясняет «' + term + '» в регулярных выражениях: как устроен шаблон, что он находит и как применяется в методах строк или RegExp.'],
  [/CSS|display|float|position|центр|font|line-height|white-space|outline|box-sizing|margin|IMG|overflow|height|селектор|спрайт|формат/i, (_lessonName, term) => 'Описывает «' + term + '» из CSS для JavaScript-разработчика: как свойство влияет на layout, размеры, отображение или поддержку интерфейса.'],
  [/Синтаксис|Формат|Создание|Метод|Методы|Конструктор|Пример/i, (lessonName, term) => 'Показывает форму записи «' + term + '» в теме «' + lessonName + '»: какие части конструкции нужны и что демонстрирует пример.'],
];

export const createThematicSectionCards = (lessonCardSources: LessonCardSource[]) => createSectionCards(
  lessonCardSources,
  {
    codeByLessonAndTerm,
    hintByKeyword,
    defineByKeyword,
    fallbackDefinition: (lessonName, term) => 'Раздел урока «' + lessonName + '» объясняет тему «' + term + '»: правило, API или приём, который нужен в тематическом разделе учебника.',
  }
);
