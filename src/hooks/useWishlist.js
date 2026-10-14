import { useSelector, useDispatch } from 'react-redux'
import { toggleItem, clearWishlist } from '../features/wishlist/wishlistSlice'

export function useWishlist() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.wishlist.items)

  const isInWishlist = (id) => items.some((item) => item.id === id)

  return {
    items,
    isInWishlist,
    toggleItem: (item) => dispatch(toggleItem(item)),
    clearWishlist: () => dispatch(clearWishlist()),
  }
}
