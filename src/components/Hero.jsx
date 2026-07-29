import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import { GridGlow, Wireframe } from './GridBackdrop'

const ROLE = 'Full Stack Developer | Graphic Designer '

export default function Hero() {
  const typed = useTypewriter(ROLE, { typeSpeed: 90, deleteSpeed: 0, pause: 999999 })

  function goTo(hash) {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <GridGlow />
      <motion.div
        className="hidden lg:block absolute top-1/3 right-[8%]"
        animate={{ x: [0, -170, 0], y: [0, 16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Wireframe className="w-56 h-56" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl text-center"
      >
        <h1 className="font-display italic text-6xl sm:text-7xl lg:text-8xl leading-[1.05] mb-3">
          Collins Amoah
        </h1>
        <p className="font-display italic text-2xl sm:text-3xl mb-8 text-gradient-accent bg-[length:200%_auto] animate-gradientX">
          {typed}
        </p>

        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto mb-10">
          I build scalable, high-performance web applications, from idea to deployment, with clean
          code, thoughtful design and a workflow tuned for shipping fast.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <button
            onClick={() => goTo('work')}
            className="px-7 py-3 rounded-full bg-gradient-accent text-bg font-semibold shadow-lg shadow-accent/20 transition-transform duration-300 hover:scale-105"
          >
            See the work
          </button>
          <button
            onClick={() => goTo('contact')}
            className="px-7 py-3 rounded-full border border-edge/20 text-text font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Get in touch
          </button>
        </div>

        <a
          href="https://docs.google.com/document/d/1rMu24ia8nCyFgP3FUpfKgS-0jPXYIfKz/edit?usp=sharing&ouid=113860712487533309840&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted hover:text-accent transition-colors underline underline-offset-4 decoration-edge/20"
        >
          or view my resume ↗
        </a>
      </motion.div>
    </section>
  )
}
