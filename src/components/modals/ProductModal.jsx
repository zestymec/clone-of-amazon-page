import { useState } from 'react'

const emptyForm = { title: '', price: '', imageUrl: '', rating: '' }

export default function ProductModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState(emptyForm)

  if (!open) return null

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.price || !form.imageUrl) return
    onSubmit(form)
    setForm(emptyForm)
    onClose()
  }

  return (
    <div className=" inset-0 z-[10002] flex items-center justify-center bg-black/60 p-4" onClick={onClose} role="presentation">
      <div
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Add Product</h2>
          <button type="button" className="text-2xl leading-none" onClick={onClose}>×</button>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="rounded border border-gray-300 px-3 py-2 outline-none focus:border-amazon-yellow"
            required
          />
          <input
            name="price"
            type="number"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="rounded border border-gray-300 px-3 py-2 outline-none focus:border-amazon-yellow"
            required
          />
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="rounded border border-gray-300 px-3 py-2 outline-none focus:border-amazon-yellow"
            required
          />
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            step="0.1"
            value={form.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="rounded border border-gray-300 px-3 py-2 outline-none focus:border-amazon-yellow"
          />
          <button
            type="submit"
            className="mt-2 rounded-[20px] bg-[rgb(235,214,21)] px-5 py-2.5 font-medium"
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  )
}
