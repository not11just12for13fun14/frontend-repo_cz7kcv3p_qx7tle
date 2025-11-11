import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import Navbar from './components/Navbar'
import { motion } from 'framer-motion'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)

  const submitContact = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ type: 'success', message: 'Thanks! I will get back to you shortly.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900">
      <Navbar />

      <main>
        {/* Hero Section with Spline */}
        <section className="relative h-[90vh] w-full overflow-hidden" id="home">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 h-full flex flex-col md:flex-row items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">AI Content Creator · AI Educator · Full Stack Developer</p>
              <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">
                Agung Laksana Muda
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Innovative storytelling that blends code, creativity, and education. I craft interactive AI experiences and teach the tools behind them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">View Work</a>
                <a href="#contact" className="px-5 py-3 rounded-md bg-white/80 border border-gray-200 hover:bg-white transition">Contact</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold">About</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                I create high-impact educational content and products in AI, from hands-on tutorials to production-grade applications. My background spans full-stack engineering, ML prototyping, and curriculum design.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <li className="px-3 py-2 bg-white rounded-md border">Generative AI</li>
                <li className="px-3 py-2 bg-white rounded-md border">FastAPI & React</li>
                <li className="px-3 py-2 bg-white rounded-md border">RAG Systems</li>
                <li className="px-3 py-2 bg-white rounded-md border">Prompt Engineering</li>
                <li className="px-3 py-2 bg-white rounded-md border">Storytelling</li>
                <li className="px-3 py-2 bg-white rounded-md border">Cloud & DevOps</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Signature Teaching Style</h3>
              <p className="mt-3 text-gray-700">Project-first, narrative-driven, and highly practical. I turn complex AI ideas into delightful interactive experiences.</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-indigo-50">Short-form explainers</div>
                <div className="p-3 rounded-lg bg-purple-50">Live coding sessions</div>
                <div className="p-3 rounded-lg bg-pink-50">Open-source templates</div>
                <div className="p-3 rounded-lg bg-blue-50">Community challenges</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Selected Work</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { title: 'AI Story Studio', desc: 'Generative story engine with character memory and voice.' },
                { title: 'RAG Starter Kit', desc: 'Production-ready template for knowledge-grounded chat.' },
                { title: 'Vision + LLM Demos', desc: 'Interactive explainers for multimodal AI.' },
              ].map((card, i) => (
                <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group rounded-xl border p-6 hover:shadow-md bg-gradient-to-br from-gray-50 to-white">
                  <div className="h-40 rounded-lg bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200" />
                  <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching */}
        <section id="teaching" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Teaching</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { title: 'YouTube Channel', cta: 'Watch Episodes', href: 'https://youtube.com' },
                { title: 'Workshops', cta: 'Book a Session', href: '#contact' },
                { title: 'Courses', cta: 'Get the Curriculum', href: '#contact' },
              ].map((t, i) => (
                <motion.a key={t.title} href={t.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="block rounded-xl border p-6 bg-white hover:shadow-md">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{t.cta}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-gradient-to-b from-white to-indigo-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-2 text-gray-700">Have a project, collaboration, or teaching request? Let’s talk.</p>
            <form onSubmit={submitContact} className="mt-8 grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} required placeholder="Name" className="px-4 py-3 rounded-md border bg-white" />
                <input type="email" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} required placeholder="Email" className="px-4 py-3 rounded-md border bg-white" />
              </div>
              <input value={form.subject} onChange={(e)=>setForm({ ...form, subject: e.target.value })} placeholder="Subject (optional)" className="px-4 py-3 rounded-md border bg-white" />
              <textarea value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} required placeholder="Your message" rows="5" className="px-4 py-3 rounded-md border bg-white" />
              <div className="flex items-center gap-3">
                <button disabled={sending} className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-60">
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
                {status && (
                  <span className={status.type === 'success' ? 'text-green-600' : 'text-red-600'}>{status.message}</span>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Agung Laksana Muda · Built with love and a bit of AI magic
      </footer>
    </div>
  )
}
