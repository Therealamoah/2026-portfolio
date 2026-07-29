import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', hash: 'about' },
  { label: 'Projects', hash: 'work' },
  { label: 'Toolbox', hash: 'stack' },
  { label: 'Testimonials', hash: 'voices' },
  { label: 'Contact', hash: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function goTo(hash) {
    setOpen(false)
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto">
      <div className="flex items-center gap-2 sm:gap-5 bg-surface/70 backdrop-blur-xl border border-edge/10 rounded-full pl-2 pr-2 sm:pr-3 py-2 shadow-xl shadow-black/10">
        <button
          onClick={() => goTo('home')}
          aria-label="Back to top"
          className="w-9 h-9 shrink-0 rounded-full border border-accent/60 flex items-center justify-center font-display italic text-accent text-base"
        >
          CA
        </button>

        <span className="hidden sm:block w-px h-5 bg-edge/10" />

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {links.map((link) => (
            <button key={link.hash} onClick={() => goTo(link.hash)} className="hover:text-accent transition-colors">
              {link.label}
            </button>
          ))}
        </nav>

        <span className="hidden sm:block w-px h-5 bg-edge/10" />

        <ThemeToggle />

        <button
          aria-label="Toggle menu"
          className="md:hidden ml-auto text-2xl text-text pr-1"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-surface/90 backdrop-blur-xl border border-edge/10 rounded-2xl mt-3"
          >
            <div className="flex flex-col items-center gap-1 py-4 text-base text-text">
              {links.map((link) => (
                <button
                  key={link.hash}
                  onClick={() => goTo(link.hash)}
                  className="w-full py-2 hover:text-accent hover:bg-edge/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
