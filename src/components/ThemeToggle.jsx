import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-14 h-8 shrink-0 rounded-full border border-edge/15 bg-surface2 flex items-center px-1 transition-colors"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center text-[11px] text-bg"
        style={{ marginLeft: isDark ? 'auto' : 0 }}
      >
        {isDark ? <FiMoon /> : <FiSun />}
      </motion.span>
    </button>
  )
}
