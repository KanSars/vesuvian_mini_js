import { Collection } from './types';

export const mockCollections: Collection[] = [
  {
    collection_id: '1',
    name: 'Alphabet Collection',
    created_at: '2023-10-01T10:00:00Z',
    tags: [
      { id: 't1', name: 'Education' },
      { id: 't2', name: 'Kids' }
    ]
  },
  {
    collection_id: '2',
    name: 'Animals of Africa',
    created_at: '2023-11-15T12:30:00Z',
    tags: [
      { id: 't3', name: 'Nature' },
      { id: 't4', name: 'Wild' }
    ]
  },
  {
    collection_id: '3',
    name: 'Basic Math',
    created_at: '2023-12-05T09:15:00Z',
    tags: [
      { id: 't5', name: 'Math' },
      { id: 't6', name: 'School' }
    ]
  },
  {
    collection_id: '4',
    name: 'Birds of Europe',
    created_at: '2023-11-20T14:00:00Z',
    tags: [
      { id: 't7', name: 'Nature' },
      { id: 't8', name: 'Birds' }
    ]
  }
];
