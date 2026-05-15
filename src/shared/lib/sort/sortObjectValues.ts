export function sortObjectValues<T extends { name: string; created_at: string }>(
  obj: Record<string, T[]>,
  descending = false,
  sortBy: 'name' | 'created_at' | null = null
): Record<string, T[]> {
  const sortedObj: Record<string, T[]> = {};
  
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      sortedObj[key] = [...obj[key]].sort((a, b) => {
        if (sortBy === 'name') {
          return descending 
            ? b.name.localeCompare(a.name) 
            : a.name.localeCompare(b.name);
        } else if (sortBy === 'created_at') {
          const dateA = new Date(a.created_at).getTime();
          const dateB = new Date(b.created_at).getTime();
          return descending ? dateB - dateA : dateA - dateB;
        }
        return 0;
      });
    }
  }
  
  return sortedObj;
}
