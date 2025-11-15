import { motion } from 'framer-motion'

export default function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
            Smart Water Tank Auto Cut-Off Systems
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Stop overflows, save water, and automate your home. No login. Direct checkout with secure payment.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button onClick={onShopNow} className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:shadow-lg hover:bg-blue-700 transition-all">
              Shop Now
            </button>
            <a href="#how" className="px-6 py-3 rounded-lg bg-white text-slate-700 font-semibold shadow border hover:bg-slate-50 transition-all">How it works</a>
          </div>
          <div className="mt-6 text-sm text-slate-500">
            • Razorpay primary • Cashfree/Stripe fallback • Shiprocket/Delhivery tracking
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
          <img src="https://images.unsplash.com/photo-1597173942310-1f9532d282c3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbWFydCUyMFdhdGVyJTIwVGFua3xlbnwwfDB8fHwxNzYzMjQ4MjkxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Smart Water Tank" className="rounded-xl shadow-2xl" />
          <motion.div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 w-52" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <p className="text-sm font-semibold">Auto Cut-Off Active</p>
            <p className="text-xs text-slate-500">Dry-run protection | Surge safe</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
