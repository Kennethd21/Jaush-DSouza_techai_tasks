const PricingSection = () => {
  return (
    <div className="w-full bg-white/5 px-6 py-16 md:py-24 flex flex-col md:flex-row md:justify-between md:items-start gap-12 max-w-6xl mx-auto rounded-2xl border border-white/10">
      <div className="flex-1">
        <p className="text-amber-300 font-semibold mb-4">Over 120,000+ Clients</p>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 text-white">
          Affordable Pricing. <br /> Easy scaling.
        </h2>
        <p className="text-slate-300 mb-8 max-w-lg">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet isn't.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <svg
              className="w-8 h-8 text-white bg-black rounded-full p-1.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="text-white font-medium">World Class UI Design</span>
          </div>
          <div className="flex items-center gap-3 ">
            <svg
              className="w-8 h-8 text-white bg-black rounded-full p-1.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="text-white font-medium">Time-Saving</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="w-8 h-8 text-white bg-black rounded-full p-1.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="text-white font-medium">Diverse Patterns</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="bg-slate-900/70 relative justify-between md:space-x-10 border border-white/10 rounded-lg p-6 shadow-sm flex sm:flex-row flex-col">
          <div>
            <span className="absolute -top-4 right-4 bg-amber-300 text-black font-semibold px-6 py-2 rounded-full shadow-[0_0_20px_4px_rgba(255,195,9,0.6)]">
              Starter
            </span>

            <h3 className="text-3xl font-bold text-white mb-2">
              $59
              <span className="text-lg font-bold text-slate-400">/year</span>
            </h3>
            <p className="text-slate-300 mb-6 font-semibold">
              The best option for personal <br /> use & your next project.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-md font-medium mb-6 hover:bg-slate-200 transition">
              Start Now →
            </button>
          </div>
          <ul className="space-y-2 font-semibold text-slate-300 flex flex-col justify-center">
            <li>• Use on up to 2 active sites</li>
            <li>• Over 131+ patterns</li>
            <li>• Every WordPress templates</li>
            <li>• Email support</li>
          </ul>
        </div>

        <div className="bg-slate-900/70 relative justify-between md:space-x-10 border border-white/10 rounded-lg p-6 shadow-sm flex sm:flex-row flex-col">
          <div>
            <span className="absolute -top-4 right-4 bg-amber-300 text-black font-semibold px-6 py-2 rounded-full shadow-[0_0_20px_4px_rgba(255,195,9,0.6)]">
              Premium
            </span>
            <h3 className="text-3xl font-bold text-white mb-2">
              $159
              <span className="text-lg font-bold text-slate-400">/year</span>
            </h3>
            <p className="text-slate-300 mb-6 font-semibold">
              Best for large-scale uses and <br /> extended redistribution rights.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-md font-medium mb-6 hover:bg-slate-200 transition">
              Start Now →
            </button>
          </div>
          <ul className="space-y-2 font-semibold text-slate-300 flex flex-col justify-center">
            <li>• Use on up to 2 active sites</li>
            <li>• Over 131+ patterns</li>
            <li>• Every WordPress templates</li>
            <li>• Email support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PricingSection
