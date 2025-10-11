import HoloCard from './HoloCard'
import PricingSection from './PricingSection'

export default function Features() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Features</h2>
        <p className="text-slate-300 max-w-2xl mb-10">
          Energetic, harmonious colors and smooth interactions. Built with React + Tailwind.
        </p>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-14">
          <HoloCard title="Glowing Speed" body="Optimized Vite + React + Tailwind stack for instant feedback." />
          <HoloCard title="Neon Palette" body="OKLCH-based bright but balanced colors to pop on dark UI." />
          <HoloCard title="Smooth Scroll" body="Scroll-snap inspired sections and active nav highlighting." />
        </div>

        <div className="mt-6">
          <PricingSection />
        </div>
      </div>
    </div>
  )
}
