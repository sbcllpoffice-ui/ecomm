import {  useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { addProduct, getAbout, getDealIn, getProducts, saveProducts, setAbout, setDealIn, DEFAULT_TYPES } from '../data/products'
import type { Product } from '../data/products'

function Admin() {
  // About section
  const [about, setAboutText] = useState<string>(getAbout())

  // Deal in list
  const [dealInInput, setDealInInput] = useState<string>(getDealIn().join(', '))

  // Product types
  const existingTypes = useMemo(() => Array.from(new Set([...DEFAULT_TYPES, ...getDealIn()])), [])
  const [typeList, setTypeList] = useState<string[]>(existingTypes)
  const [newType, setNewType] = useState('')

  // Add product
  const [name, setName] = useState('')
  const [type, setType] = useState<string>('Grease')
  const [imageUrl, setImageUrl] = useState('')
  const [fileData, setFileData] = useState<string>('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState<string>('')
  const [minQty, setMinQty] = useState<string>('')
  const [favorite, setFavorite] = useState(false)

  function saveAboutAndDealIn() {
    setAbout(about)
    const parts = dealInInput.split(',').map(s => s.trim()).filter(Boolean)
    setDealIn(parts)
    setTypeList(Array.from(new Set([...parts, ...typeList])))
    alert('Saved About and Deal In list')
  }

  function onAddType(e: FormEvent) {
    e.preventDefault()
    const t = newType.trim()
    if (!t) return
    const updated = Array.from(new Set([t, ...typeList]))
    setTypeList(updated)
    setDealIn(updated)
    setNewType('')
  }

  function onFileChange(file?: File) {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setFileData(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  function addNewProduct(e: FormEvent) {
    e.preventDefault()
    if (!name) return alert('Name is required')
    const id = `p_${Date.now()}`
    const createdAt = new Date().toISOString()
    const p: Product = {
      id,
      name,
      description,
      imageUrl: fileData || imageUrl,
      createdAt,
      favorite,
      type,
      price: price ? Number(price) : undefined,
      minimumQuantity: minQty ? Number(minQty) : undefined,
    }
    addProduct(p)
    setName(''); setDescription(''); setImageUrl(''); setFileData(''); setPrice(''); setMinQty(''); setFavorite(false)
    alert('Product added')
  }

  function removeProduct(id: string) {
    const list = getProducts().filter(p => p.id !== id)
    saveProducts(list)
  }

  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold">Admin Panel</h2>
        <p className="mt-1 text-gray-600">Edit About, What we deal in, and manage products.</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="text-lg font-semibold">About</h3>
        <textarea value={about} onChange={(e)=>setAboutText(e.target.value)} className="mt-2 h-28 w-full rounded-md border border-gray-300 p-2" />
        <h3 className="mt-4 text-lg font-semibold">What we deal in</h3>
        <p className="mt-1 text-sm text-gray-600">Comma separated list</p>
        <input value={dealInInput} onChange={(e)=>setDealInInput(e.target.value)} className="mt-2 w-full rounded-md border border-gray-300 p-2" />
        <button onClick={saveAboutAndDealIn} className="mt-3 rounded-md bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-700">Save</button>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="text-lg font-semibold">Add Product</h3>
        <form onSubmit={addNewProduct} className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="rounded-md border border-gray-300 p-2" />
          <div className="flex gap-2">
            <select value={type} onChange={(e)=>setType(e.target.value)} className="w-full rounded-md border border-gray-300 p-2">
              {typeList.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <form onSubmit={onAddType} className="flex gap-2">
              <input value={newType} onChange={(e)=>setNewType(e.target.value)} placeholder="New type" className="w-28 rounded-md border border-gray-300 p-2" />
              <button className="rounded-md bg-gray-800 px-2 py-1 text-white">Add</button>
            </form>
          </div>
          <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="Image URL (or upload)" className="rounded-md border border-gray-300 p-2" />
          <input type="file" accept="image/*" onChange={(e)=>onFileChange(e.target.files?.[0])} className="rounded-md border border-gray-300 p-2" />
          <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description (optional)" className="h-24 rounded-md border border-gray-300 p-2 md:col-span-2" />
          <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price (optional)" className="rounded-md border border-gray-300 p-2" />
          <input value={minQty} onChange={(e)=>setMinQty(e.target.value)} placeholder="Minimum Qty (optional)" className="rounded-md border border-gray-300 p-2" />
          <label className="flex items-center gap-2 text-sm md:col-span-2"><input type="checkbox" checked={favorite} onChange={(e)=>setFavorite(e.target.checked)} /> Mark as featured (carousel)</label>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="rounded-md bg-green-600 px-3 py-1.5 text-white hover:bg-green-700">Add Product</button>
          </div>
        </form>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="text-lg font-semibold">Existing Products</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {getProducts().map(p => (
            <div key={p.id} className="overflow-hidden rounded-lg border border-gray-200">
              <img src={p.imageUrl} alt={p.name} className="h-32 w-full object-cover" />
              <div className="p-3">
                <p className="font-medium">{p.name}</p>
                <p className="text-xs text-gray-500">{p.type ?? '—'}</p>
                <div className="mt-2 flex justify-end gap-2">
                  <button onClick={()=>removeProduct(p.id)} className="rounded-md bg-red-600 px-2 py-1 text-xs text-white hover:bg-red-700">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Admin


