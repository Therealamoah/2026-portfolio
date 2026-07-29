import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function BrowserMockup({ image, alt, domain, tint = 'from-accent/10 via-transparent to-transparent' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`relative rounded-2xl border border-edge/10 bg-gradient-to-br ${tint} p-3 sm:p-4`}
    >
      <span className="absolute top-4 right-4 z-10 text-[11px] font-medium tracking-wide text-accent bg-bg/70 border border-accent/30 rounded-full px-3 py-1">
        Deployed
      </span>

      <div className="rounded-lg overflow-hidden border border-edge/10 shadow-2xl bg-surface2">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-surface2 border-b border-edge/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 mr-16 sm:mr-20 min-w-0 flex-1 text-[11px] text-muted bg-bg/40 rounded px-2 py-0.5 truncate">
            {domain}
          </span>
        </div>
        <div className="max-h-[380px] overflow-hidden">
          <img src={image} alt={alt} className="w-full h-auto object-cover object-top" />
        </div>
      </div>
    </motion.div>
  )
}
