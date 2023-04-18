import React from 'react'
import Cart from './Cart.jsx'
import Filters from './Filters.jsx'

import { Box, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box w="auto" pb="30px">
      <header>
        <Text
          fontSize='5xl'
          fontWeight='bold'
          mb='2rem'
        >Shop</Text>
        <Filters />
        <Cart />
      </header>
    </Box>
  )
}

export default Header
