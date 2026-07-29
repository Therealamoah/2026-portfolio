import Reveal from './Reveal'
import TechMarquee from './TechMarquee'
import { stackCategories } from '../data/stack'

export default function StackSection() {
  return (
    <section id="stack" className="py-28 max-w-6xl mx-auto">
      <div className="px-6 md:px-16 lg:px-20">
        <Reveal className="max-w-2xl mb-16">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent/80 font-medium mb-4">
            <span className="w-6 h-px bg-accent/60" /> Toolbox
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
            What&apos;s under <span className="font-display italic font-normal text-accent">the hood</span>
          </h2>
          <p className="text-muted mt-4">
            The languages, frameworks and tools that show up in nearly everything I ship.
          </p>
        </Reveal>
      </div>

      <div className="mb-16">
        <TechMarquee />
      </div>

      <div className="px-6 md:px-16 lg:px-20 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stackCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.1}>
            <div className="h-full bg-surface/60 border border-edge/10 rounded-2xl p-6 hover:border-accent/30 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-text">{cat.title}</h3>
                <span className="font-display italic text-accent/50 text-sm">{cat.index}</span>
              </div>
              <p className="text-muted text-sm mb-5">{cat.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1.5 rounded-full border border-accent/30 text-accent"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
