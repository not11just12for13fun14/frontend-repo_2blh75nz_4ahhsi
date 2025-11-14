import { motion } from 'framer-motion'
import { BrainCircuit, Database, BarChart3, ClipboardList } from 'lucide-react'

const categories = [
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    items: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'LLMs'],
    color: 'from-cyan-500/30 to-blue-500/20',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    items: ['ETL', 'Airflow', 'Spark', 'AWS', 'BigQuery', 'Databricks'],
    color: 'from-blue-500/30 to-indigo-500/20',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Visualization',
    items: ['Tableau', 'Power BI', 'Looker', 'Plotly', 'Streamlit'],
    color: 'from-sky-500/30 to-cyan-500/20',
  },
  {
    icon: ClipboardList,
    title: 'Project & Product Management',
    items: ['Agile', 'Scrum', 'Leadership', 'Jira', 'Trello'],
    color: 'from-teal-500/30 to-emerald-500/20',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0a0f1f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.color}`} />
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <cat.icon className="h-6 w-6 text-cyan-300" />
                  <h3 className="text-xl font-medium">{cat.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {cat.items.map((item) => (
                    <div key={item} className="group">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          className="block h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        />
                      </div>
                      <p className="mt-2 text-sm text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
