import { useState } from 'react'
import { Menu, X, Youtube, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#teaching', label: 'Teaching' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50 bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="font-semibold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">Agung Laksana Muda</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="mailto:hello@agungmuda.ai" className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="Email">
                <Mail className="h-5 w-5 text-gray-700" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-700" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </nav>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
