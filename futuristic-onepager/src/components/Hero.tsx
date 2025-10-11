export default function Hero() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 pt-28 md:pt-36 pb-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-8 md:p-14">
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <div className="relative">
            <p className="text-[oklch(85%_0.19_83)] font-semibold tracking-wide mb-3">Hackathon-ready UI kit</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Build futuristic sites
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(82%_0.19_201)] via-[oklch(73%_0.23_345)] to-[oklch(85%_0.22_138)] animate-gradient">
                faster than light
              </span>
            </h1>
            <p className="mt-5 text-slate-300 max-w-2xl">
              A vibrant, single-page starter with smooth scrolling, neon accents, and delightful interactions.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#features" className="px-5 py-3 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition shadow-lg">Explore Features →</a>
              <a href="#contact" className="px-5 py-3 rounded-full bg-transparent border border-white/20 text-white hover:bg-white/10 transition">Contact</a>
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-3 rounded-full bg-[oklch(73%_0.23_345)] text-white font-semibold hover:opacity-90 transition shadow-lg"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
