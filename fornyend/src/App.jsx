import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import SidebarFilters from './components/SidebarFilters'
import ProductModal from '@/components/modals/ProductModal'
import DetailModal from '@/components/modals/DetailModal'
import Login from './loginandsign/login'
import Signup from './loginandsign/signup'
import { useCart } from '@/hooks/useCart'
import { useProducts } from '@/hooks/useProducts'
import { products as initialProducts, relatedSearches, footerColumns, sortOptions } from './data/products'
import axios from 'axios';

export default function App() {
  const { addToCart, cartCount } = useCart()
  const { filteredProducts, activeFilters, toggleFilter, clearFilters } = useProducts(initialProducts)

  const [productModalOpen, setProductModalOpen] = useState(false)
  const [detailProduct, setDetailProduct] = useState(null)
  
  // Auth Modal States
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [isSignup, setIsSignup] = useState(false)

  const handleAddProduct = async (formData) => {
    try {
      await axios.post('http://localhost:5000/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("Product added successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Backend Error:", error);
      alert("Connection failed!");
    }
  };

  return (
    <Router>
      <Header
        cartCount={cartCount}
        onAddProductClick={() => setProductModalOpen(true)}
        onLoginClick={() => { setIsSignup(false); setAuthModalOpen(true); }}
        onSignupClick={() => { setIsSignup(true); setAuthModalOpen(true); }}
      />

      <Routes>
        <Route path="/" element={
          <>
            <div className="mx-auto flex w-full max-w-[98vw] flex-col gap-2 px-2 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-4">
              <p className="text-sm sm:text-lg">Results for <span className="font-bold">"gaming"</span></p>
            </div>
            
            <div className="flex flex-col lg:flex-row">
              <SidebarFilters activeFilters={activeFilters} onToggleFilter={toggleFilter} onClearFilters={clearFilters} />
              <div className="flex min-w-0 flex-1 flex-col px-2 sm:px-4 lg:px-0">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onSelect={setDetailProduct} onAddToCart={addToCart} />
                ))}
              </div>
            </div>
          </>
        } />
      </Routes>

      {/* Auth Modal */}
      {authModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-xl">
            {isSignup ? <Signup /> : <Login />}
            <div className="mt-4 text-center">
              <button 
                className="text-blue-600 underline text-sm"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Already have an account? Login" : "New Customer? Start here"}
              </button>
              <button onClick={() => setAuthModalOpen(false)} className="block w-full mt-2 text-gray-500">Close</button>
            </div>
          </div>
        </div>
      )}

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
        onAddToCart={addToCart}
      />
    </Router>
  )
}