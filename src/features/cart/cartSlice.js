import { createSlice } from '@reduxjs/toolkit'
import { FREE_SHIPPING_THRESHOLD } from '../../utils/constants'

function computeTotals(items) {
  const subtotal = +items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 4.99
  const total = +(subtotal + shipping).toFixed(2)
  return { subtotal, shipping, total }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    subtotal: 0,
    shipping: 0,
    total: 0,
  },
  reducers: {
    addItem(state, action) {
      const { id, weight } = action.payload
      const existing = state.items.find((item) => item.id === id && item.weight === weight)
      if (existing) {
        existing.quantity += action.payload.quantity || 1
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 })
      }
      Object.assign(state, computeTotals(state.items))
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
      Object.assign(state, computeTotals(state.items))
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) item.quantity = Math.max(1, quantity)
      Object.assign(state, computeTotals(state.items))
    },
    clearCart(state) {
      state.items = []
      Object.assign(state, computeTotals(state.items))
    },
  },
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
