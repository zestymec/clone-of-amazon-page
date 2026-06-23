export default function ProductCard({ product, onSelect, onAddToCart }) {
  const handleCardClick = () => {
    onSelect?.(product)
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    onAddToCart?.(product)
  }

  return (
    <div
      className="flex cursor-pointer flex-col rounded-[10px] border border-[#a3a5a5] p-2.5 transition-shadow hover:shadow-md md:flex-row"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >
      <div className="flex flex-col items-center border-b border-[#a3a5a5] pb-2.5 md:mr-2.5 md:border-b-0 md:border-r md:pb-0">
        <img
          className="my-auto max-h-48 w-full max-w-[200px] object-contain md:max-w-[17vw]"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col leading-[27px] pt-2.5 md:pt-0">
        <h3 className="mb-2.5 flex flex-wrap font-normal">{product.name}</h3>
        <div className="mb-[5px] flex flex-row items-center">
          <p>{product.rating}</p>
          <img className="h-[19px]" src="/images/4 stars.png" alt="" />
          <p>({product.reviewCount})</p>
        </div>
        <h2 className="mb-[5px] font-medium">
          <span>{product.currency}</span>
          {product.price}
        </h2>
        <p>
          List: <span className="line-through">{product.listPrice}</span>
        </p>
        {product.blocks?.map((block, i) => {
          if (block.type === 'button') {
            return (
              <div key={i}>
                <button
                  type="button"
                  className="mb-2.5 mt-2.5 cursor-pointer rounded-[20px] border-none bg-[rgb(235,214,21)] px-5 py-2.5"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            )
          }
          if (block.suffix) {
            const match = block.value.match(/^(.+?)\s(\(.+\))$/)
            if (match) {
              return (
                <p key={i}>
                  {match[1]} <span>{match[2]}</span>
                </p>
              )
            }
          }
          return <p key={i}>{block.value}</p>
        })}
      </div>
    </div>
  )
}
