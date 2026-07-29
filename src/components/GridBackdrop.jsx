import { motion } from 'framer-motion'

export function GridGlow({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(var(--accent)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black 20%, transparent 75%)',
        }}
      />
      <motion.div
        className="absolute top-[15%] left-[20%] w-[32rem] h-[32rem] rounded-full blur-[120px] bg-accent/20 animate-blobA"
      />
      <motion.div
        className="absolute bottom-[10%] right-[15%] w-[28rem] h-[28rem] rounded-full blur-[120px] bg-accent-2/20 animate-blobB"
      />
    </div>
  )
}

export function Wireframe({ className = '' }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke="rgb(var(--accent))"
      strokeWidth="0.6"
      animate={{ rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
    >
      <polygon points="100,10 180,60 180,140 100,190 20,140 20,60" opacity="0.35" />
      <polygon points="100,10 180,60 100,100 20,60" opacity="0.35" />
      <polygon points="100,100 180,60 180,140 100,190" opacity="0.35" />
      <line x1="100" y1="10" x2="100" y2="100" opacity="0.35" />
      <line x1="20" y1="60" x2="100" y2="100" opacity="0.35" />
      <line x1="180" y1="60" x2="100" y2="100" opacity="0.35" />
      <line x1="20" y1="140" x2="100" y2="100" opacity="0.35" />
      <line x1="180" y1="140" x2="100" y2="100" opacity="0.35" />
      <circle cx="100" cy="10" r="2.5" fill="rgb(var(--accent))" opacity="0.6" />
      <circle cx="180" cy="60" r="2.5" fill="rgb(var(--accent))" opacity="0.6" />
      <circle cx="180" cy="140" r="2.5" fill="rgb(var(--accent))" opacity="0.6" />
      <circle cx="100" cy="190" r="2.5" fill="rgb(var(--accent))" opacity="0.6" />
      <circle cx="20" cy="140" r="2.5" fill="rgb(var(--accent))" opacity="0.6" />
      <circle cx="20" cy="60" r="2.5" fill="rgb(var(--accent))" opacity="0.6" />
      <circle cx="100" cy="100" r="2.5" fill="rgb(var(--accent))" opacity="0.6" />
    </motion.svg>
  )
}
