// app/privacy-policy/page.jsx
export const metadata = {
  title: "Privacy Policy | Amigos Minerals",
  description: "Privacy Policy for Amigos Minerals website.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              1. Introduction
            </h2>
            <p className="mt-3">
              Amigos Minerals (“we”, “us”, “our”) values your privacy. This
              Privacy Policy explains how we collect, use, and protect your
              information when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We may collect personal information that you provide voluntarily,
              such as your name, email address, phone number, and message details
              when you contact us through forms or email.
            </p>
            <p className="mt-3">
              We may also collect non-personal information automatically, such
              as your IP address, browser type, device information, pages
              visited, and time spent on the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              3. How We Use Your Information
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>To respond to your enquiries and requests</li>
              <li>To improve our website and services</li>
              <li>To provide support and communication</li>
              <li>To monitor website performance and security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              4. Cookies and Tracking
            </h2>
            <p className="mt-3">
              We may use cookies and similar tracking technologies to enhance
              your experience. You can control cookies through your browser
              settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              5. Third-Party Services
            </h2>
            <p className="mt-3">
              We may use third-party tools (such as analytics or hosting
              services). These providers may process limited information to help
              us operate and improve the website. Their data handling is
              governed by their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              6. Data Security
            </h2>
            <p className="mt-3">
              We take reasonable measures to protect your information, but no
              online system is completely secure. We cannot guarantee absolute
              security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              7. External Links
            </h2>
            <p className="mt-3">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of those websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              8. Children’s Privacy
            </h2>
            <p className="mt-3">
              Our website is not intended for children under 13. We do not
              knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised “Last updated” date.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              10. Contact Us
            </h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, contact us:
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
