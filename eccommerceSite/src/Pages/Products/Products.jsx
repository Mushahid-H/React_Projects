import React from 'react'
import { useEffect, useState } from 'react'
import { FakeStoreApi } from '../../Services/FakeStoreApi'
import { useSearchParams } from 'react-router-dom'
import Item from '../../components/Item'
import { useCart } from '../../context/Cart'

const Products = () => {
  const { addToCart } = useCart()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useSearchParams()

  const searchQuery = query.get('q')

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const products = searchQuery
        ? await FakeStoreApi.fetchProductsByCategory(searchQuery)
        : await FakeStoreApi.fetchAllProducts()
      setProducts(products)
      setLoading(false)
    }

    fetchProducts().catch(console.error)
  }, [searchQuery])

  if (!loading && searchQuery && !products.length) {
    return (
      <div className='container'>
        <div className='product py-2'>
          <div className='details p-3'>
            No Products Found matching you query
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='container'>
        <div className='products my-5'>
          <div className='grid'>
            {loading ? (
              <div className='loader'></div>
            ) : (
              products.map((product) => (
                <Item
                  key={product.id}
                  data={product}
                  addToCart={() => addToCart(product)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
