import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Products({ onBuy }) {
  return (
    <section id="products" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Choose your system</h2>
            <p className="text-slate-600">Minimal checkout. Secure payments. Fast delivery.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onBuy={onBuy} />
          ))}
        </div>
      </div>
    </section>
  )
}
