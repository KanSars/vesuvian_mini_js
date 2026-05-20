import { Card } from 'entities/Card/model/types';
import { introCards } from './intro';
import { fundamentalsCards } from './fundamentals';
import { objectsBasicsCards } from './objectsBasics';
import { dataTypesCards } from './dataTypes';
import { advancedFunctionsCards } from './advancedFunctions';
import { objectPropertiesCards } from './objectProperties';
import { prototypesCards } from './prototypes';
import { classesCards } from './classes';
import { errorHandlingCards } from './errorHandling';
import { asyncCards } from './async';
import { generatorsIteratorsCards } from './generatorsIterators';
import { modulesCards } from './modules';
import { jsMiscCards } from './jsMisc';
import { browserDocumentCards } from './browserDocument';
import { browserEventsCards } from './browserEvents';
import { browserEventDetailsCards } from './browserEventDetails';
import { browserFormsControlsCards } from './browserFormsControls';
import { browserLoadingCards } from './browserLoading';
import { browserMiscCards } from './browserMisc';

// Imports below intentionally mirror the visible sidebar sections from
// courseStructure.ts. Each exported Record is still keyed by lesson
// collection_id; spreading them here builds the lookup used by the UI.
export const courseCards: Record<string, Card[]> = {
  ...introCards,
  ...fundamentalsCards,
  ...objectsBasicsCards,
  ...dataTypesCards,
  ...advancedFunctionsCards,
  ...objectPropertiesCards,
  ...prototypesCards,
  ...classesCards,
  ...errorHandlingCards,
  ...asyncCards,
  ...generatorsIteratorsCards,
  ...modulesCards,
  ...jsMiscCards,
  ...browserDocumentCards,
  ...browserEventsCards,
  ...browserEventDetailsCards,
  ...browserFormsControlsCards,
  ...browserLoadingCards,
  ...browserMiscCards,
};
