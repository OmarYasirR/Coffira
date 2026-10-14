import { useCart } from '../../hooks/useCart'
import MiniCart from './MiniCart'

export default function CartDrawer({ open, onClose }) {
  const { items, subtotal } = useCart()
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40" onClick={onClose}>
      <div className="h-full p-4" onClick={(e) => e.stopPropagation()}>
        <MiniCart items={items} subtotal={subtotal} onClose={onClose} />
      </div>
    </div>
  )
}
