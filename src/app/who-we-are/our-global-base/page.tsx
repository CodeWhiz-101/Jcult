'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import FadeUp from '@/components/animation/FadeUp';
import FadeLeft from '@/components/animation/FadeLeft';
import ScaleIn from '@/components/animation/ScaleIn';
import PageBreadcrumb from '@/components/ui/PageBreadcrumb';

const OfficeMap = dynamic(() => import('@/components/map/OfficeMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 rounded-lg flex items-center justify-center">
      Loading map...
    </div>
  ),
});

export default function OfficeLocations() {
  const locations = [
    { name: 'New York', lat: 40.7128, lng: -74.006, address: '123 Wall Street, New York, NY 10005' },
    { name: 'London', lat: 51.5074, lng: -0.1278, address: '456 Canary Wharf, London E14 5AB, UK' },
    { name: 'Tokyo', lat: 35.6762, lng: 139.6503, address: '789 Shibuya, Tokyo 150-0002, Japan' },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198, address: '321 Marina Bay, Singapore 018956' },
  ];

  return (
    <div className="min-h-screen w-full bg-main">
      <main className="pt-20">

        {/* ================= HERO ================= */}
        <section className="relative overflow-visible mb-12 md:mb-20">
          <FadeUp>
            <div className="bg-primary ml-7 md:ml-10 lg:ml-12 xl:ml-14">
              <div className="container-responsive">
                <div className="
  min-h-[60vh]
  md:min-h-[70vh]
  flex
  flex-col
  items-start
  pt-28
  sm:pt-32
  md:pt-36
  lg:pt-40
">


                  {/* Breadcrumb */}
                  <PageBreadcrumb
                    items={[
                      { label: 'Who We Are', href: '/who-we-are' },
                      { label: 'Our Global Base', href: '/who-we-are/our-global-base' },
                    ]}
                  />

                  {/* Title */}
                  <FadeLeft>
                    <h1 className="font-brand text-section-title text-white">
                      Our Global Base
                    </h1>
                  </FadeLeft>

                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="bg-tertiary py-8 md:py-16 -mt-12 md:-mt-20 lg:-mt-28">
          <div className="container-responsive pt-16 md:pt-24 lg:pt-32">
            <div className="flex flex-col md:flex-row items-start">

              <div className="flex-1 mb-6 md:mb-0">
                <FadeLeft>
                  <h2 className="text-section-title font-brand text-primary">
                    Explore Our Headquarters
                  </h2>
                </FadeLeft>
              </div>

              <div className="flex-1 md:pl-16">
                <FadeLeft delay={200}>
                  <p className="text-section-content color-grey leading-[28px]">
                    Our firm is rooted in a city defined by opportunity, culture, and momentum,
                    making it an outstanding place to build a career.
                  </p>
                </FadeLeft>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MAP ================= */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <ScaleIn>
              <OfficeMap locations={locations} />
            </ScaleIn>
          </div>
        </section>

        {/* ================= ADDRESS ================= */}
        <section className="py-8 md:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">

              <div className="flex-1 mb-6 md:mb-0">
                <FadeLeft>
                  <h2 className="text-section-title font-brand text-primary">
                    Headquarters Presence
                  </h2>
                </FadeLeft>
              </div>

              <div className="flex-1 md:pl-16">
                <FadeLeft delay={200}>
                  <p className="text-section-content color-grey mb-2">
                    United Arab Emirates
                  </p>
                  <p className="text-section-content color-grey mb-2">
                    Dubai
                  </p>
                  <p className="text-section-content color-grey mb-2 leading-[28px]">
                    DSO-IFZA, IFZA Properties <br />
                    Dubai Silicon Oasis <br />
                    Dubai, Dubayy (AE-DU) <br />
                    UAE
                  </p>
                  <p className="text-section-content color-grey">
                    jculttrader.inquiry@gmail.com
                  </p>
                </FadeLeft>
              </div>

            </div>
          </div>
        </section>

        {/* ================= IMAGE ================= */}
        <section className="py-6 md:py-8 lg:py-16 bg-white">
          <div className="container-responsive">
            <ScaleIn>
              <img
                src="/images/building.JPG"
                alt="Our global offices"
                className="w-full h-48 md:h-64 lg:h-96 object-cover"
              />
            </ScaleIn>
          </div>
        </section>

      </main>
    </div>
  );
}
