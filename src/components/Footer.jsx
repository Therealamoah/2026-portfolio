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
    href: 'https://drive.google.com/file/d/104WT9NA7q3ZmlGO1NSUXVdtlxpbFDJWr/view?usp=sharing',
    icon: FiFileText,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-16 lg:px-20 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-base text-gray-400">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
            >
              <Icon /> {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-orange-400">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Available for projects
        </div>

        <p className="text-gray-500">&copy; 2026 Colnett Creative Hub.</p>
      </div>
    </footer>
  )
}
