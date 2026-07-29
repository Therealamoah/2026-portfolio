import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import Reveal from './Reveal'
import { Wireframe } from './GridBackdrop'

const FORM_ENDPOINT = 'https://formspree.io/f/xgolyeyy'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6 md:px-16 lg:px-20 max-w-6xl mx-auto overflow-hidden">
      <Wireframe className="hidden lg:block absolute -top-10 right-0 w-72 h-72" />

      <Reveal className="text-center max-w-2xl mx-auto mb-14 relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent/80 font-medium mb-4">
          Let&apos;s Talk
        </p>
        <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
          Ready when you <span className="font-display italic font-normal text-accent">are.</span>
        </h2>
        <p className="text-muted mt-4">
          Send a few details about your project and I&apos;ll get back to you ASAP.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="max-w-xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-surface/60 border border-edge/10 p-10 rounded-2xl shadow-xl text-center"
            >
              <FiCheckCircle className="text-5xl text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Message sent</h3>
              <p className="text-muted leading-relaxed">
                Thanks for reaching out — I&apos;ve received your message and will respond as soon as
                possible, usually within a day or two.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-accent hover:underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onSubmit={handleSubmit}
              className="bg-surface/60 border border-edge/10 p-8 rounded-2xl shadow-xl space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2.5 bg-surface2 rounded-lg border border-edge/10 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/60 transition"
                  style={{ color: 'rgb(var(--text))', caretColor: 'rgb(var(--text))' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2.5 bg-surface2 rounded-lg border border-edge/10 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/60 transition"
                  style={{ color: 'rgb(var(--text))', caretColor: 'rgb(var(--text))' }}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-muted">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2.5 bg-surface2 rounded-lg border border-edge/10 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/60 transition"
                  style={{ color: 'rgb(var(--text))', caretColor: 'rgb(var(--text))' }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message"
                  required
                  className="w-full px-4 py-2.5 bg-surface2 rounded-lg border border-edge/10 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/60 transition"
                  style={{ color: 'rgb(var(--text))', caretColor: 'rgb(var(--text))' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-accent text-bg font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </button>

              {status === 'error' && (
                <p className="flex items-center justify-center gap-2 text-sm text-red-400">
                  <FiAlertCircle /> Something went wrong — please try again or email me directly.
                </p>
              )}

              <div className="flex items-center justify-center gap-2 text-muted text-sm pt-2">
                <FiPhone />
                <span>+233 (0) 596269011</span>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  )
}
