'use client';

import FadeLeft from '@/components/animation/FadeLeft';

interface ExploreItem {
  title: string;
  description: string;
  link: string;
  linkText: string;
  image: string;
}

interface ExploreMoreProps {
  items?: ExploreItem[];
}

const defaultItems: ExploreItem[] = [
  {
    title: "Career Opportunities",
    description: "Discover exciting career paths and growth opportunities that align with your passion and expertise in our dynamic environment.",
    link: "/career",
    linkText: "Learn More",
    image: "/images/group table conference.JPG"
  },
  {
    title: "Innovation Labs",
    description: "Step into our cutting-edge innovation labs where breakthrough ideas come to life through collaboration and advanced technology.",
    link: "/what-we-do",
    linkText: "Explore Labs",
    image: "/images/woman working.JPG"
  },
  {
    title: "Global Impact",
    description: "Join our mission to create positive change worldwide through sustainable practices and meaningful community engagement.",
    link: "/who-we-are",
    linkText: "View Impact",
    image: "/images/handshake.JPG"
  }
];

export default function ExploreMore({ items }: ExploreMoreProps) {
  const displayItems = items || defaultItems;
  return (
    <section className="px-4 md:px-8 py-8 md:py-16">
      <FadeLeft>
        <h2 className="text-section-title leading-[53px] font-primary text-primary mb-12">
          Explore More
        </h2>
      </FadeLeft>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayItems.map((item, index) => (
          <FadeLeft key={index} delay={200 + index * 200}>
            <div className="border-l border-gray-300 pl-6 transition-transform hover:-translate-y-2">
              <h3 className="text-xl  mb-4">
                {item.title}
              </h3>
              <p className="color-gray leading-[28px] text-main mb-6">
                {item.description}
              </p>
              <a href={item.link} className="inline-flex items-center text-primary m hover:translate-x-2 transition-transform">
                {item.linkText}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover mt-6"
              />
            </div>
          </FadeLeft>
        ))}
      </div>
    </section>
  );
}
