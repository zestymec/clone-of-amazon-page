export function normalizeTag(tag) {
  return String(tag).toLowerCase()
}

export function filterProducts(products, activeFilters) {
  if (!activeFilters.size) return products
  return products.filter((product) =>
    [...activeFilters].every((filter) =>
      product.tags.some((tag) => normalizeTag(tag) === normalizeTag(filter)),
    ),
  )
}
