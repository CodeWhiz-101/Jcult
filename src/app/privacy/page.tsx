export default function Privacy() {
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
              Privacy Policy
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

              {/* Intro Paragraph */}
              <p className="text-[17px] leading-[1.75] text-main/85">
                JCULT TRADER (“Company”, “we”, “our”, “us”) is incorporated in IFZA Free Zone, Dubai,
                United Arab Emirates. This website is currently informational in nature and does not
                collect or process personal data for commercial purposes.
              </p>

              {/* 1 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  1. Information We Do Not Collect
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    The Company does not collect personal information through website forms.
                  </li>
                  <li>
                    We do not provide user accounts.
                  </li>
                  <li>
                    We do not process payments through the website.
                  </li>
                  <li>
                    We do not manage or custody client funds via this website.
                  </li>
                </ul>
              </div>

              {/* 2 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  2. Automatically Collected Information
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    Basic technical information such as IP address and browser type.
                  </li>
                  <li>
                    Device information and access timestamps.
                  </li>
                  <li>
                    Data automatically collected by hosting providers solely for security
                    and operational functionality.
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  3. Cookies
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    Cookies used are strictly for website performance and functionality.
                  </li>
                  <li>
                    No profiling or marketing tracking is conducted.
                  </li>
                </ul>
              </div>

              {/* 4 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  4. Future Updates
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    If JCULT TRADER begins collecting personal information in the future,
                    this Privacy Policy will be updated accordingly.
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
