import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import SidebarFilters from './components/SidebarFilters'
import { products, relatedSearches, footerColumns, sortOptions } from './data/products'

export default function App() {
  const [activeFilter, setActiveFilter] = useState(null)

  const filteredProducts = activeFilter
    ? products.filter((product) => product.tags.includes(activeFilter))
    : products

  return (
    <>
      <Header />

      <div className="flex flex-row w-[98vw] py-2.5 justify-between mx-auto">
        <p className="text-lg">
          1-48 of over 100,000 results for <span className="font-bold text-[rgb(170,63,6)]">&quot;gaming&quot;</span>
        </p>
        <select className="rounded-[5px] border border-[#070707]">
          {sortOptions.map((opt) => (
            <option key={opt} value="">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <hr className="m-0 mb-[2vh] shadow-[2px_2px_3px_rgba(95,95,95,0.201)] text-[rgba(46,45,45,0.485)]" />

      <div className="flex flex-row">
        <SidebarFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="flex flex-col flex-1 px-2 lg:px-0">
          <h2 className="mb-2">Results</h2>
          <p className="text-[#6d6e6f] mb-[5px]">Check each product page for other buying options.</p>

          <div className="flex flex-col w-full lg:w-[80vw] mx-auto gap-2.5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

            <div>
              <h2>Related searches</h2>
              <div className="flex flex-row gap-2.5 flex-wrap">
                <div className="flex flex-col">
                  {relatedSearches.slice(0, 2).map((term, i) => (
                    <div
                      key={`col1-${i}`}
                      className="flex flex-row py-2.5 px-[60px] gap-5 border border-black cursor-pointer text-xl"
                    >
                      <i className="fa-solid fa-magnifying-glass" />
                      <p>{term}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  {relatedSearches.slice(2, 4).map((term, i) => (
                    <div
                      key={`col2-${i}`}
                      className="flex flex-row py-2.5 px-[60px] gap-5 border border-black cursor-pointer text-xl"
                    >
                      <i className="fa-solid fa-magnifying-glass" />
                      <p>{term}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  {relatedSearches.slice(4, 6).map((term, i) => (
                    <div
                      key={`col3-${i}`}
                      className="flex flex-row py-2.5 px-[60px] gap-5 border border-black cursor-pointer text-xl"
                    >
                      <i className="fa-solid fa-magnifying-glass" />
                      <p>{term}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-[3vh]">
              <h2 className="m-2.5 ml-0">Need help?</h2>
              <p className="text-[rgb(0,136,255)] text-lg">
                Visit the help section <span className="text-black">or</span> contact us
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="m-0 my-[2vw] w-full text-[rgba(141,140,140,0.277)]" />

      <div>
        <h1 className="flex justify-center">See personalized recommendations</h1>
        <button
          type="button"
          className="bg-[rgb(235,214,21)] px-10 rounded-[20px] border-none py-2.5 cursor-pointer my-2.5 flex mx-auto"
        >
          Signin
        </button>
      </div>

      <div className="flex justify-center items-center">
        New Customer? <span className="text-[rgb(36,103,229)] cursor-pointer">Started Here.</span>
      </div>

      <hr className="m-0 mt-[4vh] mb-[5vh] w-full text-[rgba(100,99,99,0.277)]" />

      <div
        className="flex justify-center items-center py-5 bg-[#1f2d41] text-white cursor-pointer hover:bg-[#283951a9]"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        Back to Top
      </div>

      <Footer columns={footerColumns} />
    </>
  )
}
