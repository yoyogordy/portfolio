

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000);
}

export const portfolioItems = [
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
 {
   id: generateRandomId(),
   client: "אסם צ׳יפס (השקה)",
   imageSrc: "/shetach.png",
   modalTitle: "אמא צילמה מהשטח",
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
  // Wolt
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/qkd4m95k71anpenj8np0r/.mp4?rlkey=a2k6gbjuoga6euakplvf6xmp9&st=jw0sqash&dl=0",
    thumbnailUrl: "./woltposter4.png",
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/sqqnygftwyyyvfhqoiwbz/wolt_June_13922_Wolt-_Shirt_32s_HD_Jumbo-Media_HD_h264-25mb.mp4?rlkey=4znyr197a22rnnaplyx9tnpos&st=wih698g4&dl=0",
    thumbnailUrl: "./woltposter.png",
    category: 'work' as const
  },

  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/5twur1mw9b6xeds8w09rc/.mp4?rlkey=pvgv0hg5doo3jdpsmqlybyt23&st=2bina116&dl=0",
    thumbnailUrl: "./woltposter5.png",
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/fmac4jouvycjxh9t63jsw/wolt_June_13922_Wolt-_Saruf_33s_HD_Jumbo-Media_HD_h264-25mb.mp4?rlkey=1btexo5ldmmfw10d1j0gaa48z&st=4kmwvf9o&dl=0",
    thumbnailUrl: './woltposter3.png',
    category: 'work' as const
  },

  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/o656vjcopcb5chgq97svw/wolt_June_13922_Wolt-_Perla_53s_HD_Jumbo-Media_HD_h264-25mb.mp4?rlkey=zm38e2fppkdwruw71k2241zo9&st=9bagixp5&dl=0",
    thumbnailUrl: "./woltposter2.png",
    category: 'work' as const
  },
 
  

// max
{
  id: generateRandomId(),
  client: "מקס (הלוואות)",
   videoSrc: "https://youtu.be/Di8lBYerZoI?si=Tc0mXD56oYC_4GJz",
  category: 'work' as const
 },
{
  id: generateRandomId(),
  client: "מקס (הלוואות)",
  videoSrc: "https://youtu.be/KrCT03eJUn8?si=Ems2Vk1ytxYueFrq",
  category: 'work' as const
 },

 {
  id: generateRandomId(),
  client: "מקס (הלוואות)",
  videoSrc: "https://youtu.be/P1ZHKPg7t3Q?si=Dy_BpS7s77Wk2HG2",
  category: 'work' as const
 },
// max digital
 {
  id: generateRandomId(),
  client: "מקס (מהלך משלים)",
  showText: true,
   videoSrc: "https://drive.google.com/file/d/1t7_LEDP6VDKeDZCDRwXqdrWiflCFDHcr/view",
   thumbnailUrl: "/maxthumbnail.png",
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "מקס (מהלך משלים)",
   videoSrc: "https://drive.google.com/file/d/1AoNfWgyROmFPv4b7A0hRUBXCdSKDY5Fx/view",
   thumbnailUrl: "/maxthumbnail2.png",
  category: 'work' as const
},
  // Tidhar
  {
    id: generateRandomId(),
    client: "תדהר",
    videoSrc: "https://youtu.be/pi2wpWCznps?si=0v8T9C_-MG4WWkhS",
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "תדהר",
    videoSrc: "https://www.youtube.com/watch?v=Vo85FDsAHiw",
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
    videoSrc: "https://www.dropbox.com/scl/fi/hs5wzgjco9y88m9k1bevr/2.mp4?rlkey=j4fru8uc6xtiygaop4qeads9j&st=j0wuvky7&dl=0",
    thumbnailUrl: "/bambathumbnail4.png",
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "במבה",
    videoSrc: "https://www.dropbox.com/scl/fi/hcu9zjhz7wmaq5l5ih800/.mp4?rlkey=x2wapstuzfq2kymlbo0xoc7rs&st=n34c3ymb&dl=0",
    thumbnailUrl: "/bambathumbnail.png",
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "במבה",
    videoSrc: "https://www.dropbox.com/scl/fi/rmyr3xdu46vgnnibb856q/bamba_dubim_16x9_jumbo.mp4?rlkey=nl9285f9h7xom5kq279aaypsn&st=wi8dj2cy&dl=0",
    thumbnailUrl: "/bambathumbnail2.png",
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "במבה",
    videoSrc: "https://www.dropbox.com/scl/fi/82u992wmockjel7si3pe0/Osem_Bamba_Hasut_Eurovision_307603_6Sec_1080p_002_HR.MP4?rlkey=rreaqvyrdsh0jyi7gampo8h52&st=fmnhglhr&dl=0",
    thumbnailUrl: "/bambathumbnail3.png",
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
  videoSrc: "https://youtu.be/wEM-KlVs0zc?si=ye27DUzT_lqxqrCf",
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
  client: "מוזיקה וקריאייטיב",
  videoSrc: "https://youtu.be/XdKrQGYy0ug?si=5CDVLGDjaTnhORbA",
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "מוזיקה וקריאייטיב",
  videoSrc: "https://youtu.be/QdZXcGAkMQw?si=vt2FS7tk-nXfbxF1",
  category: 'work' as const
 },
 {
  id: generateRandomId(),
  client: "מוזיקה וקריאייטיב",
  videoSrc: "https://www.instagram.com/reel/Cz5vcdgtO_5/?igsh=emVlOXJvczNpemFs",
  thumbnailUrl: "/insta.png",
  category: 'work' as const
 },
];

export type PortfolioItem = {
  id: number;
  client: string;
  videoSrc?: string; // Optional - for video items
  imageSrc?: string; // Optional - for image items
  isLocal?: boolean;
  description?: string;
  category: 'work' | 'english';
  thumbnailUrl?: string; // Optional custom thumbnail URL
  showText?: boolean;
  modalTitle?: string; // Optional title to display in modal
};

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
