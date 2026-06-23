import { useCallback, useMemo, useState } from 'react'
import { filterProducts } from '@/utils/filterProducts'
import { createProductFromForm } from '@/utils/createProduct'

export function useProducts(initialProducts) {
  const [products, setProducts] = useState(initialProducts)
  const [activeFilters, setActiveFilters] = useState(new Set())

  const toggleFilter = useCallback((tag, checked) => {
    setActiveFilters((prev) => {
      const next = new Set(prev)
      if (checked) next.add(tag)
      else next.delete(tag)
      return next
    })
  }, [])

  const clearFilters = useCallback(() => {
    setActiveFilters(new Set())
  }, [])

  const filteredProducts = useMemo(
    () => filterProducts(products, activeFilters),
    [products, activeFilters],
  )

  const addProduct = useCallback((formData) => {
    const product = createProductFromForm(formData)
    setProducts((prev) => [...prev, product])
    return product
  }, [])

  return {
    products,
    filteredProducts,
    activeFilters,
    toggleFilter,
    clearFilters,
    addProduct,
  }
}
