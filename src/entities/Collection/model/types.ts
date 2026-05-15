export interface Tag {
  id: string;
  name: string;
}

export interface Collection {
  collection_id: string;
  name: string;
  created_at: string;
  tags: Tag[];
}

export interface SortingOption {
  name: string;
  prop: 'name' | 'created_at';
  sortDirection: 'asc' | 'desc';
}

export interface GroupingOption {
  name: string;
  prop: 'name' | 'created_at';
  sortDirection: 'asc' | 'desc';
}
