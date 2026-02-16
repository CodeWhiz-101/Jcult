export default function Notices() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">

        {/* HERO */}
        <section className="bg-primary py-16 md:py-24 mb-16">
          <div className="container-responsive">
            <h1
              className="text-4xl md:text-5xl text-white"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Legal Notices
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="pb-20 md:pb-28">
          <div className="container-responsive max-w-4xl">

            <div
              className="space-y-12 text-main"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >

              {/* 1 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  1. Regulatory Status Notice
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    JCULT TRADER is incorporated in IFZA Free Zone, Dubai.
                  </li>
                  <li>
                    The Company is currently in its preliminary development phase.
                  </li>
                  <li>
                    The Company does not conduct regulated financial services.
                  </li>
                </ul>
              </div>

              {/* 2 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  2. Intellectual Property Notice
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    All website content, including text, branding, and design elements,
                    is the property of JCULT TRADER.
                  </li>
                  <li>
                    Content may not be reproduced without prior written consent.
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  3. Risk Notice
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    Financial markets involve high levels of risk.
                  </li>
                  <li>
                    Such activities may not be suitable for all individuals.
                  </li>
                  <li>
                    The Company does not guarantee financial outcomes.
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
