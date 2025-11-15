import { motion } from 'framer-motion'

export default function ProductCard({ product, onBuy }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white rounded-xl shadow-sm border p-4 flex flex-col">
      <div className="aspect-video overflow-hidden rounded-lg">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-3 font-semibold text-slate-900">{product.name}</h3>
      <div className="mt-1 flex items-center gap-2 text-sm">
        <span className="text-blue-600 font-bold">₹{product.price}</span>
        <span className="text-slate-400 line-through">₹{product.mrp}</span>
      </div>
      <ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-1">
        {product.specs.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      <button onClick={() => onBuy(product)} className="mt-4 w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
        Shop Now
      </button>
    </motion.div>
  )
}
