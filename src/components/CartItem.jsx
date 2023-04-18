import React from 'react'
import { Image, Text, Button, Box } from '@chakra-ui/react'

const CartItem = ({ id, thumbnail, description, title, price, quantity, modifyQuantityAdd, modifyQuantitySubtract }) => {
  return (
    <li key={id}>
      <Image
        mt='15px'
        src={thumbnail}
        alt={description}
      />
      <Box display='flex' justifyContent='space-between' my='20px'>
        <Text fontSize='2xl' fontWeight='bold'>{title} </Text>
        <Text fontSize='xl' fontWeight='bold' color='blue.500'>${price}</Text>
      </Box>
      <footer>
        <Button onClick={modifyQuantitySubtract}>-</Button>
        <Text fontSize='lg'>
          Quantity:
        </Text>
        <Text fontSize='lg' fontWeight='bold'>
          {quantity}
        </Text>
        <Button onClick={modifyQuantityAdd}>+</Button>
      </footer>
    </li>
  )
}

export default CartItem
