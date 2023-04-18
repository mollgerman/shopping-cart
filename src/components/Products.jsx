import { useCart } from '../hooks/useCart'
// import '../styles/Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

import { Card, Divider, UnorderedList, Button, CardBody, CardFooter, Heading, Image, Text, Stack } from '@chakra-ui/react'

const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className="products">
      <UnorderedList display="grid" px={10} gridGap={20} gridTemplateColumns='1fr 1fr'>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <Card maxW='sm' key={product.id} bg='white.200' border='1px' borderColor='gray.400' borderRadius='1rem' boxShadow='0px 0px 15px rgb(0,0,0,20%)'>
              <CardBody>
                <Image
                  objectFit='cover'
                  width='100%'
                  maxHeight='200px'
                  src={product.thumbnail}
                  alt={product.title} />
                <Stack mt='6' spacing='3'>
                  <Heading color='black'>{product.title}</Heading>
                  <Text color='blue.600' fontSize='2xl'>
                    ${product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>

                <Button colorScheme='blue' onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}
                >
                  { isProductInCart
                    ? <Text color='white.700' fontSize='xl' pr='1rem'>
                       Remove from cart
                    </Text>
                    : <Text color='white.700' fontSize='xl' pr='1rem'>
                        Add to cart
                    </Text>
                  }

                  { isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                  }
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </UnorderedList>
    </main>
  )
}

export default Products
