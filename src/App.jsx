import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import SidebarFilters from './components/SidebarFilters'
import ProductModal from '@/components/modals/ProductModal'
import DetailModal from '@/components/modals/DetailModal'
import { useCart } from '@/hooks/useCart'
import { useProducts } from '@/hooks/useProducts'
import { products as initialProducts, relatedSearches, footerColumns, sortOptions } from './data/products'

export default function App() {
  const { addToCart, cartCount } = useCart()
  const { filteredProducts, activeFilters, toggleFilter, clearFilters, addProduct } =
    useProducts(initialProducts)

  const [productModalOpen, setProductModalOpen] = useState(false)
  const [detailProduct, setDetailProduct] = useState(null)

  const handleAddProduct = (formData) => {
    addProduct(formData)
  }

  const handleSelectProduct = (product) => {
    setDetailProduct(product)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onAddProductClick={() => setProductModalOpen(true)}
      />



      <div className="mx-auto flex w-full max-w-[98vw] flex-col gap-2 px-2 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <p className="text-sm sm:text-lg">
          1-{filteredProducts.length} of over 100,000 results for{' '}
          <span className="font-bold text-[rgb(170,63,6)]">&quot;gaming&quot;</span>
        </p>
        <select className="w-full rounded-[5px] border border-[#070707] sm:w-auto">
          {sortOptions.map((opt) => (
            <option key={opt} value="">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <hr className="m-0 mb-[2vh] shadow-[2px_2px_3px_rgba(95,95,95,0.201)] text-[rgba(46,45,45,0.485)]" />

      <div className="flex flex-col lg:flex-row">
        <SidebarFilters
          activeFilters={activeFilters}
          onToggleFilter={toggleFilter}
          onClearFilters={clearFilters}
        />

        <div className="flex min-w-0 flex-1 flex-col px-2 sm:px-4 lg:px-0">
          <h2 className="mb-2">Results</h2>
          <p className="mb-[5px] text-[#6d6e6f]">Check each product page for other buying options.</p>

          <div className="mx-auto flex w-full max-w-full flex-col gap-2.5 lg:max-w-[80vw]">
            {filteredProducts.length === 0 ? (
              <p className="py-8 text-center text-gray-500">No products match the selected filters.</p>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={handleSelectProduct}
                  onAddToCart={handleAddToCart}
                />
              ))
            )}

            <div>
              <h2>Related searches</h2>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {[0, 2, 4].map((start) => (
                  <div key={start} className="flex flex-col">
                    {relatedSearches.slice(start, start + 2).map((term, i) => (
                      <div
                        key={`${start}-${i}`}
                        className="flex cursor-pointer flex-row items-center gap-3 border border-black px-4 py-2.5 text-base sm:gap-5 sm:px-8 sm:text-xl"
                      >
                        <i className="fa-solid fa-magnifying-glass" />
                        <p>{term}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[3vh]">
              <h2 className="m-2.5 ml-0">Need help?</h2>
              <p className="text-lg text-[rgb(0,136,255)]">
                Visit the help section <span className="text-black">or</span> contact us
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="m-0 my-[2vw] w-full text-[rgba(141,140,140,0.277)]" />

      <div>
        <h1 className="flex justify-center px-4 text-center text-xl sm:text-3xl">
          See personalized recommendations
        </h1>
        <button
          type="button"
          className="mx-auto my-2.5 flex rounded-[20px] border-none bg-[rgb(235,214,21)] px-10 py-2.5"
        >
          Signin
        </button>
      </div>

      <div className="flex items-center justify-center px-4">
        New Customer? <span className="cursor-pointer text-[rgb(36,103,229)]">Started Here.</span>
      </div>

      <hr className="m-0 mb-[5vh] mt-[4vh] w-full text-[rgba(100,99,99,0.277)]" />

      <div
        className="flex cursor-pointer items-center justify-center bg-[#1f2d41] py-5 text-white hover:bg-[#283951a9]"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to Top
      </div>

      <Footer columns={footerColumns} />

      <ProductModal
        open={productModalOpen}
        onClose={() => setProductModalOpen(false)}
        onSubmit={handleAddProduct}
      />

      <DetailModal
        product={detailProduct}
        open={Boolean(detailProduct)}
        onClose={() => setDetailProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </>
  )
}
