# Course cards organization

These rules describe how files in this directory should be organized when
adding or rewriting course cards.

## File boundaries

1. Files in `courseCards/` should correspond to visible course sections from
   `courseStructure.ts`.
2. One visible sidebar section = one card file, unless the user explicitly asks
   for a different structure.
3. `index.ts` should import section card files in the same order as the
   sections appear in `courseStructure.ts`.
4. Do not create card files based on migration batches, temporary convenience,
   or several adjacent sections grouped together.
5. Shared technical logic may live in helper files, but helper files must not
   hide the mapping between visible UI sections and card files.
6. Before adding a new section, check whether it already has its own card file.
   If it does not, create a file named after the section id or section meaning.

## Current mapping

- `intro.ts` -> `Введение`
- `fundamentals.ts` -> `Основы JavaScript`
- `objectsBasics.ts` -> `Объекты: основы`
- `dataTypes.ts` -> `Типы данных`
- `advancedFunctions.ts` -> `Продвинутая работа с функциями`
- `objectProperties.ts` -> `Свойства объекта, их конфигурация`
- `prototypes.ts` -> `Прототипы, наследование`
- `classes.ts` -> `Классы`
- `errorHandling.ts` -> `Обработка ошибок`
- `async.ts` -> `Промисы, async/await`
- `generatorsIterators.ts` -> `Генераторы, продвинутая итерация`
- `modules.ts` -> `Модули`
- `jsMisc.ts` -> `Разное` under `Язык JavaScript`
- `browserDocument.ts` -> `Документ`
- `browserEvents.ts` -> `Введение в события`
- `browserEventDetails.ts` -> `Интерфейсные события`
- `browserFormsControls.ts` -> `Формы, элементы управления`
- `browserLoading.ts` -> `Загрузка документа и ресурсов`
- `browserMisc.ts` -> `Разное` under `Браузер: документ, события, интерфейсы`

## Helper files

- `createSectionCards.ts` contains shared card construction logic.
- `languageCardRules.ts` contains shared rules for later `Язык JavaScript`
  sections.
- `browserInterfaceCardRules.ts` contains shared rules for browser interface
  sections after `Документ`.
