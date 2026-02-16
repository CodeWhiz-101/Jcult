export default function Disclosure() {
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
              Disclosures
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
                  1. Business Status Disclosure
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    JCULT TRADER is currently in its establishment and development phase.
                  </li>
                  <li>
                    No asset management services are being offered at this time.
                  </li>
                </ul>
              </div>

              {/* 2 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  2. Regulatory Disclosure
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    The Company is not licensed by the Securities and Commodities Authority (SCA),
                    the Dubai Financial Services Authority (DFSA), or any other financial regulatory body.
                  </li>
                  <li>
                    Any future regulated activities will be subject to obtaining appropriate approvals.
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  3. No Custody of Funds
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    JCULT TRADER does not accept, hold, manage, or custody client funds.
                  </li>
                </ul>
              </div>

              {/* 4 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  4. Conflict of Interest Disclosure
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    As the Company is not currently providing financial services,
                    no client conflicts of interest exist at this stage.
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
