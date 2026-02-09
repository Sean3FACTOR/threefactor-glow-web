import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#3B3B39" }}>
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose max-w-none space-y-8 text-white">
              <p className="text-lg leading-relaxed">
                At 3FACTOR, we value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard your information when you visit our website.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information we collect</h2>
                <p className="leading-relaxed">
                  When you visit our website, we may collect certain personal information, including your name, email address, phone number, and IP address. We may also collect non-personal information such as your browser type, device type, and the pages you visit on our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How we use your information</h2>
                <p className="leading-relaxed">
                  We may use the personal information we collect to communicate with you about our products and services, to process orders or payments, and to provide customer support. We may also use your information to analyze website traffic and improve our website's functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Sharing your information</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with our trusted partners who assist us in operating our website, conducting our business, or servicing you. However, we will only share your information as necessary to accomplish these purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Security</h2>
                <p className="leading-relaxed">
                  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Links to other websites</h2>
                <p className="leading-relaxed">
                  Our website may contain links to other websites. Please note that we are not responsible for the privacy practices of these other sites. We encourage you to be aware when you leave our site and to read the privacy policies of any website that collects your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to our privacy policy</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify our privacy policy at any time. If we make material changes to our policy, we will post a notice on our website. Your continued use of our website after the changes indicates your acceptance of the new policy.
                </p>
              </section>

              <section className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="leading-relaxed">
                  If you have any questions or concerns about our privacy policy, please contact us at{" "}
                  <a href="mailto:privacy@3factor.com" className="hover:underline" style={{ color: "#F36F21" }}>
                    privacy@3factor.com
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
