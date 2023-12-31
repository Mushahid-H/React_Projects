import { createContext, useContext, useState } from 'react'

const initialState = {
  cart: [],
  cartItemCount: () => 0,
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
}

const CartContext = createContext(initialState)

export const useCart = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState.cart)

  const cartItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }
  const addToCart = (product) => {
    const productIdx = cart.findIndex((item) => item.product.id === product.id)
    if (productIdx !== -1) {
      increaseQuantity(product.id)
    } else {
      setCart([...cart, { product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId)
    setCart(updatedCart)
  }

  const increaseQuantity = (productId) => {
    const copy = cart.slice()
    const productIdx = copy.findIndex((item) => item.product.id === productId)
    if (productIdx !== -1) {
      copy[productIdx].quantity++
      setCart(copy)
    }
  }

  const decreaseQuantity = (productId) => {
    const copy = cart.slice()
    const productIdx = copy.findIndex((item) => item.product.id === productId)
    if (productIdx !== -1 && copy[productIdx].quantity > 1) {
      copy[productIdx].quantity--
      setCart(copy)
    }
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemCount,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
