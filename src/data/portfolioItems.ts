

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000);
}

export const portfolioItems = [
  // Wolt
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "/assets/wolt4.mp4",
    isLocal: true,
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "/assets/wolt5.mp4",
    isLocal: true,
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "/assets/wolt.mp4",
    isLocal: true,
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "/assets/wolt2.mp4",
    isLocal: true,
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "/assets/wolt3.mp4",
    isLocal: true,
    category: 'work' as const
  },
 
  
  // Bamba
  {
    id: generateRandomId(),
    client: "במבה",
    videoSrc: "https://www.youtube.com/watch?v=sh2nX7YrrE0",
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "במבה",
    videoSrc: "/assets/bamba.mp4",
    isLocal: true,
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "במבה",
    videoSrc: "/assets/bamba2.mp4",
    isLocal: true,
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "במבה",
    videoSrc: "/assets/bamba3.mp4",
    isLocal: true,
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "במבה",
    videoSrc: "/assets/bamba4.mp4",
    isLocal: true,
    category: 'work' as const
  },
  // Tidhar
  {
    id: generateRandomId(),
    client: "תדהר",
    videoSrc: "/assets/tidhar.mp4",
    isLocal: true,
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "תדהר",
    videoSrc: "https://www.youtube.com/watch?v=Vo85FDsAHiw",
    category: 'work' as const
  },
// oshem chips
{
 id: generateRandomId(),
 client: "אסם צ׳יפס (השקה)",
 videoSrc: "https://youtu.be/_jm3A3wJi6M?si=mldWpZQkOyjvS0-d",
 category: 'work' as const
},
{
 id: generateRandomId(),
 client: "אסם צ׳יפס (השקה)",
 videoSrc: "https://youtu.be/Kr7ULh_KlHc?si=bGxaOx9__j1G_A6k",
 category: 'work' as const
},
{
 id: generateRandomId(),
 client: "אסם צ׳יפס (השקה)",
 videoSrc: "https://youtu.be/92ebtuB_-sI?si=mrlIS-O_ok31EFAs",
 category: 'work' as const
},
{
 id: generateRandomId(),
 client: "אסם צ׳יפס (השקה)",
 videoSrc: "https://youtu.be/pexrj8UMq7w?si=04HwuKVnSrNYPeS5",
 category: 'work' as const
},
{
 id: generateRandomId(),
 client: "אסם צ׳יפס (השקה)",
 videoSrc: "https://youtu.be/CMBvPJ8fsp0?si=-hUmOXB8gyIVWzMA",
 category: 'work' as const
},
// max
{
  id: generateRandomId(),
  client: "מקס",
   videoSrc: "/assets/maxCamp2.mp4",
  isLocal: true,
  category: 'work' as const
 },
{
  id: generateRandomId(),
  client: "מקס",
   videoSrc: "/assets/maxCamp.mp4",
  isLocal: true,
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "מקס",
  videoSrc: "https://youtu.be/P1ZHKPg7t3Q?si=Dy_BpS7s77Wk2HG2",
  category: 'work' as const
 },
// max digital
{
  id: generateRandomId(),
  client: "מקס (מהלך משלים)",
   videoSrc: "/assets/maxDigital.mp4",
  isLocal: true,
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "מקס (מהלך משלים)",
   videoSrc: "/assets/maxDigital2.mp4",
  isLocal: true,
  category: 'work' as const
},
// teperberg
{
  id: generateRandomId(),
  client: "יקב טפרברג",
  videoSrc: "https://youtu.be/Sw3CPfdwbZg?si=YyMjub4A79RVzBUb",
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "יקב טפרברג",
  videoSrc: "https://youtu.be/toG3MNfQzUk?si=QsNp4GaJ67v0mDfN",
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "יקב טפרברג",
  videoSrc: "https://youtu.be/8JpprOJ8-io?si=C9Ys1bN50zIcIcWC",
  category: 'work' as const
 },
 // napoleon
 {
  id: generateRandomId(),
  client: "גבינת נפוליאון",
  videoSrc: "https://youtu.be/L53v9YPPqXY?si=lhAnNo6No2xUm29m",
  category: 'work' as const
 }, 
 {
  id: generateRandomId(),
  client: "גבינת נפוליאון",
  videoSrc: "https://youtu.be/VrHYCqNnDyk?si=pT9I2oRQpo9dxO-X",
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "גבינת נפוליאון",
  videoSrc: "https://youtu.be/O-RKwE0DOxc?si=5LxzOsaewdnCxwIi",
  category: 'work' as const
 },
 
//rest
{
  id: generateRandomId(),
  client: "עוד סרטים",
   videoSrc: "/assets/stuchim.mp4",
  isLocal: true,
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "עוד סרטים",
  videoSrc: "https://youtu.be/V0fq_TuiSwk?si=irDqkjX0edz8U-_V",
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "עוד סרטים",
  videoSrc: "https://youtu.be/QOmAdJONOsI?si=4qJAgt-LsVv7xGS9",
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "עוד סרטים",
  videoSrc: "https://youtu.be/e0S5PAEYQIo?si=tB0PoY1xRu7akh93",
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "עוד סרטים",
  videoSrc: "https://youtu.be/pILrP1j2G7g?si=WfgyNu4HhyvO383L",
  category: 'work' as const
 },
 // music
 {
  id: generateRandomId(),
  client: "",
  videoSrc: "https://youtu.be/XdKrQGYy0ug?si=5CDVLGDjaTnhORbA",
  category: 'music-creative' as const
 },
 {
  id: generateRandomId(),
  client: "",
  videoSrc: "https://youtu.be/QdZXcGAkMQw?si=vt2FS7tk-nXfbxF1",
  category: 'music-creative' as const
 },
 {
  id: generateRandomId(),
  client: "",
  videoSrc: "https://www.instagram.com/reel/Cz5vcdgtO_5/?igsh=emVlOXJvczNpemFs",
  category: 'music-creative' as const
 },
];

export type PortfolioItem = {
  id: number;
  client: string;
  videoSrc: string;
  isLocal?: boolean;
  description?: string;
  category: 'work' | 'music-creative' | 'english';
};

// Category labels in Hebrew
export const categoryLabels: Record<PortfolioItem['category'], string> = {
  'work': 'עבודות',
  'music-creative': 'מוזיקה וקריאייטיב',
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
