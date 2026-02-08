import { useState } from 'react'
import { getProducts } from '../data/products'
import { Link } from 'react-router-dom'

type ViewMode = 'list' | 'grid'

function Products() {
  const [view, setView] = useState<ViewMode>('grid')

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Products</h2>
          <p className="mt-2 text-gray-600">Browse our product listings.</p>
        </div>
        <div className="inline-flex rounded-md border border-gray-200 bg-white p-1 text-sm">
          <button
            className={`rounded px-2 py-1 ${view === 'list' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setView('list')}
          >
            1 Col
          </button>
          <button
            className={`rounded px-2 py-1 ${view === 'grid' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setView('grid')}
          >
            2 Col
          </button>
        </div>
      </div>

      <div className={`mt-6 grid gap-4 ${view === 'grid' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {getProducts().map((p) => (
          <Link to={`/products/${p.id}`} key={p.id} className="block overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow cursor-pointer">
            <img src={p.imageUrl} alt={p.name} className={`${view === 'list' ? 'h-48' : 'h-40'} w-full object-cover`} />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-gray-600">{p.description}</p>
              <p className="mt-2 text-xs text-gray-400">Added {new Date(p.createdAt).toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Products


