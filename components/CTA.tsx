export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-pink-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decoration */}
        <div className="relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />

          <p className="text-primary-200 font-semibold text-sm uppercase tracking-wider mb-4">
            Get Started Today
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to launch your
            <br />
            next big thing?
          </h2>
          <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto">
            Join over 10,000 teams who use LaunchPad to build and ship faster. Start for free, upgrade when you&apos;re ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:-translate-y-0.5"
            >
              Start Building Free
            </a>
            <a
              href="#"
              className="w-full sm:w-auto border-2 border-primary-400 text-white hover:bg-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              Talk to Sales
            </a>
          </div>

          <p className="mt-6 text-primary-300 text-sm">
            No credit card required &bull; 14-day free trial &bull; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
