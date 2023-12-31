import Product from './Pages/Product/Product'
import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'
import NotFound from './Pages/notFound/notFound'
import Navbar from './components/Navbar'
import {
  Route,
  Routes,
  useNavigate,
  createSearchParams,
} from 'react-router-dom'

import { useCart } from './context/Cart'

function App() {
  const navigate = useNavigate()
  const onSearch = (category) => {
    navigate(`/?${createSearchParams({ q: category })}`)
  }
  const { cartItemCount } = useCart()

  return (
    <>
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
