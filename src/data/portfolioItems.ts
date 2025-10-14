

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000);
}

export const portfolioItems = [
  // Wolt
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/qkd4m95k71anpenj8np0r/.mp4?rlkey=a2k6gbjuoga6euakplvf6xmp9&st=jw0sqash&dl=0",
    thumbnailUrl: "https://ucacb6d3eea646ee1ac97fe718af.previews.dropboxusercontent.com/p/thumb/ACz58vwig5y6QtyIIjRNn7ZTTKrSLJSlD7qYLzlVGs6_kuWLeHgBor9ftt53tY4MowK_MXOGtlLsN6VJDbHt7lh5aUWQyuCWdrF4Iesm7kf902qdP7uvTXZQRq7qHmR7_Qk_0FpNeX1X64v-9tB0UEp8pFPP3akX17Y0OevYr6u6bau0sRVdLRSFo_OQpTXl8CjlS1-3kLkOfH93JH_XPDB8tMX62NOyVOl0q3tPDj0wmk0rrLKFVpxDkNO8SM6khqVY8WZvucsmXCNc8xmv4YVhiBMJEgPLRFaO52jOvmYrHwRD3uQlSRXsB27viRc5nWoAVJs3wK-OaGFXwXICCU7LKomBcXWm6BOFh_hE96PXUWdSDeJ-5wxK-q4ayT4J2Upg1WfEUYMz9fNA3DLW0pgT2EFeLTF9yJPF9VimLduOqb7TXVq-B6DL6bGlKvdZas0eYdNz_q0tsVIEliH757h9KvVgpCh_riRVQ8l1plzpibKX4DlS1i7vfMJ3VfORwyaM7XShrLQ89G70HjCfsvfS2YPcIEmrfDj2QdnTjbbhZnVgPYqcqYVZ5o8EHU8zZ40y0ecp0htcnOKzrlyqS8Mahz1RbxLGoLpdx7YyAHdFB1VShqiHu6Ie0uPV6uADyU10NglayaG2fxie5K3le-LqzO6S2E5_uCksl1a-274MX0aJTOyLQtfvt7atN4HxZsHYBWJ9lSMXYxASwgZ1-rmJq-2roD6CzZtFdF0rHsWSCsIwlu8O1Hqdbs5qsgkBUWDhljpxdmAlxGafh5uGEFFZ4sl2itSsF6vcM0N43gd8PpoZDczV04Q7eFJeSRguROd-_CSAase90HIp7O8ynblviHSM16FgqXs9BQdU-65ysH4ew-fk4eSDW4-CnneeEoRZx91wPx1WPArf4tC-3Mayd_UjWGFLJ1KHhaYWGC5b_NxjvhPuZeKV5covRpJI5aEzpvWUsHzSfh3xBuQCLPd-R7AWIqoL1PUMRdzNs73q6K2NBixojOshtgGMp5BwBfb5rHL6MkRR9lP2Tsuotbug02K6Mlc4EXEDOdCNUt0L6xUqc4ZOMWOcdcZdvvKVmRs8YAzChNDandiuHZWtGlP9d0iqSY-48x3YnSIWtIXT1lMtsG00sjFVOfDy9ddsGO0/p.jpeg?size=1024x768&size_mode=2",
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/sqqnygftwyyyvfhqoiwbz/wolt_June_13922_Wolt-_Shirt_32s_HD_Jumbo-Media_HD_h264-25mb.mp4?rlkey=4znyr197a22rnnaplyx9tnpos&st=wih698g4&dl=0",
    thumbnailUrl: "https://uc380655889ab512f36416febb26.previews.dropboxusercontent.com/p/thumb/ACzlKlDfnFLIvrLjpHiL8EBQOqbcq_XsRbQ8I41x_HNSsvHZ1zKSy-Hlqtz2RnvqXxYTrhbonRvRutvdEaEfk5XznnjuRUoFOxk-pSHsvWZbMQ97mWp853i9zspvEFrkYC7dc7XLhGbkyrzBoWZMLS9geovHHQBPwfCBUrbYPx8mM3mpUtJFSQtPR4QPLjEW5ZBOI65l9Fleq6f9KbW_-Mlxuu9T37SJUqBHR-I4yPeG19TUPV04_gb5rr8EznZEl_Nzg-TpRdspBBG_shQI5pvOE9eRmnmS6IPKe-8FDk6CIg/p.jpeg?size=480x320&size_mode=2",
    category: 'work' as const
  },

  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/5twur1mw9b6xeds8w09rc/.mp4?rlkey=pvgv0hg5doo3jdpsmqlybyt23&st=2bina116&dl=0",
    thumbnailUrl: "https://uc9623e056925088e1190fe9318b.previews.dropboxusercontent.com/p/thumb/ACyZWDMvgY2C0iVd557AB_J7Zur2TPHczFS1N2qfu3DGvRxojZbBy2oPUISEyqf6F7yyFNkWJsZEOweZtEl_f9NoMLhFrZYuaHd8snVGq8RaeJa86O-HQvuTB26JSrmuojj_dxcKKzi-Q607XjBo_RHdcQbVKcudKuSHKuHR3F-FMm3B0s25oOcUoR3kZerx44Afv6mcf2_Hu6pyez3ii-RdW-omplo08D1DRsuY41VF936LGols29Vv1sBm_bfYReMtTIzgGOR4-0pZCUx8Fv5OPOcrxEVNhrNh082JOs7t0w/p.jpeg?size=1024x768&size_mode=2",
    category: 'work' as const
  },
  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/fmac4jouvycjxh9t63jsw/wolt_June_13922_Wolt-_Saruf_33s_HD_Jumbo-Media_HD_h264-25mb.mp4?rlkey=1btexo5ldmmfw10d1j0gaa48z&st=4kmwvf9o&dl=0",
    thumbnailUrl:'https://uc0c1ee58d072bca6df4891e97db.previews.dropboxusercontent.com/p/thumb/ACywVc0yytVuIuTpvYh7WkgxT_IqoNDPedZHBkOB5UmtO4h4gguEkcYjjWswoDf3Hs0wA9bzCUhkR6DOWW1TcEP4TerRUSySKV_ia9ka7b3fT1TYIhk7EfSake4Vxdly__aWn4kDVT4Q9Unt2Vai9Qr4DjOuGlOHPJ1qA5cWC68AYDmauaDgJ8TxKE95EwDxFAS2iLSK2tkEbBiyqm23gYBjgkp488_lPE8rxCsTc8wUKzz9dsW9a24aWfjIkWkE4hun8iePDnmICuIFlYH2n_18DybjoQGZ7D5baycAGf2pld3EeIjHc--bkyiidAIK754/p.jpeg?size=1280x960&size_mode=2',
    category: 'work' as const
  },

  {
    id: generateRandomId(),
    client: "וולט (שפה חדשה)",
    videoSrc: "https://www.dropbox.com/scl/fi/o656vjcopcb5chgq97svw/wolt_June_13922_Wolt-_Perla_53s_HD_Jumbo-Media_HD_h264-25mb.mp4?rlkey=zm38e2fppkdwruw71k2241zo9&st=9bagixp5&dl=0",
    thumbnailUrl: 'https://uc46712e89c888928e2c6377fb2e.previews.dropboxusercontent.com/p/thumb/ACwI_dPD28RiDMLS2XZWqBWk2mqGslHvu6OWd3hKNShd9MgsiW41uuX7TRCCs-B54mGgksYIkFVCjw6I6fSWzOA45E9btzHmI4_jfg8U5yrjGgPybFUz1igh6Zen-yMtXNHj4NKQOXP3-k1xLagXYkwXgwiig4JPZPih8Pl92n1NC4MKQWH4n0lwlJSKOiEjfKEPRU8tRmVOqucrsOu_8WUiyMaDmrZzsia2-6308byNx80oKA7QkMzZAzgUCrWSO-g6o2qgLP3L8J-rtYaM45EfnqVoGO0UsJYO917KBDxcww/p.jpeg?is_prewarmed=true&size=1024x768&size_mode=2',
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
  description: "מהשטח",
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
  thumbnailUrl: "/insta.png",
  category: 'music-creative' as const
 },
];

export type PortfolioItem = {
  id: number;
  client: string;
  videoSrc?: string; // Optional - for video items
  imageSrc?: string; // Optional - for image items
  isLocal?: boolean;
  description?: string;
  category: 'work' | 'music-creative' | 'english';
  thumbnailUrl?: string; // Optional custom thumbnail URL
  showText?: boolean;
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
