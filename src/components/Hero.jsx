import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0f1f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0a0f1f]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wide text-cyan-300/90 backdrop-blur"
        >
          Ahmad • AI, Data & Strategy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-balance bg-gradient-to-br from-white via-cyan-100 to-cyan-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Turning Data Into Intelligent Business Stories.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          I’m Ahmad — bridging AI, Data, and Strategy to deliver real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="group rounded-xl bg-cyan-500/90 px-6 py-3 text-sm font-semibold text-[#06101a] shadow-[0_0_25px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400">
            View Projects
          </a>
          <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Contact Ahmad
          </a>
        </motion.div>
      </div>
    </section>
  )
}
