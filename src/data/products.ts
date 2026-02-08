export type Product = {
	id: string
	name: string
	description: string
	imageUrl: string
	createdAt: string
	favorite?: boolean
	price?: number
	minimumQuantity?: number
	type?: string
}

import { readJson, writeJson } from '../lib/storage'

const DEFAULT_PRODUCTS: Product[] = [
	{
		id: 'p1',
		name: 'Premium Grease',
		description: 'High-performance grease for industrial machinery.',
		imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
		favorite: true,
		type: 'Grease',
	},
	{
		id: 'p2',
		name: 'Red Oil',
		description: 'Refined red oil suitable for automotive engines.',
		imageUrl: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
		favorite: true,
		type: 'Oil',
	},
	{
		id: 'p3',
		name: 'Black Oil',
		description: 'Heavy-duty black oil for industrial applications.',
		imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
		favorite: true,
		type: 'Oil',
	},
	{
		id: 'p4',
		name: 'Hydraulic Fluid',
		description: 'Reliable performance for hydraulic systems.',
		imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
		type: 'Fluid',
	},
	{
		id: 'p5',
		name: 'Gear Oil',
		description: 'Long-lasting protection for gearboxes and axles.',
		imageUrl: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
		type: 'Oil',
	},
]

const PRODUCTS_KEY = 'hoc_products'

export function getProducts(): Product[] {
	return readJson<Product[]>(PRODUCTS_KEY, DEFAULT_PRODUCTS)
}

export function saveProducts(list: Product[]) {
	writeJson(PRODUCTS_KEY, list)
}

export function addProduct(newProduct: Product) {
	const list = getProducts()
	let updated = [...list]
	if (newProduct.favorite) {
		const favorites = updated.filter(p => p.favorite)
		if (favorites.length >= 2) {
			// remove oldest favorite
			const oldest = favorites.sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime())[0]
			updated = updated.map(p => p.id === oldest.id ? { ...p, favorite: false } : p)
		}
	}
	updated.unshift(newProduct)
	saveProducts(updated)
}

export const DEFAULT_TYPES = ['Grease','Red Oil','Black Oil','Hydraulic Fluid','Gear Oil','Industrial Lubricants']

const ABOUT_KEY = 'hoc_about'
const DEALIN_KEY = 'hoc_dealin'

export function getAbout(): string {
	return readJson<string>(ABOUT_KEY, 'Hindustan Oil Company supplies reliable petroleum-based products. We focus on consistent quality, on-time delivery and long-term partnerships with industrial clients across India.')
}

export function setAbout(text: string) {
	writeJson(ABOUT_KEY, text)
}

export function getDealIn(): string[] {
	return readJson<string[]>(DEALIN_KEY, DEFAULT_TYPES)
}

export function setDealIn(items: string[]) {
	writeJson(DEALIN_KEY, items)
}
