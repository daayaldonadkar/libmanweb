import { BookOpen, ArrowLeft, Trash2, Mail, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router";

export function DeleteAccount() {
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
            LibMan Account & Data Deletion
          </h1>
          <p className="text-slate-500 text-lg">
            If you would like to delete your LibMan account and all associated personal data, please follow the steps below.
          </p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-slate max-w-none">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                How to Request Account Deletion
              </h2>
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4 border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-base">
                    Send an email to{" "}
                    <a href="mailto:daayal@libdesk.in" className="text-primary hover:underline font-medium">
                      daayal@libdesk.in
                    </a>{" "}
                    from the email address associated with your LibMan account.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-base">
                    Use the subject line: <strong>"Account Deletion Request"</strong>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-base">
                    In the body of the email, please include your registered email address or username so we can identify your account.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2
                className="text-2xl text-slate-900 mb-4 mt-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                What happens next?
              </h2>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-base">
                    Once we receive your request, we will permanently delete your account and all associated personal data from our servers within <strong>7-14 business days</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-base">
                    Please note that this action is <strong>irreversible</strong>, and you will lose access to all your saved data in the LibMan app.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 text-center">
            <h3
              className="text-2xl md:text-3xl text-slate-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Ready to delete your account?
            </h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Send us an email and we&apos;ll process your request within 7-14 business days.
            </p>
            <a
              href="mailto:daayal@libdesk.in?subject=Account%20Deletion%20Request"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
            >
              <Trash2 className="w-5 h-5" />
              Send Deletion Request
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
