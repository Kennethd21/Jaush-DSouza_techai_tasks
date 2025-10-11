export default function Contact() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-24">
        <div className="rounded-2xl border border-white/10 p-8 md:p-12 bg-slate-900/60">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contact</h2>
          <p className="text-slate-300 mb-8 max-w-2xl">Have a project or want to collaborate at a hackathon? Drop your email and a short note.</p>
          <form className="grid md:grid-cols-[1fr_auto] gap-3">
            <input type="email" required placeholder="Email address" className="px-4 py-3 rounded-xl bg-black/30 border border-white/15 text-white placeholder:text-slate-400" />
            <button type="submit" className="px-5 py-3 rounded-xl bg-[oklch(73%_0.23_345)] hover:opacity-90 text-white font-semibold shadow-lg">Send →</button>
          </form>
        </div>
        <p className="text-slate-400 text-sm mt-6">© {new Date().getFullYear()} Neon Lab</p>
      </div>
    </div>
  )
}
