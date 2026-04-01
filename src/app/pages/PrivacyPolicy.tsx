import { BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen bg-white antialiased"
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
    >
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 py-4 shadow-sm shadow-slate-900/5">
        <div className="max-w-4xl mx-auto px-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-xl tracking-tight text-slate-900"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              libdesk
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-5 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl text-slate-900 mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-lg">
            <strong>Effective Date:</strong> April 1, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-slate max-w-none">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <p className="text-base">
                This privacy policy applies to the <strong>LibMan</strong> app (hereby referred to as "Application") for mobile devices that was created by <strong>Libdesk</strong> (hereby referred to as "Service Provider") as a <strong>Commercial</strong> service. This service is intended for use "AS IS".
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Information Collection and Use
              </h2>
              <p className="text-base mb-4">
                The Application collects information when you download and use it. This information may include information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Your device's Internet Protocol address (e.g., IP address)</li>
                <li>The pages of the Application that you visit, the time and date of your visit, and the time spent on those pages</li>
                <li>The time spent on the Application</li>
                <li>The operating system you use on your mobile device</li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Account and Authentication Data
              </h2>
              <p className="text-base">
                To provide its core features, the Application requires you to register and log in. We use <strong>Google Login</strong> for authentication and <strong>Supabase</strong> for secure database management. When you log in, we may collect and store personal information provided by these services, such as your name, email address, and profile picture, solely for the purpose of account creation, identity verification, and managing your library profile within the Application.
              </p>
              <p className="text-base mt-4">
                The Application does not gather precise information about the location of your mobile device.
              </p>
              <p className="text-base mt-4">
                The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices, and marketing promotions.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Third-Party Access
              </h2>
              <p className="text-base mb-4">
                Only aggregated, anonymized data is periodically transmitted to external services to help the Service Provider improve the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
              </p>
              <p className="text-base mb-4">
                The Application utilizes third-party services that may collect information used to identify you. Below are links to the Privacy Policies of the third-party service providers used by the Application:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Google Play Services & Google Account/Login
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Supabase
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Data Retention Policy
              </h2>
              <p className="text-base">
                The Service Provider will retain user-provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete user-provided data that you have provided via the Application (such as your Google Login and Supabase account data), please contact them at{" "}
                <a href="mailto:daayal@libdesk.in" className="text-primary hover:underline font-medium">
                  daayal@libdesk.in
                </a>{" "}
                and they will respond in a reasonable time to delete your account and associated information.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Children's Privacy
              </h2>
              <p className="text-base mb-4">
                The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
              </p>
              <p className="text-base mb-4">
                The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discovers that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider at{" "}
                <a href="mailto:daayal@libdesk.in" className="text-primary hover:underline font-medium">
                  daayal@libdesk.in
                </a>{" "}
                so that they will be able to take the necessary actions.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Security
              </h2>
              <p className="text-base">
                The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect the information the Service Provider processes and maintains, including utilizing secure third-party backend services (Supabase) to protect user data.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Changes
              </h2>
              <p className="text-base">
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Contact Us
              </h2>
              <p className="text-base">
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at{" "}
                <a href="mailto:daayal@libdesk.in" className="text-primary hover:underline font-medium">
                  daayal@libdesk.in
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center">
            <h3
              className="text-2xl md:text-3xl text-slate-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Questions about your data?
            </h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              We're committed to transparency and protecting your privacy. Reach out anytime.
            </p>
            <a
              href="mailto:daayal@libdesk.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-5 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-lg text-slate-900 tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              libdesk
            </span>
          </div>
          <p className="text-xs text-slate-400">© 2026 libdesk. Made with ❤️ in India 🇮🇳</p>
        </div>
      </footer>
    </div>
  );
}
