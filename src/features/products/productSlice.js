import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    filters: {
      category: null,
      roast: null,
      origin: null,
      priceRange: null,
    },
    sort: 'featured',
    searchQuery: '',
  },
  reducers: {
    setFilter(state, action) {
      const { key, value } = action.payload
      state.filters[key] = value
    },
    clearFilters(state) {
      state.filters = { category: null, roast: null, origin: null, priceRange: null }
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload
    },
  },
})

export const { setFilter, clearFilters, setSort, setSearchQuery } = productSlice.actions
export default productSlice.reducer
