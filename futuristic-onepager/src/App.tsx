import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-clip">
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[48rem] w-[48rem] rounded-full blur-3xl opacity-35"
        style={{
          background:
            'radial-gradient(closest-side, oklch(82% 0.19 201 /.8), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/2 translate-x-1/2 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-30"
        style={{
          background:
            'radial-gradient(closest-side, oklch(73% 0.23 345 /.7), transparent 70%)',
        }}
      />

      <NavBar />
      <main className="relative">
        <section id="hero" className="min-h-screen flex items-center">
          <Hero />
        </section>
        <section id="features" className="min-h-screen flex items-center">
          <Features />
        </section>
        <section id="about" className="min-h-screen flex items-center">
          <About />
        </section>
        <section id="gallery" className="min-h-screen flex items-center">
          <Gallery />
        </section>
        <section id="contact" className="min-h-screen flex items-center">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
