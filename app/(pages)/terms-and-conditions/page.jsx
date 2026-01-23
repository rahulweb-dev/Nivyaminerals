
export const metadata = {
  title: "Terms & Conditions | Amigos Minerals",
  description: "Terms and Conditions for Amigos Minerals website.",
};

export default function TermsAndConditionsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing and using the website{" "}
              <a
                href="https://Amigosminerals.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://Amigosminerals.vercel.app/
              </a>{" "}
              (“Website”), you agree to comply with and be bound by these Terms
              &amp; Conditions (“Terms”). If you do not agree, please do not use
              this Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              2. About the Website
            </h2>
            <p className="mt-3">
              Amigos Minerals provides information related to our products,
              services, business details, and contact options. Any information
              displayed on this Website is for general informational purposes
              only.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              3. Use of Website
            </h2>
            <p className="mt-3">
              You agree to use this Website only for lawful purposes and in a
              way that does not infringe the rights of others or restrict their
              use of the Website.
            </p>

            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>You must not misuse the Website or attempt unauthorized access.</li>
              <li>You must not introduce viruses, malware, or harmful code.</li>
              <li>
                You must not copy, reproduce, or distribute Website content
                without permission.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              4. Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this Website, including text, images, graphics,
              logos, and design elements, is the property of Amigos Minerals or
              its licensors and is protected by applicable copyright and
              intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              5. Product &amp; Service Information
            </h2>
            <p className="mt-3">
              We make reasonable efforts to ensure that information on the
              Website is accurate and up to date. However, we do not guarantee
              that product descriptions, pricing, availability, or other content
              is always complete or error-free.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              6. Enquiries and Communication
            </h2>
            <p className="mt-3">
              If you submit an enquiry through our Website, you agree that the
              information you provide is accurate. We may contact you via phone,
              email, or other communication methods to respond to your enquiry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              7. Third-Party Links
            </h2>
            <p className="mt-3">
              Our Website may include links to third-party websites. We do not
              control or take responsibility for the content, privacy policies,
              or practices of third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              8. Disclaimer
            </h2>
            <p className="mt-3">
              This Website is provided on an “as is” and “as available” basis.
              We make no warranties, expressed or implied, regarding the
              Website’s availability, accuracy, or reliability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              9. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law, Amigos Minerals shall not
              be liable for any direct, indirect, incidental, consequential, or
              special damages arising out of or related to your use of the
              Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              10. Changes to Terms
            </h2>
            <p className="mt-3">
              We may update these Terms at any time without prior notice. Any
              changes will be effective immediately once posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              11. Governing Law
            </h2>
            <p className="mt-3">
              These Terms shall be governed by and interpreted in accordance
              with the laws applicable in your jurisdiction. Any disputes
              related to these Terms will be subject to the appropriate courts.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              12. Contact Information
            </h2>
            <p className="mt-3">
              If you have any questions about these Terms &amp; Conditions,
              please contact us:
            </p>

            <p className="mt-3 text-sm">
              <span className="font-medium text-gray-900">Email:</span>{" "}
              <a
                href="mailto:info@amigominerals.com"
                className="text-blue-600 hover:underline"
              >
                info@amigominerals.com
              </a>
            </p>

            <p className="mt-2 text-sm">
              <span className="font-medium text-gray-900">Website:</span>{" "}
              <a
                href="https://Amigosminerals.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://Amigosminerals.vercel.app/
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
