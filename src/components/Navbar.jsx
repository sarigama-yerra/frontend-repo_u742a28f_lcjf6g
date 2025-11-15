import { Menu, ShoppingCart, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ onCartClick, onAdminClick }) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="SWT" className="h-8 w-8" />
          <span className="font-semibold text-slate-800">Smart Water Tank</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.button whileTap={{ scale: 0.95 }} onClick={onAdminClick} className="p-2 hover:bg-slate-100 rounded-md text-slate-600" aria-label="Admin">
            <BarChart3 size={20} />
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={onCartClick} className="p-2 hover:bg-slate-100 rounded-md text-slate-600" aria-label="Cart">
            <ShoppingCart size={20} />
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="p-2 hover:bg-slate-100 rounded-md text-slate-600 lg:hidden" aria-label="Menu">
            <Menu size={20} />
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
