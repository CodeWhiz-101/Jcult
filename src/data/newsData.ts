export interface ContentSection {
  subtitle?: string;
  mediaType?: 'youtube' | 'image' | 'pdf';
  mediaUrl?: string;
  paragraph?: string;
}

export interface NewsArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  source?: string;
  excerpt: string;
  externalLink?: string;
  sections?: ContentSection[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "lorem-ipsum-dolor-sit-amet",
    category: "Press Release",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "Jan 15, 2024",
    source: "Bloomberg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sections: [
      {
        subtitle: "Introduction to Our Vision",
        mediaType: "image",
        mediaUrl: "/images/office.webp",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  },
  // {
  //   id: "sed-do-eiusmod-tempor",
  //   category: "Company News",
  //   title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //   date: "Jan 10, 2024",
  //   excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  //   sections: [
  //     {
  //       subtitle: "Watch Our Latest Announcement",
  //       mediaType: "youtube",
  //       mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //       paragraph: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //     },
  //     {
  //       subtitle: "Key Highlights",
  //       paragraph: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  //     }
  //   ]
  // },
  // {
  //   id: "ut-enim-ad-minim-veniam",
  //   category: "Industry Update",
  //   title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  //   date: "Jan 5, 2024",
  //   source: "Financial Times",
  //   excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   externalLink: "https://www.ft.com"
  // },
  // {
  //   id: "duis-aute-irure-dolor",
  //   category: "Announcement",
  //   title: "Duis aute irure dolor in reprehenderit in voluptate velit",
  //   date: "Dec 28, 2023",
  //   excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   sections: [
  //     {
  //       subtitle: "Download Full Report",
  //       mediaType: "pdf",
  //       mediaUrl: "/documents/report.pdf",
  //       paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  //     }
  //   ]
  // }
];
