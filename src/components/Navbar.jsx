import { useEffect, useState, useCallback } from 'react'

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
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-white/10 bg-[#070c17]/60 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" onClick={(e) => handleClick(e, 'home')} className="group inline-flex items-center gap-2">
            <span className="text-sm font-semibold tracking-wide text-cyan-300">Ahmad</span>
            <span className="hidden text-xs text-white/50 sm:inline">AI • Data • Strategy</span>
          </a>

          <div className="-mx-1 hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleClick(e, l.id)}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === l.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                )}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex gap-1 overflow-x-auto">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => handleClick(e, l.id)}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm ${
                    active === l.id ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
