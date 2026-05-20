import { Card } from 'entities/Card/model/types';

export const objectsBasicsCards: Record<string, Card[]> = {
  'js-objects': [
    {
      id: 'objects-literals-properties',
      term: 'Литералы и свойства',
      definition: 'Объект хранит пары ключ-значение. Его можно создать литералом {}, а свойства добавлять, читать и удалять через имя после точки.',
      code: `const user = {};

user.name = 'John';
user.isAdmin = true;

delete user.name;`,
    },
    {
      id: 'objects-square-brackets',
      term: 'Квадратные скобки',
      definition: 'Квадратные скобки позволяют обращаться к свойствам с любыми строковыми именами, включая имена с пробелами, и вычислять имя свойства из выражения.',
      code: `const user = {};

user['likes birds'] = true;
alert(user['likes birds']);`,
    },
    {
      id: 'objects-computed-property',
      term: 'Свойство из переменной',
      definition: 'При создании объекта имя свойства можно взять из переменной, если записать его в квадратных скобках.',
      code: `const fruit = 'apple';

const bag = {
  [fruit]: 5,
};`,
    },
    {
      id: 'objects-property-name-limits',
      term: 'Ограничения на имена свойств',
      definition: 'Имена свойств могут быть почти любыми строками или символами. Остальные типы ключей автоматически преобразуются к строке.',
      hint: 'Например, ключ 0 становится строкой "0".',
    },
    {
      id: 'objects-in-operator',
      term: 'Проверка существования свойства, оператор «in»',
      definition: 'Оператор in проверяет, есть ли свойство в объекте. Он полезен, когда значение свойства может быть undefined.',
      code: `'key' in object;`,
      hint: 'Слева от in обычно указывают имя свойства строкой.',
    },
    {
      id: 'objects-for-in',
      term: 'Цикл "for..in"',
      definition: 'Цикл for..in перебирает ключи объекта. Внутри цикла по ключу можно получить соответствующее значение.',
      code: `for (const key in object) {
  alert(key);
  alert(object[key]);
}`,
    },
    {
      id: 'objects-summary',
      term: 'Итого',
      definition: 'Объекты хранят именованные свойства. Для доступа используют точку или квадратные скобки, существование проверяют через in, а ключи перебирают через for..in.',
    },
  ],
  'js-object-copy': [
    {
      id: 'object-copy-reference-comparison',
      term: 'Сравнение по ссылке',
      definition: 'Объекты присваиваются и копируются по ссылке. Две переменные равны только тогда, когда ссылаются на один и тот же объект.',
      code: `const a = {};
const b = a;

alert(a === b); // true`,
    },
    {
      id: 'object-copy-assign',
      term: 'Клонирование и объединение, Object.assign',
      definition: 'Чтобы создать независимую поверхностную копию, можно скопировать свойства в новый объект. Object.assign также объединяет свойства нескольких объектов.',
      code: `const clone = Object.assign({}, user);

Object.assign(user, permissions1, permissions2);`,
      hint: 'Если свойства-объекты вложены глубже, копируются ссылки на них.',
    },
    {
      id: 'object-copy-nested',
      term: 'Вложенное клонирование',
      definition: 'При вложенных объектах поверхностной копии недостаточно: вложенные значения остаются общими ссылками. Для полного клонирования нужна глубокая копия.',
      hint: 'Для глубокого клонирования в источнике упоминается structuredClone.',
    },
    {
      id: 'object-copy-summary',
      term: 'Итого',
      definition: 'Объекты хранятся и сравниваются по ссылке. Поверхностное клонирование копирует верхний уровень свойств, а вложенные объекты требуют глубокого клонирования.',
    },
  ],
  'js-garbage-collection': [
    {
      id: 'garbage-reachability',
      term: 'Достижимость',
      definition: 'Сборка мусора удаляет значения, которые стали недостижимыми. Достижимыми считаются корни и всё, до чего можно добраться по ссылкам от корней.',
      hint: 'Корни включают выполняемую функцию, её локальные переменные, параметры и глобальные переменные.',
    },
    {
      id: 'garbage-simple-example',
      term: 'Простой пример',
      definition: 'Если переменная ссылается на объект, объект достижим. Когда ссылка перезаписана, объект может стать недостижимым и будет удалён сборщиком мусора.',
      code: `let user = { name: 'John' };

user = null;`,
    },
    {
      id: 'garbage-two-references',
      term: 'Две ссылки',
      definition: 'Если на объект есть несколько ссылок, удаление одной ссылки не делает объект недостижимым. Он остаётся в памяти, пока существует хотя бы один путь к нему.',
      code: `let user = { name: 'John' };
let admin = user;

user = null; // объект всё ещё доступен через admin`,
    },
    {
      id: 'garbage-linked-objects',
      term: 'Взаимосвязанные объекты',
      definition: 'Объекты могут ссылаться друг на друга и образовывать граф. Пока весь граф достижим от корней, связанные объекты остаются в памяти.',
    },
    {
      id: 'garbage-unreachable-island',
      term: 'Недостижимый «остров»',
      definition: 'Группа объектов может ссылаться друг на друга, но если от корней до неё нет пути, вся такая группа считается недостижимой и удаляется.',
      hint: 'Взаимные ссылки сами по себе не спасают объекты от сборки мусора.',
    },
    {
      id: 'garbage-internal-algorithms',
      term: 'Внутренние алгоритмы',
      definition: 'Основной подход сборки мусора — mark-and-sweep: достижимые объекты помечаются, а непомеченные удаляются. Движки применяют оптимизации этого процесса.',
      hint: 'Сборка мусора выполняется автоматически, вручную управлять ей обычно нельзя.',
    },
    {
      id: 'garbage-summary',
      term: 'Итого',
      definition: 'Память очищается автоматически. Объект жив, пока он достижим от корней; недостижимые объекты и группы объектов удаляются сборщиком мусора.',
    },
  ],
  'js-object-methods': [
    {
      id: 'object-methods-examples',
      term: 'Примеры методов',
      definition: 'Свойство объекта может хранить функцию. Такая функция называется методом и позволяет объекту выполнять действие.',
      code: `const user = {
  name: 'John',
  sayHi() {
    alert('Привет');
  },
};`,
    },
    {
      id: 'object-methods-this',
      term: 'Ключевое слово «this» в методах',
      definition: 'Внутри метода this обычно ссылается на объект перед точкой при вызове метода. Так метод получает доступ к свойствам своего объекта.',
      code: `const user = {
  name: 'John',
  sayHi() {
    alert(this.name);
  },
};`,
    },
    {
      id: 'object-methods-this-free',
      term: '«this» не является фиксированным',
      definition: 'Значение this определяется во время вызова, а не при создании функции. Одна и та же функция может получить разный this в разных вызовах.',
      hint: 'Вызов obj.method() передаёт obj как this; обычный вызов функции даёт другое значение this.',
    },
    {
      id: 'object-methods-arrow-this',
      term: 'У стрелочных функций нет «this»',
      definition: 'Стрелочные функции не имеют собственного this. Если обратиться к this внутри стрелочной функции, оно берётся из внешнего окружения.',
      hint: 'Поэтому стрелочные функции не подходят как методы, которым нужен this текущего объекта.',
    },
    {
      id: 'object-methods-summary',
      term: 'Итого',
      definition: 'Методы — это функции в свойствах объекта. this в методе определяется способом вызова, а стрелочные функции собственного this не имеют.',
    },
  ],
  'js-constructor-new': [
    {
      id: 'constructor-function',
      term: 'Функция-конструктор',
      definition: 'Функции-конструкторы вызывают с new, чтобы создавать однотипные объекты. По соглашению их имена начинаются с заглавной буквы.',
      code: `function User(name) {
  this.name = name;
  this.isAdmin = false;
}

const user = new User('Jack');`,
      hint: 'new создаёт пустой объект, привязывает его к this и возвращает его.',
    },
    {
      id: 'constructor-new-target',
      term: 'Проверка на вызов в режиме конструктора: new.target',
      definition: 'Внутри функции можно проверить new.target. Если функция вызвана с new, new.target содержит саму функцию; иначе это undefined.',
      code: `function User() {
  if (!new.target) {
    return new User();
  }
}`,
    },
    {
      id: 'constructor-return',
      term: 'Возврат значения из конструктора, return',
      definition: 'Обычно конструктор ничего явно не возвращает. Если он возвращает объект, результатом new станет этот объект; примитивный return игнорируется.',
      hint: 'Лучше не полагаться на return из конструктора без необходимости.',
    },
    {
      id: 'constructor-methods',
      term: 'Создание методов в конструкторе',
      definition: 'Конструктор может добавлять объекту не только данные, но и методы. Такие методы получают доступ к свойствам через this.',
      code: `function User(name) {
  this.name = name;
  this.sayHi = function() {
    alert(this.name);
  };
}`,
    },
    {
      id: 'constructor-summary',
      term: 'Итого',
      definition: 'Конструкторы с new создают однотипные объекты. Внутри конструктора this указывает на новый объект, а new.target позволяет проверить способ вызова.',
    },
  ],
  'js-optional-chaining': [
    {
      id: 'optional-chaining-missing-property',
      term: 'Проблема «несуществующего свойства»',
      definition: 'При обращении к вложенному свойству можно получить ошибку, если промежуточное значение равно null или undefined.',
      code: `user.address.street; // ошибка, если address нет`,
    },
    {
      id: 'optional-chaining-operator',
      term: 'Опциональная цепочка',
      definition: 'Оператор ?. останавливает вычисление и возвращает undefined, если значение слева от него равно null или undefined.',
      code: `const street = user.address?.street;`,
      hint: 'Используйте ?. только там, где отсутствие значения допустимо.',
    },
    {
      id: 'optional-chaining-short-circuit',
      term: 'Сокращённое вычисление',
      definition: 'Если левая часть ?. равна null или undefined, дальнейшая часть выражения не вычисляется. Это касается и выражений в скобках.',
      code: `let x = 0;
user?.[x++]; // x не увеличится, если user нет`,
    },
    {
      id: 'optional-chaining-variants',
      term: 'Другие варианты применения: ?.(), ?.[]',
      definition: 'Опциональная цепочка работает не только со свойствами через точку, но и с вызовом функции и доступом через квадратные скобки.',
      code: `user.method?.();
user?.[key];`,
    },
    {
      id: 'optional-chaining-summary',
      term: 'Итого',
      definition: '?. безопасно обращается к вложенным свойствам, элементам и методам, возвращая undefined при null или undefined слева. Для присваивания слева его использовать нельзя.',
    },
  ],
  'js-symbol': [
    {
      id: 'symbol-symbols',
      term: 'Символы',
      definition: 'Symbol — примитивный тип для уникальных идентификаторов. Даже символы с одинаковым описанием не равны друг другу.',
      code: `const id1 = Symbol('id');
const id2 = Symbol('id');

alert(id1 === id2); // false`,
    },
    {
      id: 'symbol-hidden-properties',
      term: '«Скрытые» свойства',
      definition: 'Символы можно использовать как ключи свойств объекта. Такие свойства не конфликтуют со строковыми ключами и не перебираются обычным for..in.',
      code: `const id = Symbol('id');
const user = {
  name: 'John',
  [id]: 123,
};`,
    },
    {
      id: 'symbol-global',
      term: 'Глобальные символы',
      definition: 'Глобальный реестр символов позволяет получать один и тот же символ по имени через Symbol.for и узнавать имя через Symbol.keyFor.',
      code: `const id = Symbol.for('id');
const sameId = Symbol.for('id');

alert(id === sameId); // true`,
    },
    {
      id: 'symbol-system',
      term: 'Системные символы',
      definition: 'Системные символы используются самим JavaScript для настройки встроенного поведения объектов.',
      hint: 'Например, Symbol.toPrimitive управляет преобразованием объекта в примитив.',
    },
    {
      id: 'symbol-summary',
      term: 'Итого',
      definition: 'Символы создают уникальные ключи свойств. Они помогают избегать конфликтов имён, могут быть глобальными и используются в системных механизмах языка.',
    },
  ],
  'js-object-toprimitive': [
    {
      id: 'object-toprimitive-rules',
      term: 'Правила преобразования',
      definition: 'Объекты автоматически преобразуются в примитивы в математических операциях, сравнении и строковом контексте. Результатом должен быть примитив.',
    },
    {
      id: 'object-toprimitive-hints',
      term: 'Хинты',
      definition: 'При преобразовании объект получает хинт: "string", "number" или "default". Хинт сообщает, какого типа результата ожидает операция.',
      hint: 'Большинство встроенных объектов обрабатывают "default" так же, как "number".',
    },
    {
      id: 'object-toprimitive-symbol',
      term: 'Symbol.toPrimitive',
      definition: 'Метод с ключом Symbol.toPrimitive позволяет объекту самому определить преобразование в примитив для разных хинтов.',
      code: `const user = {
  name: 'John',
  money: 1000,
  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this.name : this.money;
  },
};`,
    },
    {
      id: 'object-toprimitive-tostring-valueof',
      term: 'toString/valueOf',
      definition: 'Если Symbol.toPrimitive нет, JavaScript вызывает toString и valueOf в порядке, зависящем от хинта. Один из них должен вернуть примитив.',
      code: `const user = {
  name: 'John',
  money: 1000,
  toString() {
    return this.name;
  },
  valueOf() {
    return this.money;
  },
};`,
    },
    {
      id: 'object-toprimitive-further-conversions',
      term: 'Дальнейшие преобразования',
      definition: 'После преобразования объекта в примитив операция может выполнить ещё одно преобразование. Например, математическая операция приведёт полученный примитив к числу.',
    },
    {
      id: 'object-toprimitive-summary',
      term: 'Итого',
      definition: 'Для преобразования объекта в примитив используются Symbol.toPrimitive, затем toString/valueOf. Хинт подсказывает ожидаемый тип, но результат обязан быть примитивом.',
    },
  ],
};
