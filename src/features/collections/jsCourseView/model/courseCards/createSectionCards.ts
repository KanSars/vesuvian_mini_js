import { Card } from 'entities/Card/model/types';

export interface LessonCardSource {
  id: string;
  name: string;
  terms: string[];
}

interface SectionCardOptions {
  definitionByLessonAndTerm?: Record<string, string>;
  codeByLessonAndTerm?: Record<string, string>;
  hintByTerm?: Record<string, string>;
  hintByKeyword?: Array<[string, string]>;
  defineByKeyword: Array<[RegExp, (lessonName: string, term: string) => string]>;
  fallbackDefinition: (lessonName: string, term: string) => string;
}

const makeCardId = (lessonId: string, index: number): string => (
  lessonId + '-card-' + String(index + 1).padStart(2, '0')
);

const makeDefinition = (lessonName: string, term: string, key: string, options: SectionCardOptions): string => {
  const exactDefinition = options.definitionByLessonAndTerm?.[key];
  if (exactDefinition) {
    return exactDefinition;
  }

  const found = options.defineByKeyword.find(([pattern]) => pattern.test(term) || pattern.test(lessonName));
  if (found) {
    return found[1](lessonName, term);
  }

  return options.fallbackDefinition(lessonName, term);
};

const makeHint = (term: string, options: SectionCardOptions): string | undefined => {
  const exactHint = options.hintByTerm?.[term];
  if (exactHint) {
    return exactHint;
  }

  const keywordHint = options.hintByKeyword?.find(([keyword]) => term.includes(keyword));
  return keywordHint?.[1];
};

export const createSectionCards = (
  lessonCardSources: LessonCardSource[],
  options: SectionCardOptions
): Record<string, Card[]> => Object.fromEntries(
  lessonCardSources.map((lesson) => [
    lesson.id,
    lesson.terms.map((term, index) => {
      const key = lesson.id + '::' + term;
      const card: Card = {
        id: makeCardId(lesson.id, index),
        term,
        definition: makeDefinition(lesson.name, term, key, options),
      };
      const code = options.codeByLessonAndTerm?.[key];
      if (code) {
        card.code = code;
      }
      const hint = makeHint(term, options);
      if (hint) {
        card.hint = hint;
      }
      return card;
    }),
  ])
);
