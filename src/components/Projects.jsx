import { motion } from 'framer-motion'

const projects = [
  {
    title: 'LLM-Powered Customer Support Automation',
    description: 'Problem: Long response times and inconsistent support quality. Solution: Fine-tuned LLM with retrieval for FAQs and ticket triage. Result: 45% faster resolution and +18 NPS.',
    stack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
  },
  {
    title: 'Demand Forecasting for Retail',
    description: 'Problem: Overstock and stockouts across regions. Solution: Time series models with feature stores. Result: 12% inventory cost reduction and +8% availability.',
    stack: ['Python', 'XGBoost', 'Prophet', 'Airflow', 'BigQuery'],
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Problem: Leaders lacked visibility into KPIs. Solution: Streaming ETL with sleek BI dashboards. Result: Daily active insights and faster decisions.',
    stack: ['Spark', 'Kafka', 'dbt', 'Tableau', 'AWS'],
  },
  {
    title: 'Churn Prediction & Retention',
    description: 'Problem: High churn in subscription product. Solution: Predictive modeling and targeted campaigns. Result: 9% churn reduction quarter-over-quarter.',
    stack: ['PyTorch', 'Sklearn', 'Snowflake', 'Power BI'],
  },
  {
    title: 'Computer Vision Quality Control',
    description: 'Problem: Manual defect detection on assembly. Solution: CNN-based visual inspection pipeline. Result: 35% fewer defects and 20% faster throughput.',
    stack: ['TensorFlow', 'OpenCV', 'FastAPI', 'Docker'],
  },
  {
    title: 'Executive Storytelling Dashboards',
    description: 'Problem: Fragmented reporting across teams. Solution: Unified KPI narratives with drilldowns. Result: 3-hour weekly time savings per leader.',
    stack: ['Looker', 'BigQuery', 'Fivetran', 'Data Studio'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0f1f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                  <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.25),transparent_40%)]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/80">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
                      {s}
                    </span>
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
