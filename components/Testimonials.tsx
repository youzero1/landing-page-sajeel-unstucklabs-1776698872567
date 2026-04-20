const testimonials = [
  {
    quote:
      "LaunchPad completely transformed how our team ships products. We went from 6-week release cycles to deploying multiple times a day. It's an absolute game changer.",
    name: 'Sarah Chen',
    title: 'CTO at Veritas Labs',
    initials: 'SC',
    color: 'bg-pink-500',
    stars: 5,
  },
  {
    quote:
      "I've tried every platform out there, and nothing comes close to LaunchPad's combination of ease of use and raw power. Our revenue doubled in 3 months after switching.",
    name: 'Marcus Rivera',
    title: 'Founder of Nexus AI',
    initials: 'MR',
    color: 'bg-blue-500',
    stars: 5,
  },
  {
    quote:
      "The analytics alone are worth the price. We finally have visibility into everything happening in our product. Support team is also incredibly responsive.",
    name: 'Emma Thompson',
    title: 'Head of Product at Flowstate',
    initials: 'ET',
    color: 'bg-green-500',
    stars: 5,
  },
  {
    quote:
      "Migrating our entire infrastructure to LaunchPad took less than a day. The documentation is excellent and the developer experience is second to none.",
    name: 'David Kim',
    title: 'Lead Engineer at Orbit',
    initials: 'DK',
    color: 'bg-purple-500',
    stars: 5,
  },
  {
    quote:
      "Our startup was struggling with DevOps complexity. LaunchPad abstracted all of that away so we could focus purely on our product. We shipped 10x faster.",
    name: 'Priya Patel',
    title: 'CEO at Luminary',
    initials: 'PP',
    color: 'bg-orange-500',
    stars: 5,
  },
  {
    quote:
      "The team collaboration features are outstanding. Everyone has visibility, nothing gets lost, and we eliminated three other tools from our stack.",
    name: 'James Okonkwo',
    title: 'VP Engineering at Cascade',
    initials: 'JO',
    color: 'bg-teal-500',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by thousands of teams</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what real customers say about LaunchPad.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '10,000+', label: 'Teams using LaunchPad' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '180+', label: 'Countries served' },
            { value: '<50ms', label: 'Average response time' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
