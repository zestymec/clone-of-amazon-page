import { useState } from 'react'
import { navItems, mobileMenuItems, searchCategories } from '../data/products'

function LangDropdown({ className = '' }) {
  return (
    <div className={`absolute top-10 left-0 w-[260px] bg-white p-[15px] rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-[100] ${className}`}>
      <p className="font-bold">Change language</p>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" name="lang" defaultChecked className="mr-1.5 accent-orange-500" /> English - EN
      </label>
      <hr />
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> español - ES
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> العربية - AR
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> Deutsch - DE
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> Deutsch - DE
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> Deutsch - DE
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> Deutsch - DE
      </label>
      <hr />
      <p className="font-bold">Change currency</p>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" defaultChecked className="mr-1.5 accent-orange-500" /> PKR - Pakistani Rupee
      </label>
      <label className="block my-[3px] cursor-pointer text-sm">
        <input type="checkbox" className="mr-1.5 accent-orange-500" /> $ - USD - US Dollar
      </label>
      <p className="text-[rgb(67,67,208)] mb-1.5 cursor-pointer">See all</p>
      <hr />
      <p className="flex items-center gap-[5px]">
        <img className="w-5 h-5" src="/images/united-states.png" alt="" />
        You are shopping on
        <br /> Amazon.com
      </p>
      <p className="text-[rgb(67,67,208)] mb-1.5 text-center cursor-pointer">Change Country/region</p>
    </div>
  )
}

export default function Header() {
  const [langOpen, setLangOpen] = useState(false)
  const [signinOpen, setSigninOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header className="bg-amazon-dark">
        <div className="flex justify-between py-1 px-2.5 my-auto">
          <div className="flex justify-center items-center border border-amazon-dark hover:border-white">
            <img className="w-[114px] h-[46px]" src="/images/Amazon logo.png" alt="" />
          </div>

          <div className="hidden sm:flex flex-col justify-center items-center px-[3px] border border-amazon-dark hover:border-white">
            <p className="flex justify-center items-center text-white font-bold">Deliver To</p>
            <div className="flex items-center">
              <i className="fa-solid fa-location-dot text-white" />
              <h3 className="flex justify-center items-center text-white font-bold ml-0.5">Pakistan</h3>
            </div>
          </div>

          <div className="flex flex-row my-auto flex-1 mx-2 max-w-none lg:max-w-[50vw]">
            <select className="hidden md:block h-10 rounded-l-[5px] bg-[rgb(205,202,202)] border-none outline-none w-auto">
              {searchCategories.map((cat, i) => (
                <option key={`${cat}-${i}`}>{cat}</option>
              ))}
            </select>
            <input
              type="text"
              className="outline-none flex-1 md:w-[50vw] border-none focus:outline-none focus:shadow-none"
              placeholder="Search Anything"
            />
            <button type="button" className="w-[45px] h-10 rounded-r-[5px] bg-amazon-yellow border-none">
              <i className="fas fa-search" />
            </button>
          </div>

          <div
            className="hidden lg:flex relative items-center gap-1 px-[5px] border border-amazon-dark hover:border-white cursor-pointer"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <img className="w-5 h-5" src="/images/united-states.png" alt="" />
            <h4 className="text-white mx-[5px]">EN</h4>
            <img className="w-2.5 h-2.5" src="/images/down-chevron.png" alt="" />
            {langOpen && <LangDropdown />}
          </div>

          <div
            className="hidden lg:flex relative flex-col justify-center p-[3px] border border-amazon-dark hover:border-white"
            onMouseEnter={() => setSigninOpen(true)}
            onMouseLeave={() => setSigninOpen(false)}
          >
            <p className="text-white mb-0.5">Hello, signin</p>
            <div className="flex items-center">
              <p className="flex justify-center items-center text-white font-bold mr-[3px]">Account & Lists</p>
              <img className="w-2.5 h-2.5" src="/images/down-chevron.png" alt="" />
            </div>
            {signinOpen && (
              <div className="absolute top-full right-5 w-[30vw] bg-white p-[15px] rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-[100] flex flex-col items-center">
                <button type="button" className="w-[60%] py-2.5 rounded-[10px] border-none cursor-pointer bg-orange-500 text-white mx-auto">
                  Signin
                </button>
                <div className="flex items-center gap-[3px] mt-5">
                  <p>
                    New Customer?<span className="underline text-[rgb(30,87,133)]">Start here</span>
                  </p>
                </div>
                <hr className="w-[90%]" />
                <div className="flex w-[90%] gap-[10%]">
                  <div className="flex flex-col pl-0 ml-0">
                    <ul className="list-none p-0 m-0 text-left">
                      <li><h3>Your List</h3></li>
                      <li>Create a List</li>
                      <li>Find A list category</li>
                    </ul>
                  </div>
                  <div className="border-l border-amazon-dark" />
                  <div className="flex flex-col pl-0 ml-0">
                    <ul className="list-none p-0 m-0 text-left">
                      <li><h3>Account</h3></li>
                      <li>Create a List</li>
                      <li>Find A list category</li>
                      <li>order</li>
                      <li>recomendation</li>
                      <li>browsing history</li>
                      <li>Watch list</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:flex flex-col justify-center items-center px-[3px] border border-amazon-dark hover:border-white">
            <p className="text-white">Returns</p>
            <p className="text-white">& Orders</p>
          </div>

          <div className="flex justify-center items-center border border-amazon-dark hover:border-white">
            <img className="w-20 block" src="/images/Add to Cart.png" alt="" />
          </div>
        </div>
      </header>

      <nav className="flex items-center py-[5px] pl-2.5 bg-[#37475A]">
        <button
          type="button"
          className="flex items-center p-[5px] gap-[3px] cursor-pointer bg-[#37475A] border border-[#37475A] rounded-[3px] hover:border-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <i className="fa-solid fa-bars text-white" />
          <h3 className="text-white">All</h3>
        </button>
        {navItems.map((item) => (
          <div
            key={item}
            className="hidden sm:flex items-center p-[5px] border border-[#37475A] rounded-[3px] hover:border-white"
          >
            <p className="text-white">{item}</p>
          </div>
        ))}
        <div className="hidden lg:block ml-[30px]">
          <button
            type="button"
            className="relative py-2.5 px-[22px] text-[1.1rem] font-semibold text-white bg-gradient-to-br from-[#667eea] to-[#764ba2] border-none rounded-[50px] cursor-pointer shadow-[0_8px_20px_rgba(118,75,162,0.3)] transition-all duration-300 ease-out outline-none hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(118,75,162,0.4)] hover:from-[#764ba2] hover:to-[#667eea] active:translate-y-0.5 active:shadow-[0_4px_10px_rgba(118,75,162,0.3)] focus-visible:shadow-[0_0_0_4px_rgba(69,82,141,0.5)]"
          >
            Connect with me
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.842)] flex justify-center items-center z-[1000]"
          onClick={closeMobileMenu}
          onKeyDown={() => {}}
          role="presentation"
        />
      )}

      <div
        className={`fixed flex flex-col z-[10001] bg-white top-0 w-[80vw] sm:w-[20vw] h-screen transition-transform ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex bg-[#202c3d] px-2.5 pr-5 py-2.5 gap-5">
          <button
            type="button"
            className="text-xl cursor-pointer text-[rgb(4,3,3)] rounded-full w-[30px] h-[30px] flex items-center justify-center border-none p-2.5"
            onClick={closeMobileMenu}
          >
            ✕
          </button>
          <h2 className="text-white text-center">Hello, User</h2>
        </div>
        <div className="mt-[30px] mx-auto leading-10 cursor-pointer">
          <ul>
            {mobileMenuItems.map((item) => (
              <li key={item} className="hover:text-[rgb(62,62,228)] hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
