import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0a0f1f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-3"
          >
            <div className="grid gap-4">
              <div className="group">
                <label className="text-sm text-white/70">Name</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-cyan-400/60" placeholder="Your name" />
              </div>
              <div className="group">
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-cyan-400/60" placeholder="Your email" />
              </div>
              <div className="group">
                <label className="text-sm text-white/70">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-cyan-400/60" placeholder="Tell me about your project" />
              </div>
              <button className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-[#06101a] shadow-[0_0_25px_rgba(34,211,238,0.35)] transition hover:from-cyan-300 hover:to-blue-400">
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-white/80">Let’s create data-driven impact together.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10"><Linkedin className="h-5 w-5 text-cyan-300" /> LinkedIn</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10"><Github className="h-5 w-5 text-cyan-300" /> GitHub</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10"><Mail className="h-5 w-5 text-cyan-300" /> Email</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
