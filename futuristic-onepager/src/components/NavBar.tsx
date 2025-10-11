import { useEffect, useState } from 'react'

const items = [
  { id: 'hero', label: 'Hero' },
  { id: 'features', label: 'Features' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export default function NavBar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      let newActive = 'hero'
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
          newActive = item.id
          break
        }
      }
      setActive(newActive)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-slate-950/70 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="font-bold tracking-tight text-xl">
          <span className="text-white">NEON</span>
          <span className="text-[oklch(82%_0.19_201)]">.LAB</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-full text-sm transition-colors hover:text-white ${
                  active === item.id ? 'text-white bg-white/10' : 'text-slate-300'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(82%_0.19_201)] text-slate-950 font-semibold hover:opacity-90 transition shadow-lg"
        >
          Get in touch
        </a>
      </nav>
    </header>
  )
}
