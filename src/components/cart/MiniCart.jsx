import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/formatPrice'
import { useLanguage } from '../../context/LanguageContext'

export default function MiniCart({ items, subtotal, onClose }) {
  const { t } = useLanguage()
  return (
    <div className="w-80 rounded-lg border border-brand-tan/20 bg-white p-4 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-serif font-semibold">{t('yourCart')} ({items.length})</h4>
        {onClose && (
          <button onClick={onClose} className="text-brand-muted">✕</button>
        )}
      </div>
      <div className="max-h-64 space-y-3 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 text-sm">
            <img src={item.image} alt={item.name} className="h-12 w-12 rounded bg-brand-creamAlt object-contain" />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-brand-muted">{t('qty')} {item.quantity}</p>
            </div>
            <span>{formatPrice(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm font-semibold">
        <span>{t('subtotal')}</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <Link to="/cart" className="btn-primary mt-3 block text-center">{t('viewCart')}</Link>
    </div>
  )
}
