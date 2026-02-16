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
        <section className="pb-16 md:pb-24">
          <div className="container-responsive max-w-4xl">

            <div
              className="space-y-10 text-main"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >

              {/* 3. LEGAL NOTICES */}
              <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-primary">
                3. LEGAL NOTICES
              </h2>

              {/* 3.1 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  3.1 Regulatory Status Notice
                </h3>
                <p className="leading-relaxed text-main/90">
                  JCULT TRADER is incorporated in IFZA Free Zone, Dubai. 
                  The Company is currently in its preliminary development phase 
                  and does not conduct regulated financial services.
                </p>
              </div>

              {/* 3.2 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  3.2 Intellectual Property Notice
                </h3>
                <p className="leading-relaxed text-main/90">
                  All website content, including text, branding, and design elements, 
                  is the property of JCULT TRADER and may not be reproduced 
                  without prior written consent.
                </p>
              </div>

              {/* 3.3 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  3.3 Risk Notice
                </h3>
                <p className="leading-relaxed text-main/90">
                  Financial markets involve high levels of risk and may not be suitable 
                  for all individuals. The Company does not guarantee financial outcomes.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
