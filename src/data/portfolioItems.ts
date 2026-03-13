import portfolioData from './portfolioData.json';

export type PortfolioItem = {
  id: number;
  client: string;
  videoSrc?: string;
  imageSrc?: string;
  isLocal?: boolean;
  description?: string;
  category: 'work' | 'english';
  thumbnailUrl?: string;
  showText?: boolean;
  modalTitle?: string;
};

export type ClientGroup = {
  name: string;
  category: 'work' | 'english';
  items: Omit<PortfolioItem, 'id' | 'client' | 'category'>[];
};

export type PortfolioData = {
  clientGroups: ClientGroup[];
};

// Flatten grouped JSON into the flat PortfolioItem[] array that components expect
let nextId = 1;
export const portfolioItems: PortfolioItem[] = portfolioData.clientGroups.flatMap(
  (group) =>
    group.items.map((item) => ({
      id: nextId++,
      client: group.name,
      category: group.category as PortfolioItem['category'],
      ...item,
    }))
);

// Category labels in Hebrew
export const categoryLabels: Record<PortfolioItem['category'], string> = {
  'work': 'עבודות',
  'english': 'באנגלית כי אני אינגליש ספיקר'
};

// Get items by category
export const getItemsByCategory = (category: PortfolioItem['category']) => {
  return portfolioItems.filter(item => item.category === category);
};

// Group items by client within a category
export const getItemsByClientInCategory = (category: PortfolioItem['category']) => {
  const categoryItems = getItemsByCategory(category);
  const grouped: Record<string, PortfolioItem[]> = {};

  categoryItems.forEach(item => {
    if (!grouped[item.client]) {
      grouped[item.client] = [];
    }
    grouped[item.client].push(item);
  });

  return grouped;
};

// Group items by client (all items)
export const getItemsByClient = () => {
  const grouped: Record<string, typeof portfolioItems> = {};

  portfolioItems.forEach(item => {
    if (!grouped[item.client]) {
      grouped[item.client] = [];
    }
    grouped[item.client].push(item);
  });

  return grouped;
};
