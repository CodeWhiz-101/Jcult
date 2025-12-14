export default function Notices() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <section className="bg-primary py-16 md:py-24 mb-16">
          <div className="container-responsive">
            <h1 className="text-4xl md:text-5xl font-cormorant  text-white">
              Notices
            </h1>
          </div>
        </section>
        
        <section className="pb-16 md:pb-24">
          <div className="container-responsive max-w-4xl">
            
            <div className="space-y-6 text-main">
              <p className="text-lg leading-relaxed">
                This page contains important notices and legal information regarding JCULT TRADER and our services.
              </p>
              
              <h2 className="text-2xl font-cormorant  text-primary mt-8 mb-4">
                Copyright Notice
              </h2>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of JCULT TRADER and is protected by copyright laws. Unauthorized use is prohibited.
              </p>
              
              <h2 className="text-2xl font-cormorant  text-primary mt-8 mb-4">
                Trademark Notice
              </h2>
              <p className="leading-relaxed">
                JCULT TRADER and associated logos are trademarks of JCULT TRADER. All other trademarks appearing on this website are the property of their respective owners.
              </p>
              
              <h2 className="text-2xl font-cormorant  text-primary mt-8 mb-4">
                Important Information
              </h2>
              <p className="leading-relaxed">
                The information provided on this website is for general informational purposes only and should not be considered as financial advice. Please consult with a qualified financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
