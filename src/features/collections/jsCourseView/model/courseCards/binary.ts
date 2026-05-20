import { LessonCardSource } from './createSectionCards';
import { createThematicSectionCards } from './thematicCardRules';

// Covers the visible "Бинарные данные и файлы" section under "Тематические разделы".
const lessonCardSources: LessonCardSource[] = [
  {
    "id": "arraybuffer-binary-arrays",
    "name": "ArrayBuffer, бинарные массивы",
    "terms": [
      "TypedArray",
      "Методы TypedArray",
      "DataView",
      "Итого"
    ]
  },
  {
    "id": "text-decoder",
    "name": "TextDecoder и TextEncoder",
    "terms": [
      "TextEncoder"
    ]
  },
  {
    "id": "blob",
    "name": "Blob",
    "terms": [
      "Blob как URL",
      "Blob to base64",
      "Изображение в Blob",
      "Из Blob в ArrayBuffer",
      "Итого"
    ]
  },
  {
    "id": "file",
    "name": "File и FileReader",
    "terms": [
      "FileReader",
      "Итого"
    ]
  }
];

export const binaryCards = createThematicSectionCards(lessonCardSources);
