import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ onSearch, cartItemCount }) => {
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (category.trim().length > 0) {
      onSearch(category.trim())
    }
    setCategory('')
  }
  return (
    <div className='wrapper'>
      <header className='container'>
        <div className='header py-2'>
          <div className='grid'>
            <Link to='/' className='link'>
              <h1 className='brand'>E-commerce</h1>
            </Link>
            <div className='formContainer'>
              <form className='search'>
                <div className='form-control'>
                  <input
                    type='text'
                    placeholder='Search Products ...'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <button
                  type='button'
                  className='search-btn'
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </form>
            </div>
            <Link to='/cart' className='link headerCart'>
              {cartItemCount}
              <img className='cartImg' src='/cart.svg' alt='cart' />
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
