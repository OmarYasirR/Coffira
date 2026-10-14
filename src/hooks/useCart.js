import { useSelector, useDispatch } from 'react-redux'
import {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} from '../features/cart/cartSlice'

export function useCart() {
  const dispatch = useDispatch()
  const { items, subtotal, shipping, total } = useSelector((state) => state.cart)

  return {
    items,
    subtotal,
    shipping,
    total,
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (id) => dispatch(removeItem(id)),
    updateQuantity: (id, quantity) => dispatch(updateQuantity({ id, quantity })),
    clearCart: () => dispatch(clearCart()),
  }
}
