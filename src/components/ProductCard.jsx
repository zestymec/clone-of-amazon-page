export default function ProductCard({ product }) {
  return (
    <div className="flex flex-row border border-[#a3a5a5] rounded-[10px] p-2.5">
      <div className="flex flex-col border-r border-[#a3a5a5] mr-2.5">
        <img className={product.imageClass} src={product.image} alt="" />
      </div>
      <div className="flex flex-col leading-[27px]">
        <h3 className="flex flex-wrap font-normal mb-2.5">{product.name}</h3>
        <div className="flex flex-row items-center mb-[5px]">
          <p>{product.rating}</p>
          <img className="h-[19px]" src="/images/4 stars.png" alt="" />
          <p>({product.reviewCount})</p>
        </div>
        <h2 className="font-medium mb-[5px]">
          <span>{product.currency}</span>
          {product.price}
        </h2>
        <p>
          List: <span className="line-through">{product.listPrice}</span>
        </p>
        {product.blocks.map((block, i) => {
          if (block.type === 'button') {
            return (
              <div key={i}>
                <button
                  type="button"
                  className="bg-[rgb(235,214,21)] px-5 rounded-[20px] border-none py-2.5 cursor-pointer mt-2.5 mb-2.5"
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
