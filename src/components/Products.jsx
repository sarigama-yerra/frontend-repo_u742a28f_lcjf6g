import { products } from '../data/products'
import ProductCard from './ProductCard'
import Reveal from './Reveal'

export default function Products({ onBuy }) {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Choose your system</h2>
              <p className="text-slate-600">Minimal checkout. Secure payments. Fast delivery.</p>
            </div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <ProductCard product={p} onBuy={onBuy} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
