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
            
            <div className="space-y-6 text-main">
              <p className="text-lg leading-relaxed">
                At JCULT TRADER, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
              </p>
              
              <h2 className="text-2xl font-cormorant  text-primary mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="leading-relaxed">
                We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide when you contact us or use our services.
              </p>
              
              <h2 className="text-2xl font-cormorant  text-primary mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
              
              <h2 className="text-2xl font-cormorant  text-primary mt-8 mb-4">
                Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
