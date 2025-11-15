import { motion } from 'framer-motion'

export default function ProductCard({ product, onBuy }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="bg-white rounded-2xl shadow-sm border p-4 flex flex-col relative overflow-hidden"
    >
      <motion.div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: 'spring' }}
      />

      <div className="aspect-video overflow-hidden rounded-lg relative">
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          initial={{ scale: 1.06 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <h3 className="mt-3 font-semibold text-slate-900">{product.name}</h3>
      <div className="mt-1 flex items-center gap-2 text-sm">
        <span className="text-blue-600 font-bold">₹{product.price}</span>
        <span className="text-slate-400 line-through">₹{product.mrp}</span>
      </div>
      <ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-1">
        {product.specs.map((s, i) => (
          <motion.li key={i} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            {s}
          </motion.li>
        ))}
      </ul>
      <motion.button
        onClick={() => onBuy(product)}
        className="mt-4 w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        whileTap={{ scale: 0.98 }}
      >
        Shop Now
      </motion.button>
    </motion.div>
  )
}
