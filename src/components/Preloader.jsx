import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const duration = 1700
    const start = performance.now()
    let raf

    function tick(now) {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setDone(true)
          onFinish?.()
        }, 350)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
    else document.body.style.overflow = 'hidden'
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-14 h-14 rounded-full border border-accent/60 flex items-center justify-center font-display italic text-accent text-xl mb-8"
          >
            CA
          </motion.div>

          <div className="font-display text-5xl sm:text-6xl mb-6 tabular-nums text-gradient-accent bg-[length:200%_auto] animate-gradientX">
            {progress}%
          </div>

          <div className="w-56 h-1 rounded-full bg-surface2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-accent"
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-muted">Loading portfolio</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
