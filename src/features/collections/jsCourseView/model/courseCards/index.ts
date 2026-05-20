import { Card } from 'entities/Card/model/types';
import { introCards } from './intro';
import { fundamentalsCards } from './fundamentals';
import { objectsBasicsCards } from './objectsBasics';
import { languageAdvancedCards } from './languageAdvanced';
import { browserDocumentCards } from './browserDocument';
import { browserInterfaceCards } from './browserInterface';

export const courseCards: Record<string, Card[]> = {
  ...introCards,
  ...fundamentalsCards,
  ...objectsBasicsCards,
  ...languageAdvancedCards,
  ...browserDocumentCards,
  ...browserInterfaceCards,
};
