import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Checkout({ product, onClose, onSuccess }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', phone: '', address: '', pincode: '' })
  const [gateway, setGateway] = useState('razorpay')
  const amount = useMemo(() => product?.price || 0, [product])

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const pay = async (e) => {
    e.preventDefault()
    await new Promise(r => setTimeout(r, 1000))
    onSuccess({ txnId: 'DEMO-' + Math.random().toString(36).slice(2, 8).toUpperCase(), gateway })
  }

  return (
    <AnimatePresence>
      {product && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="font-semibold">Direct Checkout</div>
              <motion.button whileTap={{ scale: 0.95 }} onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</motion.button>
            </div>

            <div className="p-4 grid gap-4">
              <div className="flex items-center gap-3">
                <img src={product.image} alt={product.name} className="h-16 w-28 object-cover rounded-lg" />
                <div>
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-blue-600 font-bold">₹{amount}</div>
                </div>
              </div>

              {step === 1 && (
                <motion.form onSubmit={() => setStep(2)} className="grid gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <input name="name" required placeholder="Full name" className="border rounded-lg px-3 py-2" value={form.name} onChange={update} />
                  <input name="phone" required placeholder="Phone" className="border rounded-lg px-3 py-2" value={form.phone} onChange={update} />
                  <input name="address" required placeholder="Address" className="border rounded-lg px-3 py-2" value={form.address} onChange={update} />
                  <input name="pincode" required placeholder="Pincode" className="border rounded-lg px-3 py-2" value={form.pincode} onChange={update} />
                  <motion.button whileTap={{ scale: 0.98 }} className="mt-2 bg-blue-600 text-white rounded-lg py-2 font-medium">Continue to payment</motion.button>
                </motion.form>
              )}

              {step === 2 && (
                <motion.form onSubmit={pay} className="grid gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="font-semibold">Select payment</div>
                  <div className="flex gap-3">
                    {['razorpay','cashfree','stripe'].map(g => (
                      <motion.button type="button" key={g} onClick={() => setGateway(g)} className={`px-4 py-2 rounded-lg border ${gateway===g?'border-blue-600 bg-blue-50 text-blue-700':'border-slate-200'}`} whileTap={{ scale: 0.95 }}>
                        {g}
                      </motion.button>
                    ))}
                  </div>
                  <motion.button whileTap={{ scale: 0.98 }} className="mt-2 bg-emerald-600 text-white rounded-lg py-2 font-medium">Pay ₹{amount}</motion.button>
                  <button type="button" onClick={() => setStep(1)} className="text-slate-500 text-sm">Back</button>
                </motion.form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
