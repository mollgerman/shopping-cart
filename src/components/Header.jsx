import React from 'react'
import Cart from './Cart.jsx'
import Filters from './Filters.jsx'

const Header = () => {
  return (
    <header>
      <h1>Shop</h1>
      <Filters />
      <Cart />
    </header>

  )
}

export default Header
