import { useEffect, useState, useCallback } from 'react'
import { Menu, X, Download } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sectionEls = links
      .map(l => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    )

    sectionEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleClick = useCallback((e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80 // account for sticky nav height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setOpen(false)
    }
  }, [])

  // Close mobile menu on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-white/10 bg-[#070c17]/60 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" onClick={(e) => handleClick(e, 'home')} className="group inline-flex items-center gap-2">
            <span className="text-sm font-semibold tracking-wide text-cyan-300">Ahmad</span>
            <span className="hidden text-xs text-white/50 sm:inline">AI • Data • Strategy</span>
          </a>

          {/* Desktop links */}
          <div className="-mx-1 hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleClick(e, l.id)}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === l.id ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
                )}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="/Ahmad-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20 md:inline-flex"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <button
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs border-l border-white/10 bg-[#0b1224] shadow-xl">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm font-semibold tracking-wide text-cyan-300">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-md p-2 text-white/80 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-2 pb-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => handleClick(e, l.id)}
                  className={`block rounded-lg px-3 py-3 text-sm ${active === l.id ? 'bg-white/5 text-white' : 'text-white/80 hover:text-white'}`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Ahmad-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/20"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
