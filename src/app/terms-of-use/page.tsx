export default function TermsOfUse() {
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
              Terms of Use
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

              {/* Intro */}
              <p className="text-[17px] leading-[1.75] text-main/85">
                These Terms of Use govern access to and use of the JCULT TRADER website.
                By accessing this website, users agree to these terms.
              </p>

              {/* 1 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  1. Informational Purpose Only
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    This website is provided strictly for informational purposes.
                  </li>
                  <li>
                    Nothing contained herein constitutes financial, investment, legal, or tax advice.
                  </li>
                </ul>
              </div>

              {/* 2 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  2. No Regulated Activities
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    JCULT TRADER is not licensed or regulated by any financial regulatory authority within the United Arab Emirates or elsewhere.
                  </li>
                  <li>
                    The Company does not provide investment advisory services, portfolio management, brokerage services, or solicit investments.
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  3. No Client Relationship
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    Accessing or using this website does not create a client relationship.
                  </li>
                  <li>
                    No fiduciary relationship or advisory engagement is established.
                  </li>
                </ul>
              </div>

              {/* 4 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  4. No Offer or Solicitation
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    Nothing on this website constitutes an offer to sell financial products.
                  </li>
                  <li>
                    No solicitation to invest or fund offering of any kind is made.
                  </li>
                </ul>
              </div>

              {/* 5 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  5. Risk Warning
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    Financial markets and trading activities involve substantial risk.
                  </li>
                  <li>
                    Any references to markets or strategies are purely informational.
                  </li>
                </ul>
              </div>

              {/* 6 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  6. Limitation of Liability
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    JCULT TRADER shall not be liable for any financial losses.
                  </li>
                  <li>
                    The Company is not responsible for decisions made based on information provided on this website.
                  </li>
                </ul>
              </div>

              {/* 7 */}
              <div className="space-y-5">
                <h2 className="text-[22px] md:text-[24px] font-semibold text-primary">
                  7. Governing Law
                </h2>

                <ul className="space-y-3 pl-6 list-disc marker:text-[var(--brand-green-1)] text-[17px] leading-[1.75] text-main/85">
                  <li>
                    These Terms shall be governed by the laws of the United Arab Emirates.
                  </li>
                  <li>
                    Applicable legal framework includes IFZA Free Zone regulations.
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
