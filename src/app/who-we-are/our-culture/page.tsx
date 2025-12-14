'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoreValuesSection from '@/components/features/CoreValuesSection';
import CultureCarousel from '@/components/features/CultureCarousel';
import CultureTabs from '@/components/features/CultureTabs';
import LuxuryButton from '@/components/ui/LuxuryButton';
import FadeDown from '@/components/animation/FadeDown';
import FadeLeft from '@/components/animation/FadeLeft';
import FadeUp from '@/components/animation/FadeUp';
import ExploreMore from '@/components/features/ExploreMore';

export default function OurCulture() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <section className="relative overflow-visible mb-20">
          <FadeUp>
            <div className="bg-primary">
              <div className="container-responsive">
                <div className="flex flex-col md:flex-row min-h-[80vh]">
                  <div className="flex-1 py-8 md:py-16">
                    <div className="flex flex-col justify-between h-full">
                  <div>
                  <FadeLeft>
                    <h1 className="text-hero-title font-brand  text-white mb-4">
                      Our Culture
                    </h1>
                    </FadeLeft>
                  </div>
                  <div className="mt-auto">
                  <FadeLeft delay={200}>
                  <p className="text-white text-hero-subtitle leading-relaxed max-w-md">
                   Powered by our most impactful ideas, we’re always pushing toward what’s next.
                    </p>
                    </FadeLeft>
                  </div>
                    </div>
                  </div>
                
                  <div className="flex-1 relative min-h-[300px] md:min-h-0 md:mb-[-5rem] lg:mb-[-8rem]">
                    <img 
                      src="/images/group disscusion 2.JPG"
                      alt="Our Culture"
                      className="absolute top-0 right-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>
        
        <section className="py-6 md:py-8 lg:py-16 mb-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <FadeLeft>
                  <h2 className="text-section-title leading-[53px] font-primary  font-brand text-primary">
                    Insight Over Hierarchy
                  </h2>
                </FadeLeft>
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16 space-y-4 md:space-y-6">
                <FadeLeft delay={200}>
                <p className="leading-[28px] opacity-75 text-section-content color-grey">
                  From the moment you arrive, your thinking has influence. You are invited to share your
ideas openly, and your contribution is valued regardless of your position or experience.
                </p>
                <p className="leading-[28px] opacity-75 text-section-content color-grey">
                  We encourage one another to look beyond what is familiar and to search for the next
breakthrough. A wide range of viewpoints strengthens our creativity and sharpens our
position in the industry.
                </p>
                <p className="leading-[28px] opacity-75 text-section-content color-grey">
                  We explore ideas through open dialogue, strengthening them through challenge and
improvement, always aiming to exceed prior achievements. Those who bring energy and
initiative find even greater opportunities ahead, creating a level of growth that few places
can offer.
                </p>
                </FadeLeft>
              </div>
            </div>
          </div>
        </section>
        
        <CoreValuesSection />
        
        {/* <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-5xl  text-primary">
                  Culture in Action
                </h2>
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg text-secondary leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex space-x-3 md:space-x-4">
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-primary border border-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                    <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-primary border border-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                    <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-primary border border-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                    <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.90-5.367 11.90-11.987C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CultureCarousel slides={[
          [
            {
              image: "/images/office.webp",
              title: "Innovation Hub",
              subtitle: "Culture Moments",
              type: "video",
            },
            {
              image: "/images/office-collage.jpg",
              title: "Team Spirit",
              subtitle: "Collaboration",
            },
            {
              image: "/images/office.webp",
              title: "Leadership",
              subtitle: "Our Vision",
            },
            {
              image: "/images/office-collage.jpg",
              title: "Excellence",
              subtitle: "Culture Moments",
              type: "video",
            },
          ],
          [
            {
              image: "/images/office.webp",
              title: "Global Impact",
              subtitle: "Worldwide",
            },
            {
              image: "/images/office-collage.jpg",
              title: "Innovation",
              subtitle: "Technology",
            },
            {
              image: "/images/office.webp",
              title: "Future Ready",
              subtitle: "Culture Moments",
              type: "video",
            },
            {
              image: "/images/office-collage.jpg",
              title: "Success",
              subtitle: "Achievement",
            },
          ],
          [
            {
              image: "/images/office.webp",
              title: "Diversity",
              subtitle: "Inclusion",
            },
            {
              image: "/images/office-collage.jpg",
              title: "Growth",
              subtitle: "Development",
              type: "video",
            },
            {
              image: "/images/office.webp",
              title: "Community",
              subtitle: "Together",
            },
            {
              image: "/images/office-collage.jpg",
              title: "Impact",
              subtitle: "Results",
            },
          ],
          [
            {
              image: "/images/office.webp",
              title: "Vision",
              subtitle: "Future",
            },
            {
              image: "/images/office-collage.jpg",
              title: "Excellence",
              subtitle: "Quality",
              type: "video",
            },
            {
              image: "/images/office.webp",
              title: "Partnership",
              subtitle: "Collaboration",
            },
            {
              image: "/images/office-collage.jpg",
              title: "Achievement",
              subtitle: "Success",
            },
          ],
        ]} />
        
        <section className="flex flex-col md:flex-row items-start px-4 md:px-8 py-8 md:py-16 bg-tertiary">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl  text-primary">
              Join Our Journey
            </h2>
          </div>
          
          <div className="flex-1 md:pl-16">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
        
        <CultureTabs tabs={[
          {
            label: "In-Office Amenities",
            title: "In-Office Amenities",
            image: "/images/office.webp",
            content: [
              {
                heading: "Customized Workspaces",
                text: "Workspaces are equipped with cutting-edge hardware and software to enhance productivity and creativity.",
              },
              {
                heading: "Meals and Snacks",
                text: "We provide breakfast, lunch and dinner to keep you focused on what matters most.",
              },
              {
                heading: "State-of-the-Art Facilities",
                text: "Our offices contain a variety of spaces for fitness, relaxation, and collaboration.",
              },
            ],
          },
          {
            label: "Health & Wellness",
            title: "Health & Wellness",
            image: "/images/office-collage.jpg",
            content: [
              {
                heading: "Fitness Access",
                text: "Free fitness centers with training programs and wellness initiatives to support your health.",
              },
              {
                heading: "Mental Health Support",
                text: "Comprehensive mental health resources and counseling services for all team members.",
              },
            ],
          },
          {
            label: "Family Support",
            title: "Family Support",
            image: "/images/office.webp",
            content: [
              {
                heading: "Childcare Benefits",
                text: "We offer extensive childcare support and family-friendly policies to help you balance work and life.",
              },
              {
                heading: "Parental Leave",
                text: "Generous parental leave policies to support new parents during important life transitions.",
              },
            ],
          },
          {
            label: "Social & Cultural",
            title: "Social & Cultural",
            image: "/images/office-collage.jpg",
            content: [
              {
                heading: "Events & Traditions",
                text: "Regular social events, celebrations, and cultural activities that bring our community together.",
              },
              {
                heading: "Diversity & Inclusion",
                text: "Programs and initiatives that celebrate our diverse backgrounds and foster inclusive collaboration.",
              },
            ],
          },
          {
            label: "Learning & Development",
            title: "Learning & Development",
            image: "/images/office.webp",
            content: [
              {
                heading: "Continuous Education",
                text: "Programs and courses to help employees grow professionally and personally throughout their careers.",
              },
              {
                heading: "Mentorship Programs",
                text: "Structured mentorship opportunities to accelerate learning and career development.",
              },
            ],
          },
        ]} /> */}
        
        <section className="flex flex-col md:flex-row items-start px-4 md:px-8 py-8 md:py-16 container-responsive">
          <div className="flex-1 mb-6 md:mb-0">
            <FadeLeft>
              <h2 className="text-section-title leading-[53px]  font-brand text-primary">
                A Headquarters Built for Collaboration
              </h2>
            </FadeLeft>
          </div>
          
          <div className="flex-1 md:pl-16">
            <FadeLeft delay={200}>
            <p className="leading-[28px] color-grey text-section-content mb-6">
              Our workspace is meticulously designed to foster real-time teamwork, rigorous discussion,
and debate. We have created an environment where physical barriers are removed to
ensure constant intellectual exchange.
            </p>
            <p className="leading-[28px] color-grey text-section-content mb-6">
              Unified in our mission to achieve what no individual could alone.
            </p>
            <a href="/who-we-are/our-global-base">
              <LuxuryButton variant="primary">
               View Our Headquarters
              </LuxuryButton>
            </a>
            </FadeLeft>
          </div>
        </section>
        
        {/* <section className="px-4 md:px-8 py-8 md:py-16 bg-tertiary">
          <div className="flex gap-6">
            <div className="w-3/4">
              <img 
                src="/images/office-collage.jpg"
                alt="Main office view"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="w-1/4 flex flex-col gap-6">
              <img 
                src="/images/office.webp"
                alt="Office space 1"
                className="w-full h-44 object-cover"
              />
              <img 
                src="/images/office-collage.jpg"
                alt="Office space 2"
                className="w-full h-44 object-cover"
              />
            </div>
          </div>
        </section>
        
        <section className="flex flex-col md:flex-row items-center px-4 md:px-8 py-8 md:py-16">
          <div className="flex-1 md:pr-16 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl  text-primary mb-6">
              Experience Excellence
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn-primary px-8 py-4 text-lg">
              Explore Our Offices
            </button>
          </div>
          
          <div className="flex-1">
            <img 
              src="/images/office.webp"
              alt="Office experience"
              className="w-full h-96 object-cover"
            />
          </div>
        </section> */}
        
        {/* <ExploreMore /> */}
        {/* <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <h2 text-section-title leading-[53px] font-primary  text-primary mb-8 md:mb-10 lg:mb-12">
              Explore Our Offices
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="border-l border-secondary pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl  text-main mb-3 md:mb-4">
                  Lorem Ipsum
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary m hover:translate-x-2 transition-transform text-sm md:text-base">
                  Virtual Tour
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img 
                  src="/images/office.webp"
                  alt="Office location"
                  className="w-full h-40 md:h-48 object-cover mt-4 md:mt-6"
                />
              </div>
              
              <div className="border-l border-secondary pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl  text-main mb-3 md:mb-4">
                  Lorem Ipsum
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary m hover:translate-x-2 transition-transform text-sm md:text-base">
                  Learn More
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img 
                  src="/images/office-collage.jpg"
                  alt="Office location"
                  className="w-full h-40 md:h-48 object-cover mt-4 md:mt-6"
                />
              </div>
              
              <div className="border-l border-secondary pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl  text-main mb-3 md:mb-4">
                  Lorem Ipsum
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary m hover:translate-x-2 transition-transform text-sm md:text-base">
                  Contact Us
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img 
                  src="/images/office.webp"
                  alt="Office location"
                  className="w-full h-40 md:h-48 object-cover mt-4 md:mt-6"
                />
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}