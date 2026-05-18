export interface Card {
  id: string;
  term: string;
  definition: string;
  code?: string;
  hint?: string;
  imageURL?: string;
}

export interface CollectionWithCards {
  id: string;
  name: string;
  cards: Card[];
}
