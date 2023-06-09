import React, { useId } from 'react'
import '../styles/Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import CartItem from './CartItem'

import { Button } from '@chakra-ui/react'

const Cart = () => {
  const cartCheckboxId = useId()
  const { clearCart, cart, addToQuantity, subtractToQuantity } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon/>
      </label>
      <input
        id={cartCheckboxId}
        type='checkbox'
        hidden
      />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              modifyQuantityAdd={() => addToQuantity(product)}
              modifyQuantitySubtract={() => subtractToQuantity(product)}
            />
          ))}

        </ul>
        <Button marginTop='1rem' onClick={clearCart}>
          <ClearCartIcon/>
        </Button>

      </aside>
    </>
  )
}

export default Cart
