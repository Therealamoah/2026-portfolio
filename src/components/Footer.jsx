import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiFileText } from 'react-icons/fi'

const links = [
  { label: 'GitHub', href: 'https://github.com/Therealamoah', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/collins-kwame-amoah-624a86226/', icon: FaLinkedin },
  { label: 'WhatsApp', href: 'https://wa.me/233596269011', icon: FaWhatsapp },
  { label: 'Email', href: 'mailto:collinsamoah594@gmail.com', icon: HiOutlineMail },
  {
    label: 'Resumé',
    href: 'https://docs.google.com/document/d/1rMu24ia8nCyFgP3FUpfKgS-0jPXYIfKz/edit?usp=sharing&ouid=113860712487533309840&rtpof=true&sd=true',
    icon: FiFileText,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-edge/10 px-6 md:px-16 lg:px-20 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Icon /> {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for projects
        </div>

        <p className="text-muted">&copy; 2026 Colnett Creative Hub.</p>
      </div>
    </footer>
  )
}
