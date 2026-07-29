import { useState } from 'react'
import { motion } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkSection from './components/WorkSection'
import StackSection from './components/StackSection'
import Voices from './components/Voices'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <Preloader onFinish={() => setReady(true)} />
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="min-h-screen flex flex-col"
      >
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <WorkSection />
          <StackSection />
          <Voices />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
