import Reveal from './Reveal'

const credentials = [
  {
    title: 'Full-Stack Developer',
    tag: '4+ Years Experience',
    blurb: 'Building scalable web applications across frontend and backend, from idea to deployment.',
  },
  {
    title: 'MERN, Firebase & Supabase',
    tag: 'Modern Web Stack',
    blurb: 'React, Node.js, Express and MongoDB, shipping responsive, high-performance products.',
  },
  {
    title: 'Graphic Design Background',
    tag: 'Visual & Brand Sense',
    blurb: 'Strong visual structure, clear hierarchy and consistent branding in every product I build.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 lg:px-20 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent/80 font-medium mb-4">
            <span className="w-6 h-px bg-accent/60" /> About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Design background,{' '}
            <span className="font-display italic font-normal text-accent">full-stack execution</span>
          </h2>
          <p className="text-muted mt-4">
            A developer who started with visuals, and stayed for the systems underneath them.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="shrink-0 mx-auto md:mx-0">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-edge/10 shadow-2xl">
            <img
              src="/Images/Gemini_Generated_Image_vf10kgvf10kgvf10.jpg"
              alt="Collins Amoah"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {credentials.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <div className="h-full bg-surface/60 border border-edge/10 rounded-2xl p-6 hover:border-accent/30 transition-colors">
              <h3 className="text-lg font-semibold text-text mb-1">{c.title}</h3>
              <p className="text-accent text-sm font-medium mb-3">{c.tag}</p>
              <p className="text-muted text-sm leading-relaxed">{c.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
