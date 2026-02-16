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
        <section className="pb-16 md:pb-24">
          <div className="container-responsive max-w-4xl">

            <div
              className="space-y-10 text-main"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >

              {/* 4. DISCLOSURES */}
              <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-primary">
                4. DISCLOSURES
              </h2>

              {/* 4.1 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  4.1 Business Status Disclosure
                </h3>
                <p className="leading-relaxed text-main/90">
                  JCULT TRADER is currently in its establishment and development phase. 
                  No asset management services are being offered at this time.
                </p>
              </div>

              {/* 4.2 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  4.2 Regulatory Disclosure
                </h3>
                <p className="leading-relaxed text-main/90">
                  The Company is not licensed by the Securities and Commodities Authority (SCA), 
                  the Dubai Financial Services Authority (DFSA), or any other financial regulatory body. 
                  Any future regulated activities will be subject to obtaining appropriate approvals.
                </p>
              </div>

              {/* 4.3 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  4.3 No Custody of Funds
                </h3>
                <p className="leading-relaxed text-main/90">
                  JCULT TRADER does not accept, hold, manage, or custody client funds.
                </p>
              </div>

              {/* 4.4 */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  4.4 Conflict of Interest Disclosure
                </h3>
                <p className="leading-relaxed text-main/90">
                  As the Company is not currently providing financial services, 
                  no client conflicts of interest exist at this stage.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
