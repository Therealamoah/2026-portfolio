import { motion } from 'framer-motion'

const items = [
  'React', 'Node.js', 'Tailwind CSS', 'Firebase', 'MongoDB', 'Express',
  'JavaScript', 'Supabase', 'Git', 'Vite', 'Framer Motion', 'HTML & CSS', 'Python', 'Flask', 'Django'
]

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-edge/10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ['0%', '-30%', '0%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm text-muted whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
