import { useParams } from 'react-router-dom'
import { getProducts } from '../data/products'
import type { Product } from '../data/products'
import { useMemo, useState } from 'react'
import Modal from '../components/Modal'

function ProductDetail() {
	const { id } = useParams()
	const product: Product | undefined = useMemo(() => getProducts().find((p) => p.id === id), [id])
	const [open, setOpen] = useState(false)

	if (!product) return <p className="text-sm text-gray-600">Product not found.</p>

	return (
		<section className="grid grid-cols-1 gap-6 md:grid-cols-2">
			<img src={product.imageUrl} alt={product.name} className="h-64 w-full rounded-xl object-cover md:h-96" />
			<div>
				<h2 className="text-2xl font-semibold">{product.name}</h2>
				<p className="mt-2 text-gray-600">{product.description}</p>
				<div className="mt-4 space-y-1 text-sm text-gray-700">
					{product.type && <p>Type: {product.type}</p>}
					{typeof product.price === 'number' && <p>Price: ₹{product.price.toFixed(2)}</p>}
					{typeof product.minimumQuantity === 'number' && <p>Minimum Quantity: {product.minimumQuantity}</p>}
				</div>
				<button onClick={() => setOpen(true)} className="mt-6 inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">Enquiry</button>
			</div>

			<Modal open={open} onClose={() => setOpen(false)} title="Product Enquiry">
				<form
					onSubmit={(e) => {
						e.preventDefault()
						alert('Enquiry submitted! We will contact you shortly.')
						setOpen(false)
					}}
					className="space-y-3"
				>
					<input type="text" name="name" required placeholder="Your Name" className="w-full rounded-md border border-gray-300 p-2" />
					<input type="tel" name="phone" required placeholder="Phone Number" className="w-full rounded-md border border-gray-300 p-2" />
					<textarea name="message" placeholder="Message (optional)" className="h-24 w-full rounded-md border border-gray-300 p-2" />
					<input type="text" readOnly value={`Product: ${product.name}`} className="w-full rounded-md border border-gray-200 bg-gray-50 p-2 text-sm" />
					<div className="flex justify-end gap-2">
						<button type="button" onClick={() => setOpen(false)} className="rounded-md px-3 py-1.5 text-gray-700 hover:bg-gray-100">Cancel</button>
						<button type="submit" className="rounded-md bg-red-600 px-3 py-1.5 text-white hover:bg-red-700">Send</button>
					</div>
				</form>
			</Modal>
		</section>
	)
}

export default ProductDetail


