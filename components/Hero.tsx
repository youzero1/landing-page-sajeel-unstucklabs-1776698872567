export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-primary-50 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <span>Now in public beta — try it free</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Launch Your Idea
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-pink-600">
            Faster Than Ever
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed">
          NayaPad gives you all the tools you need to go from idea to production in record time.
          Beautiful design, powerful infrastructure, zero friction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#"
            className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary-200 hover:shadow-primary-300 hover:-translate-y-0.5"
          >
            Start Building Free
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
          >
            <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            See how it works
          </a>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['bg-pink-400', 'bg-yellow-400', 'bg-green-400', 'bg-fuchsia-400', 'bg-purple-400'].map((color, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-white ${color} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>2,000+ developers</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="ml-1">4.9/5 rating</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
          <span>No credit card required</span>
        </div>

        {/* Hero Image / Dashboard mockup */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-4xl mx-auto">
            {/* Browser chrome */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 text-center">
                app.nayapad.io/dashboard
              </div>
            </div>
            {/* Dashboard content */}
            <div className="p-6 bg-gray-50">
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[
                  { label: 'Total Revenue', value: '$48,295', change: '+12.5%', color: 'text-green-500' },
                  { label: 'Active Users', value: '2,847', change: '+8.2%', color: 'text-green-500' },
                  { label: 'Conversion', value: '3.24%', change: '+2.1%', color: 'text-green-500' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-xs font-medium ${stat.color}`}>{stat.change}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-700">Revenue Overview</h3>
                  <span className="text-xs text-gray-400">Last 30 days</span>
                </div>
                {/* Fake chart bars */}
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary-100 rounded-t-sm relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-sm"
                        style={{ height: `${60 + Math.random() * 40}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect under card */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary-200 blur-2xl opacity-40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
