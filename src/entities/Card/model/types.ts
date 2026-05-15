export interface Card {
  id: string;
  term: string;
  definition: string;
  hint?: string;
  imageURL?: string;
}

export interface CollectionWithCards {
  id: string;
  name: string;
  cards: Card[];
}
