import React from 'react'

const CartItem = ({ id, thumbnail, description, title, price, quantity, modifyQuantityAdd, modifyQuantitySubtract }) => {
  return (
    <li key={id}>
      <img
        src={thumbnail}
        alt={description}
      />
      <span>{title} </span>
      <span>${price}</span>

      <footer>
        <button onClick={modifyQuantitySubtract}>-</button>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={modifyQuantityAdd}>+</button>
      </footer>
    </li>
  )
}

export default CartItem
