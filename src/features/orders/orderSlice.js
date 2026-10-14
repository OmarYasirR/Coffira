import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    currentOrder: null,
    checkoutStep: 'shipping',
  },
  reducers: {
    setCurrentOrder(state, action) {
      state.currentOrder = action.payload
    },
    setCheckoutStep(state, action) {
      state.checkoutStep = action.payload
    },
    resetCheckout(state) {
      state.currentOrder = null
      state.checkoutStep = 'shipping'
    },
  },
})

export const { setCurrentOrder, setCheckoutStep, resetCheckout } = orderSlice.actions
export default orderSlice.reducer
