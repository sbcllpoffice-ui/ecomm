import Carousel from '../components/Carousel'
import { getProducts, getDealIn } from '../data/products'
import { Link } from 'react-router-dom'

function Home() {
  const products = getProducts()
  const favorites = products.filter((p) => p.favorite).slice(0, 3)
  const items = favorites.map((f) => ({ id: f.id, title: f.name, imageUrl: f.imageUrl }))
  const allByTime = [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  const dealIn = getDealIn()

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <p className="mt-2 text-gray-600">Our top picks in petroleum-based products.</p>
        <div className="mt-4">
          <Carousel items={items} slideClassName="h-44 sm:h-56 md:h-64" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">What we deal in</h2>
        <p className="mt-2 text-gray-600">A snapshot of our core product lines.</p>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {dealIn.map((item) => (
            <li key={item} className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">All Products</h2>
        <p className="mt-2 text-gray-600">Newest first.</p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allByTime.map((p) => (
            <Link to={`/products/${p.id}`} key={p.id} className="block overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <img src={p.imageUrl} alt={p.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-600">{p.description}</p>
                <p className="mt-2 text-xs text-gray-400">Added {new Date(p.createdAt).toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home


