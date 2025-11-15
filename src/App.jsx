import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import ArcText from './components/ArcText'

function FloatingBadge() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <motion.div ref={ref} style={{ y, rotate }} className="hidden lg:block fixed right-6 top-24 z-40">
      <div className="relative">
        <ArcText className="opacity-80" />
        <motion.div className="absolute inset-0 grid place-content-center">
          <div className="h-14 w-14 rounded-full bg-blue-600 shadow-lg" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function App() {
  const [selected, setSelected] = useState(null)
  const [thankyou, setThankyou] = useState(null)

  const startCheckout = (p) => setSelected(p)
  const closeCheckout = () => setSelected(null)
  const successCheckout = ({ txnId, gateway }) => {
    setSelected(null)
    setThankyou({ txnId, gateway })
    setTimeout(() => setThankyou(null), 6000)
  }

  // Subtle page fade on mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: mounted ? 1 : 0 }} transition={{ duration: 0.5 }} className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar onCartClick={() => startCheckout(null)} onAdminClick={() => alert('Admin dashboard is part of backend scope. UI demo only.')} />
      <FloatingBadge />
      <main>
        <Hero onShopNow={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} />
        <Products onBuy={startCheckout} />
        <HowItWorks />
      </main>
      <Footer />

      <Checkout product={selected} onClose={closeCheckout} onSuccess={successCheckout} />

      {thankyou && (
        <motion.div initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 80, opacity: 0 }} className="fixed bottom-6 right-6 bg-white border rounded-xl shadow-lg p-4">
          <div className="font-semibold">Payment successful</div>
          <div className="text-sm text-slate-600">Gateway: {thankyou.gateway.toUpperCase()}</div>
          <div className="text-sm text-slate-600">Transaction: {thankyou.txnId}</div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default App
