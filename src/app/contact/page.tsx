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
  <div className="h-full flex flex-col justify-between">

    {/* TOP — TITLE + TEXT */}
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
        Get in Touch
      </h1>

      <p className="text-lg text-main opacity-75 max-w-xl leading-relaxed mb-10">
        We'd love to hear from you. Reach out to us for inquiries,
        partnerships, or career opportunities.
      </p>

      {/* EMAIL + ADDRESS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
        <div>
          <p className="text-xs uppercase tracking-wider text-grey mb-2">
            Email
          </p>
          <p className="text-main">
            jculttrader.inquiry@gmail.com
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-grey mb-2">
            Address
          </p>
          <p className="text-main leading-relaxed">
            DSO-IFZA, IFZA Properties<br />
            Dubai Silicon Oasis<br />
            Dubai, Dubayy (AE-DU)<br />
            UAE
          </p>
        </div>
      </div>
    </div>

    {/* BOTTOM — GREEN BOXES (ALIGNED WITH FORM) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: 'Customer Support',
          text:
            'Our support team is available around the clock to address any concerns or queries you may have.',
        },
        {
          title: 'Feedback And Suggestions',
          text:
            'We value your feedback and are continuously working to improve our services.',
        },
        {
          title: 'Media Inquiries',
          text:
            'For media-related questions or press inquiries, please reach out to us directly.',
        },
      ].map((item, i) => (
       <div
  key={i}
  className="
    aspect-square
    bg-[linear-gradient(180deg,var(--brand-green-1),var(--brand-green-2))]
    p-3
    flex flex-col
    items-center        /* 👈 horizontal center */
    justify-center      /* 👈 vertical center */
    text-center         /* 👈 text center */
    text-white
    transition-transform duration-300
    hover:scale-[1.04]
  "
>
  <h3 className="text-base font-medium mb-3">
    {item.title}
  </h3>

  <p className="text-sm leading-relaxed opacity-90">
    {item.text}
  </p>
</div>

      ))}
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
  className="
    w-full
    py-3
    text-white
    font-medium
    transition-all duration-300
    hover:scale-[1.02]
    hover:shadow-lg
    active:scale-[0.98]
  "
  style={{
    background: 'var(--brand-green-gradient)',
  }}
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
