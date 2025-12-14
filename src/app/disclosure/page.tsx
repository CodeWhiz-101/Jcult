export default function Disclosure() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <section className="bg-primary py-16 md:py-24 mb-16">
          <div className="container-responsive">
            <h1 className="text-4xl md:text-5xl font-cormorant  text-white">
              Disclosure
            </h1>
          </div>
        </section>
        
        <section className="pb-16 md:pb-24">
          <div className="container-responsive max-w-4xl">
            
            <div className="space-y-6 text-main">
              <p className="text-lg leading-relaxed">
                JCULT TRADER provides this disclosure to ensure transparency in our operations and to inform clients and potential investors of important information regarding our services.
              </p>
              
              <h2 className="text-2xl font-cormorant  text-primary mt-8 mb-4">
                Investment Risks
              </h2>
              <p className="leading-relaxed">
                All investments involve risk, including the potential loss of principal. Past performance does not guarantee future results. The value of investments and the income from them can go down as well as up.
              </p>
              
              <h2 className="text-2xl font-cormorant  text-primary mt-8 mb-4">
                Regulatory Information
              </h2>
              <p className="leading-relaxed">
                JCULT TRADER operates in compliance with applicable financial regulations. We are committed to maintaining the highest standards of professional conduct and regulatory compliance.
              </p>
              
              <h2 className="text-2xl font-cormorant  text-primary mt-8 mb-4">
                Conflicts of Interest
              </h2>
              <p className="leading-relaxed">
                We maintain policies and procedures to identify and manage potential conflicts of interest. Our commitment is to act in the best interests of our clients at all times.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
