import { useCallback, useState } from 'react'

export function useCart() {
  const [cart, setCart] = useState([])

  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, { ...product, cartId: `${product.id}-${Date.now()}` }])
  }, [])

  const cartCount = cart.length

  return { cart, addToCart, cartCount }
}
