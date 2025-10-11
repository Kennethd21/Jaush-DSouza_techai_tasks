export default function Gallery() {
  const images = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/neon-${i}/600/400`)
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl border border-white/10">
              <img src={src} alt="Gallery" className="w-full h-full object-cover hover:scale-[1.03] transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
