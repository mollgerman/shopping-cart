
import React, { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import '../styles/Filters.css'
import { Select, Box, Text, Input } from '@chakra-ui/react'

const Filters = () => {
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <Box display='flex' justifyContent='space-around' width='100%'>
        <Box display='flex'>
          <label htmlFor={minPriceFilterId}><Text px='1rem' fontSize='lg'>Price from:</Text></label>
          <Input
            type='range'
            id={minPriceFilterId}
            min='0'
            max='1749'
            step='10'
            value={filters.minPrice}
            onChange={handleChangeMinPrice}
          />
          <Text fontSize='lg' px='1rem'>${filters.minPrice}</Text>
        </Box>
        <Box display='flex'>
          <label htmlFor={categoryFilterId}>
            <Text fontSize='lg' px='1rem'> Category </Text>
          </label>
          <Select id={categoryFilterId} onChange={handleChangeCategory}>
            <option value="all">All</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Smartphones</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
          </Select>
        </Box>
      </Box>

    </section>
  )
}

export default Filters
