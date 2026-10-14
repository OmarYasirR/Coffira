import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { items: [] },
  reducers: {
    toggleItem(state, action) {
      const exists = state.items.find((item) => item.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
    },
    clearWishlist(state) {
      state.items = []
    },
  },
})

export const { toggleItem, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
