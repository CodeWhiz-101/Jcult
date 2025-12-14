'use client';

import Image from "next/image";
import FadeLeft from '@/components/animation/FadeLeft';

export default function CoreValuesSection() {
  const valuesTop = [
    {
      title: "Principled Stewardship",
      text: `We choose the right path every time without exception. Our judgment is grounded in clarity and practical sense while a strong culture of compliance ensures respect for all regulations is paramount. We speak clearly and act decisively to stand accountable for every decision
            we make. We believe that enduring success is built by earning trust and upholding absolute
            integrity in everything we do.`,
    },
    {
      title: "Performance Through Merit",
      text: `We exist to succeed and are obsessed with progress. We strive to think smarter and
            execute better than any competitor by solving the complex problems that others call
            impossible. This pursuit of excellence is sustained by a strict meritocracy where we reward
            the people who deliver real impact. By ensuring that opportunity reflects true effort`
    },
    {
      title: "Collective Intelligence",
      text: `We build teams of remarkable individuals who are fueled by curiosity. Our growth is driven
            by continuous learning where we actively absorb new concepts from one another and from
            influential thinkers across the world. We demand collaboration and thrive on genuine
            support because we know that together we sharpen our advantage and accomplish far
            more than any one person could achieve alone.`,
    },
  ];

  const valuesBottom: any[] = [
  ];

  return (
    <section className="bg-primary text-white py-20 relative overflow-visible">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left image */}
        <FadeLeft>
          <div className="relative w-full h-[320px] md:h-[360px] -mt-32">
          <img
            src="/images/meeting.JPG"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          </div>
        </FadeLeft>

        {/* Right heading */}
        <FadeLeft delay={200}>
          <div className="font-brand ">
          <h2 className="text-section-title leading-tight">
            Led by
          </h2>
          <h3 className="text-section-title leading-tight text-green-300">
            Our Foundational Principles
          </h3>
          </div>
        </FadeLeft>
      </div>

      {/* VALUES GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-12">

        {/* Top row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
          {valuesTop.map((value, i) => (
            <FadeLeft key={i} delay={i * 200}>
              <div className="relative pr-6 border-l-1 border-white/20 pl-4">
                {/* Vertical Divider */}
                
                <h4 className="text-2xl mb-4">{value.title}</h4>
                <p className="text-button leading-relaxed text-white/90">{value.text}</p>
              </div>
            </FadeLeft>
          ))}
        </div>

        {/* Bottom row: 2 columns */}
        {valuesBottom.length > 0 && 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-white/20 pt-10">
          {valuesBottom.map((value, i) => (
            <div 
              key={i}
              className="relative pr-6"
            >
              {/* Vertical Divider */}
              {i === 0 && (
                <div className="absolute top-0 right-0 h-full w-px bg-white/30"></div>
              )}
              <h4 className="font-serif text-2xl mb-4">{value.title}</h4>
              <p className="text-sm leading-relaxed text-white/90">{value.text}</p>
            </div>
          ))}
        </div>}

      </div>
    </section>
  );
}