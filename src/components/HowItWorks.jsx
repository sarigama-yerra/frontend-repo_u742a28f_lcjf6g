import { motion } from 'framer-motion'

const steps = [
  { title: 'Browse', desc: 'Land on a single page with product cards and specs.' },
  { title: 'Checkout', desc: 'Tap Shop Now and fill name, phone, address, pincode.' },
  { title: 'Pay', desc: 'Pay securely with Razorpay. Auto fallback to Cashfree/Stripe.' },
  { title: 'Track', desc: 'Get AWB & live tracking via Shiprocket/Delhivery.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl border p-5 shadow-sm">
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
