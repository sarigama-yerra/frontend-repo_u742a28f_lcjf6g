import { motion } from 'framer-motion'
import Reveal from './Reveal'

const steps = [
  { title: 'Browse', desc: 'Land on a single page with product cards and specs.' },
  { title: 'Checkout', desc: 'Tap Shop Now and fill name, phone, address, pincode.' },
  { title: 'Pay', desc: 'Pay securely with Razorpay. Auto fallback to Cashfree/Stripe.' },
  { title: 'Track', desc: 'Get AWB & live tracking via Shiprocket/Delhivery.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-white rounded-2xl border p-6 shadow-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-100"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring' }}
              />
              <div className="text-blue-600 font-semibold">Step {i + 1}</div>
              <div className="mt-1 font-semibold text-slate-900">{s.title}</div>
              <div className="text-slate-600 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
