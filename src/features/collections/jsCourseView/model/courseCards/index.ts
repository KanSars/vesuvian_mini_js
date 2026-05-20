import { Card } from 'entities/Card/model/types';
import { introCards } from './intro';
import { fundamentalsCards } from './fundamentals';
import { objectsBasicsCards } from './objectsBasics';
import { languageAdvancedCards } from './languageAdvanced';

export const courseCards: Record<string, Card[]> = {
  ...introCards,
  ...fundamentalsCards,
  ...objectsBasicsCards,
  ...languageAdvancedCards,
};
