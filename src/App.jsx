import { useState } from 'react'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import Header from './components/Header'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart'

import { ChakraProvider, Box } from '@chakra-ui/react'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <ChakraProvider>
      <CartProvider>
        <Box bg='gray.50'>
          <Header/>
          <Products products={filteredProducts} />
        </Box>
      </CartProvider>
    </ChakraProvider>
  )
}

export default App
