import { motion } from 'framer-motion'
import CurvedBackdrop from './CurvedBackdrop'
import Reveal from './Reveal'

export default function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden pt-28">
      <CurvedBackdrop>
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900"
              >
                Smart Water Tank Auto Cut-Off Systems
              </motion.h1>
              <Reveal delay={0.1}>
                <p className="mt-4 text-lg text-slate-600">
                  Stop overflows, save water, and automate your home. No login. Direct checkout with secure payment.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex items-center gap-4">
                  <button onClick={onShopNow} className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:shadow-lg hover:bg-blue-700 transition-all">
                    Shop Now
                  </button>
                  <a href="#how" className="px-6 py-3 rounded-lg bg-white text-slate-700 font-semibold shadow border hover:bg-slate-50 transition-all">How it works</a>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-6 text-sm text-slate-500">
                  • Razorpay primary • Cashfree/Stripe fallback • Shiprocket/Delhivery tracking
                </div>
              </Reveal>
            </div>
          </Reveal>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-sm border border-white/60" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1597173942310-1f9532d282c3?auto=format&fit=crop&w=1600&q=80"
                  alt="Smart Water Tank"
                  className="rounded-2xl"
                />

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 w-56"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm font-semibold">Auto Cut-Off Active</p>
                  <p className="text-xs text-slate-500">Dry-run protection | Surge safe</p>
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-full px-4 py-2 shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                >
                  Save Water
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </CurvedBackdrop>
    </section>
  )
}
