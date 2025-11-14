import { motion } from 'framer-motion'

const quotes = [
  'Ahmad delivers clarity through data.',
  'Brilliant at turning numbers into stories.',
  'Combines AI depth with business sense.',
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0a0f1f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Testimonials
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-lg text-white/90">“{q}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
