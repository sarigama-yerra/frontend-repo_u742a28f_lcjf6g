import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t mt-16 py-10 text-center text-sm text-slate-500 bg-white/70 backdrop-blur relative overflow-hidden">
      <motion.div
        className="absolute inset-x-0 -top-6 h-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          © {new Date().getFullYear()} Smart Water Tank. All rights reserved.
        </motion.p>
        <motion.p className="mt-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          Secure payments via Razorpay • Fast shipping via Shiprocket/Delhivery
        </motion.p>
      </div>
    </footer>
  )
}
