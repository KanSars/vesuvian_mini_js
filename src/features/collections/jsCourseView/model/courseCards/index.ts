import { Card } from 'entities/Card/model/types';
import { introCards } from './intro';
import { fundamentalsCards } from './fundamentals';

export const courseCards: Record<string, Card[]> = {
  ...introCards,
  ...fundamentalsCards,
};
