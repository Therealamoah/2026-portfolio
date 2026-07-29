import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import Reveal from './Reveal'
import BrowserMockup from './BrowserMockup'
import { projects } from '../data/projects'

const tints = [
  'from-accent/15 via-transparent to-transparent',
  'from-emerald-500/10 via-transparent to-transparent',
  'from-fuchsia-500/10 via-transparent to-transparent',
  'from-accent-2/15 via-transparent to-transparent',
  'from-amber-500/10 via-transparent to-transparent',
  'from-teal-500/10 via-transparent to-transparent',
  'from-rose-500/10 via-transparent to-transparent',
]

export default function WorkSection() {
  return (
    <section id="work" className="py-28 px-6 md:px-16 lg:px-20 max-w-6xl mx-auto">
      <Reveal className="max-w-2xl mb-20">
        <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent/80 font-medium mb-4">
          <span className="w-6 h-px bg-accent/60" /> Recent Builds
        </p>
        <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
          Work you can <span className="font-display italic font-normal text-accent">actually click on</span>
        </h2>
        <p className="text-muted mt-4">
          A handful of the products I&apos;ve designed and built end to end, each one responsive,
          deployed, and live.
        </p>
      </Reveal>

      <div className="flex flex-col gap-24">
        {projects.map((project, i) => {
          const flip = i % 2 === 1
          return (
            <div
              key={project.id}
              className={`flex flex-col ${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
            >
              <Reveal className="w-full lg:w-7/12">
                <BrowserMockup
                  image={project.image}
                  alt={project.title}
                  domain={project.domain}
                  tint={tints[i % tints.length]}
                />
              </Reveal>

              <Reveal delay={0.1} className="w-full lg:w-5/12">
                <p className="text-xs uppercase tracking-[0.25em] text-accent/70 font-medium mb-3">
                  {project.tag}
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-accent/30 text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-accent text-bg font-semibold text-sm transition-transform duration-300 hover:scale-105"
                  >
                    Website <FiArrowUpRight />
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-edge/20 text-text font-medium text-sm hover:border-accent hover:text-accent transition-colors"
                    >
                      <FiGithub /> Repo
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
          )
        })}
      </div>
    </section>
  )
}
