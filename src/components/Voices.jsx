import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Reveal from './Reveal'
import { testimonials } from '../data/testimonials'

const PAGE_SIZE = 3

export default function Voices() {
  const pages = Math.ceil(testimonials.length / PAGE_SIZE)
  const [page, setPage] = useState(0)

  const current = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section id="voices" className="py-28 px-6 md:px-16 lg:px-20 max-w-6xl mx-auto">
      <Reveal className="max-w-2xl mb-16">
        <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent/80 font-medium mb-4">
          <span className="w-6 h-px bg-accent/60" /> Testimonials
        </p>
        <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
          Kind words, <span className="font-display italic font-normal text-accent">from real clients</span>
        </h2>
        <p className="text-muted mt-4">What it&apos;s been like for people who&apos;ve worked with me.</p>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {current.map((t, i) => (
            <div key={i} className="h-full flex flex-col bg-surface/60 border border-edge/10 rounded-2xl p-6">
              <p className="text-text/80 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-edge/10">
                <div className="w-9 h-9 rounded-full bg-gradient-accent text-bg font-semibold flex items-center justify-center text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-accent">{t.role}</p>
                  <p className="text-xs text-muted">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {pages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => (p - 1 + pages) % pages)}
            aria-label="Previous testimonials"
            className="w-9 h-9 rounded-full border border-edge/15 flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-colors"
          >
            <FiChevronLeft />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? 'w-6 bg-accent' : 'w-1.5 bg-edge/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => (p + 1) % pages)}
            aria-label="Next testimonials"
            className="w-9 h-9 rounded-full border border-edge/15 flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-colors"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}
