export default function DetailModal({ product, open, onClose, onAddToCart }) {
  if (!open || !product) return null

  const handleAddToCart = () => {
    onAddToCart(product)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[10002] flex items-center justify-center bg-black/60 p-4" onClick={onClose} role="presentation">
      <div
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-y-auto rounded-lg bg-white shadow-xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex shrink-0 items-center justify-center border-b border-[#a3a5a5] p-4 md:w-2/5 md:border-b-0 md:border-r">
          <img src={product.image} alt={product.name} className="max-h-64 w-full object-contain" />
        </div>
        <div className="flex flex-col p-6 leading-7">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h2 className="text-lg font-normal">{product.name}</h2>
            <button type="button" className="text-2xl leading-none" onClick={onClose}>×</button>
          </div>
          <div className="mb-2 flex items-center gap-1">
            <span>{product.rating}</span>
            <img className="h-[19px]" src="/images/4 stars.png" alt="" />
            <span>({product.reviewCount})</span>
          </div>
          <p className="mb-1 text-2xl font-medium">
            <span>{product.currency}</span>
            {product.price}
          </p>
          <p className="mb-4">
            List: <span className="line-through">{product.listPrice}</span>
          </p>
          {product.blocks
            ?.filter((block) => block.type === 'text')
            .map((block) => (
              <p key={block.value}>{block.value}</p>
            ))}
          <button
            type="button"
            className="mt-4 w-fit rounded-[20px] bg-[rgb(235,214,21)] px-8 py-2.5 font-medium"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
