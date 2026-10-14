import { formatPrice } from '../../utils/formatPrice'
import { useCart } from '../../hooks/useCart'
import ProductQuantity from '../product/ProductQuantity'
import { useLanguage } from '../../context/LanguageContext'

export default function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCart()
  const { t } = useLanguage()

  return (
    <div className="flex items-center gap-4 border-b border-brand-tan/20 py-4">
      <img src={item.image} alt={item.name} className="h-16 w-16 rounded-md bg-brand-creamAlt object-contain" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-brand-dark">{item.name}</p>
        <p className="text-xs text-brand-muted">{item.weight}</p>
      </div>
      <ProductQuantity quantity={item.quantity} onChange={(q) => updateQuantity(item.id, q)} />
      <p className="w-16 text-right text-sm font-semibold">{formatPrice(item.price * item.quantity)}</p>
      <button onClick={() => removeItem(item.id)} className="text-brand-muted hover:text-red-600" aria-label={t('cart')}>
        ✕
      </button>
    </div>
  )
}
