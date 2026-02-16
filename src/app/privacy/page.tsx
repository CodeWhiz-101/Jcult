export default function Privacy() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <section className="bg-primary py-16 md:py-24 mb-16">
          <div className="container-responsive">
            <h1 className="text-4xl md:text-5xl font-cormorant  text-white">
              Privacy Policy
            </h1>
          </div>
        </section>
        
        <section className="pb-16 md:pb-24">
          <div className="container-responsive max-w-4xl">
            
            <div
  className="space-y-10 text-main"
  style={{ fontFamily: 'Raleway, sans-serif' }}
>

  {/* Main Section Title */}
  <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-primary">
    1. PRIVACY POLICY
  </h2>

  <p className="text-lg leading-relaxed text-main/90">
    JCULT TRADER (“Company”, “we”, “our”, “us”) is incorporated in IFZA Free Zone, Dubai, United Arab Emirates. 
    This website is currently informational in nature and does not collect or process personal data for commercial purposes.
  </p>

  {/* 1.1 */}
  <div className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-primary">
      1.1 Information We Do Not Collect
    </h3>
    <p className="leading-relaxed text-main/90">
      At this stage, the Company does not collect personal information through website forms, 
      does not provide user accounts, does not process payments, and does not manage client 
      funds through the website.
    </p>
  </div>

  {/* 1.2 */}
  <div className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-primary">
      1.2 Automatically Collected Information
    </h3>
    <p className="leading-relaxed text-main/90">
      Basic technical information such as IP address, browser type, device information, 
      and date/time of access may be automatically collected by hosting providers 
      for security and functionality purposes only.
    </p>
  </div>

  {/* 1.3 */}
  <div className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-primary">
      1.3 Cookies
    </h3>
    <p className="leading-relaxed text-main/90">
      Any cookies used are strictly for website performance and functionality. 
      No profiling or marketing tracking is conducted.
    </p>
  </div>

  {/* 1.4 */}
  <div className="space-y-4">
    <h3 className="text-xl md:text-2xl font-semibold text-primary">
      1.4 Future Updates
    </h3>
    <p className="leading-relaxed text-main/90">
      If JCULT TRADER begins collecting personal information in the future, 
      this Privacy Policy will be updated accordingly.
    </p>
  </div>

</div>

          </div>
        </section>
      </main>
    </div>
  );
}
