import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Checkout from './components/Checkout'
import Footer from './components/Footer'

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar onCartClick={() => startCheckout(null)} onAdminClick={() => alert('Admin dashboard is part of backend scope. UI demo only.')} />
      <main>
        <Hero onShopNow={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} />
        <Products onBuy={startCheckout} />
        <HowItWorks />
      </main>
      <Footer />

      <Checkout product={selected} onClose={closeCheckout} onSuccess={successCheckout} />

      {thankyou && (
        <div className="fixed bottom-6 right-6 bg-white border rounded-xl shadow-lg p-4">
          <div className="font-semibold">Payment successful</div>
          <div className="text-sm text-slate-600">Gateway: {thankyou.gateway.toUpperCase()}</div>
          <div className="text-sm text-slate-600">Transaction: {thankyou.txnId}</div>
        </div>
      )}
    </div>
  )
}

export default App
