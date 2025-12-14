'use client';

import FadeUp from '@/components/animation/FadeUp';
import ImageReveal from '@/components/animation/ImageReveal';
import LuxuryButton from '@/components/ui/LuxuryButton';
import Hero from '@/components/features/Hero';
import Link from 'next/link';

export default function Career() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <Hero 
          imageSrc="/images/group table conference.JPG"
          title="Career"
          description="Join our team of exceptional professionals and shape the future of finance. We offer challenging opportunities and a culture of excellence."
        />

        {/* Image Left, Title & Para Right */}
        <FadeUp>
          <section className="py-6 md:py-8 lg:py-16">
            <div className="container-responsive">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-1 mb-6 md:mb-0">
                  <ImageReveal 
                    src="/images/group disscusion.JPG"
                    alt="Our workplace"
                    className="w-full h-64 md:h-80 lg:h-96"
                  />
                </div>
                <div className="flex-1 md:pl-8 lg:pl-16">
                  <h2 className="text-section-title leading-tight text-primary mb-4 md:mb-6">
                    Build Your Career With Us
                  </h2>
                  <p className="text-section-content color-grey leading-relaxed">
                    We believe in nurturing talent and providing opportunities for growth. Our team members work on challenging projects that shape the future of financial markets.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Two Columns with Border, Title, Para, Link */}
        <FadeUp delay={100}>
          <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
            <div className="container-responsive">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="border-l-2 border-gold pl-4 md:pl-6">
                  <h3 className="text-section-content leading-tight text-primary mb-4">
                    Internship
                  </h3>
                  <p className="text-section-content color-grey leading-relaxed mb-4">
                    Gain hands-on experience and work alongside industry experts. Our internship programs offer real-world projects and mentorship opportunities.
                  </p>
                  <Link href="/career/open-opportunities?experience=Internship" className="text-primary hover:text-gold font-raleway font-semibold hover:underline inline-flex items-center">
                    View Internships
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="border-l-2 border-gold pl-4 md:pl-6">
                  <h3 className="text-section-content leading-tight text-primary mb-4">
                    Full Time
                  </h3>
                  <p className="text-section-content color-grey leading-relaxed mb-4">
                    Join our team of exceptional professionals. We offer challenging roles across trading, technology, research, and operations with competitive benefits.
                  </p>
                  <Link href="/career/open-opportunities?experience=Experienced Professionals,Graduates" className="text-primary hover:text-gold font-raleway font-semibold hover:underline inline-flex items-center">
                    View Full Time Roles
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>
      </main>
    </div>
  );
}