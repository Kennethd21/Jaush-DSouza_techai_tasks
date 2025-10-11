import { useRef } from 'react'

type HoloCardProps = {
  title: string
  body: string
  ctaText?: string
  href?: string
}

export default function HoloCard({ title, body, ctaText, href }: HoloCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height

    const rotateY = (px - 0.5) * 10
    const rotateX = (0.5 - py) * 10

    card.style.setProperty('--x', `${x}px`)
    card.style.setProperty('--y', `${y}px`)
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const onLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative group rounded-2xl p-6 bg-slate-900/60 border border-white/10 text-slate-100 transition-transform will-change-transform"
      style={{
        backgroundImage:
          'radial-gradient(650px circle at var(--x, 50%) var(--y, 50%), oklch(82% 0.19 201 / 0.15), transparent 40%)',
      }}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, oklch(82% 0.19 201 / .35), oklch(73% 0.23 345 / .35), oklch(85% 0.22 138 / .35), oklch(85% 0.19 83 / .35), oklch(82% 0.19 201 / .35))',
          mask: 'linear-gradient(black,transparent 35%, transparent 65%, black)'
        }}
      />
      <div className="relative">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-300 mb-4">{body}</p>
        {ctaText && href && (
          <a
            href={href}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-200 transition"
          >
            {ctaText}
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </div>
  )
}
