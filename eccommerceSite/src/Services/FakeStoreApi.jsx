const FakeStoreApi = {
  fetchAllProducts: async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const result = await res.json()
    return result
  },
  fetchProductById: async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const result = await res.json()
    return result
  },
  fetchProductsByCategory: async (category) => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const result = await res.json()
    return result.filter((product) =>
      product.title.toLowerCase().includes(category)
    )
  },
}

export { FakeStoreApi }
