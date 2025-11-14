import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0f1f] py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-white sm:text-4xl"
        >
          About Me
        </motion.h2>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
            <p className="mt-3 text-xs text-white/60">Professional headshot placeholder</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3"
          >
            <p className="text-white/80">
              I’m Ahmad — a junior beginner Principal AI Engineer, Principal Data Scientist, Data Engineer, and Data Analyst with proven Project & Product Management leadership. I bring end-to-end execution across AI systems, data pipelines, analytics, and strategy, aligning complex tech with business outcomes.
            </p>
            <p className="mt-4 text-white/80">
              I’ve delivered 6 real-world data-driven projects with measurable impact — from predictive modeling and LLM-enabled automation to executive dashboards that drive decisions.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-cyan-300">Vision</p>
                <p className="text-sm text-white/70">Turning data into intelligent business stories.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-cyan-300">Leadership</p>
                <p className="text-sm text-white/70">Agile, cross-functional collaboration, and stakeholder alignment.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
