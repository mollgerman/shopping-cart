
import React, { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import '../styles/Filters.css'

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
      <div>
        <label htmlFor={minPriceFilterId}>Price from:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='3000'
          step='10'
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="all">All</option>
          <option value="all">All</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
