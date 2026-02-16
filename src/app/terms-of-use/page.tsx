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
        <section className="pb-16 md:pb-24">
          <div className="container-responsive max-w-4xl">

            <div
              className="space-y-10 text-main"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              
              {/* 2. TERMS OF USE */}
              <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-primary">
                2. TERMS OF USE
              </h2>

              <p className="text-lg leading-relaxed text-main/90">
                These Terms of Use govern access to and use of the JCULT TRADER website. 
                By accessing this website, users agree to these terms.
              </p>

              {/* 2.1 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  2.1 Informational Purpose Only
                </h3>
                <p className="leading-relaxed text-main/90">
                  This website is provided strictly for informational purposes. 
                  Nothing contained herein constitutes financial, investment, legal, or tax advice.
                </p>
              </div>

              {/* 2.2 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  2.2 No Regulated Activities
                </h3>
                <p className="leading-relaxed text-main/90">
                  JCULT TRADER is not currently licensed or regulated by any financial 
                  regulatory authority within the United Arab Emirates or elsewhere. 
                  The Company does not provide investment advisory services, portfolio management, 
                  brokerage services, or solicit investments.
                </p>
              </div>

              {/* 2.3 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  2.3 No Client Relationship
                </h3>
                <p className="leading-relaxed text-main/90">
                  Accessing or using this website does not create a client relationship, 
                  fiduciary relationship, or advisory engagement.
                </p>
              </div>

              {/* 2.4 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  2.4 No Offer or Solicitation
                </h3>
                <p className="leading-relaxed text-main/90">
                  Nothing on this website constitutes an offer to sell financial products, 
                  a solicitation to invest, or a fund offering of any kind.
                </p>
              </div>

              {/* 2.5 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  2.5 Risk Warning
                </h3>
                <p className="leading-relaxed text-main/90">
                  Financial markets and trading activities involve substantial risk. 
                  Any references to markets or strategies are purely informational.
                </p>
              </div>

              {/* 2.6 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  2.6 Limitation of Liability
                </h3>
                <p className="leading-relaxed text-main/90">
                  JCULT TRADER shall not be liable for any financial losses or decisions 
                  made based on the information provided on this website.
                </p>
              </div>

              {/* 2.7 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  2.7 Governing Law
                </h3>
                <p className="leading-relaxed text-main/90">
                  These Terms shall be governed by the laws of the United Arab Emirates 
                  as applicable to IFZA Free Zone entities.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
