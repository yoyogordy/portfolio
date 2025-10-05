
// Portfolio data collection
export const portfolioItems = [
  // TV Category
  {
    id: 1,
    title: "Tnuva, Napoleon Cheese",
    category: "tv",
    description: "Commercial for Tnuva's Napoleon Cheese product.",
    videoId: "L53v9YPPqXY",
    link: "https://www.youtube.com/watch?v=L53v9YPPqXY"
  },
  {
    id: 2,
    title: "Tidhar Group",
    category: "tv",
    description: "Brand commercial for Tidhar Group.",
    videoId: "A1JeO75JH9Y",
    link: "https://www.youtube.com/watch?v=A1JeO75JH9Y"
  },
  {
    id: 3,
    title: "Osem, Bamba",
    category: "tv",
    description: "Commercial for Osem's popular Bamba snack.",
    videoId: "sh2nX7YrrE0",
    link: "https://www.youtube.com/watch?v=sh2nX7YrrE0"
  },
  {
    id: 4,
    title: "Mashbir",
    category: "tv",
    description: "Commercial campaign for Mashbir.",
    videoId: "XdKrQGYy0ug",
    link: "https://www.youtube.com/watch?v=XdKrQGYy0ug"
  },
  {
    id: 5,
    title: "Meyeden",
    category: "tv",
    description: "TV spot for Meyeden.",
    videoId: "e0S5PAEYQIo",
    link: "https://www.youtube.com/watch?v=e0S5PAEYQIo"
  },
  {
    id: 6,
    title: "Osem, Chips",
    category: "tv",
    description: "Commercial for Osem's Chips product line.",
    videoId: "92ebtuB_-sI",
    link: "https://www.youtube.com/watch?v=92ebtuB_-sI"
  },
  {
    id: 7,
    title: "Lync & CO",
    category: "tv",
    description: "TV commercial for Lync & CO.",
    videoId: "V0fq_TuiSwk",
    link: "https://www.youtube.com/watch?v=V0fq_TuiSwk"
  },
  // Digital Category
  {
    id: 8,
    title: "Osem, Bisli",
    category: "digital",
    description: "Digital campaign for Osem's Bisli snacks.",
    videoId: "O_e9hrosCQ0",
    link: "https://www.youtube.com/watch?v=O_e9hrosCQ0&t=630s"
  },
  {
    id: 9,
    title: "Nestle, Fitness",
    category: "digital",
    description: "Instagram reel for Nestle Fitness.",
    videoId: "placeholder",
    isInstagram: true,
    link: "https://www.instagram.com/reel/Cs1d0koxdgo/?igsh=MW9teTN6N2VtcGZpbw%3D%3D"
  },
  {
    id: 10,
    title: "Osem, Bisli Sticks",
    category: "digital",
    description: "TikTok video for Osem's Bisli Sticks.",
    videoId: "placeholder",
    isTikTok: true,
    link: "https://www.tiktok.com/@nirbenilush10/video/7192214204441562370"
  },
  // Music Category
  {
    id: 11,
    title: "Story",
    category: "music",
    description: "Music production for Story.",
    videoId: "placeholder",
    isInstagram: true,
    link: "https://www.instagram.com/reel/Cz5vcdgtO_5/?igsh=emVlOXJvczNpemFs"
  }
];

export type PortfolioItem = typeof portfolioItems[0];
