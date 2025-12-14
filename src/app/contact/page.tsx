'use client';

import FadeUp from '@/components/animation/FadeUp';
import FadeLeft from '@/components/animation/FadeLeft';

export default function Contact() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-24">
        <section className="py-20">
          <div className="container-responsive">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

              {/* LEFT — INFORMATION */}
              <FadeUp>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                    Get in Touch
                  </h1>

                  <p className="text-lg text-main opacity-75 max-w-xl leading-relaxed mb-10">
                    We'd love to hear from you. Reach out to us for inquiries,
                    partnerships, or career opportunities.
                  </p>

                  <div className="space-y-6 mb-14">
                    <p className="text-main">
                      jculttrader.inquiry@gmail.com
                    </p>

                    <p className="text-main leading-relaxed">
                      DSO-IFZA, IFZA Properties<br />
                      Dubai Silicon Oasis<br />
                      Dubai, Dubayy (AE-DU)<br />
                      UAE
                    </p>

                    <a
                      href="/career"
                      className="inline-block text-primary hover:text-gold transition"
                    >
                      View Open Positions
                    </a>
                  </div>

                  {/* SUPPORT COLUMNS */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
                    <div>
                      <h3 className="font-medium text-main mb-3">
                        Customer Support
                      </h3>
                      <p className="text-sm text-grey leading-relaxed">
                        Our support team is available around the clock to address
                        any concerns or queries you may have.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-main mb-3">
                        Feedback and Suggestions
                      </h3>
                      <p className="text-sm text-grey leading-relaxed">
                        We value your feedback and are continuously working to
                        improve our services.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-main mb-3">
                        Media Inquiries
                      </h3>
                      <p className="text-sm text-grey leading-relaxed">
                        For media-related questions or press inquiries, please
                        reach out to us directly.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* RIGHT — FORM */}
              <FadeLeft delay={200}>
                <div
                  className="border border-grey/30 p-10"
                  style={{
                   background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)'
                  }}
                     >

                  <h2 className="text-2xl text-primary mb-2">
                    Send us a message
                  </h2>

                  <p className="text-sm text-grey mb-8">
                    You can reach us anytime
                  </p>

                  <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        className="px-4 py-3 border border-grey/40 bg-white outline-none focus:border-primary transition"
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        className="px-4 py-3 border border-grey/40 bg-white outline-none focus:border-primary transition"
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 border border-grey/40 bg-white outline-none focus:border-primary transition"
                    />

                    <textarea
                      rows={4}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 border border-grey/40 bg-white outline-none resize-none focus:border-primary transition"
                    />

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 transition hover:opacity-90"
                    >
                      Send Message
                    </button>

                    <p className="text-xs text-grey text-center">
                      By contacting us, you agree to our{' '}
                      <a href="#" className="underline text-main">
                        Terms of service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="underline text-main">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </div>
              </FadeLeft>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
