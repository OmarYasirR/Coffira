import { formatPrice } from '../../utils/formatPrice'
import { useLanguage } from '../../context/LanguageContext'

export default function OrderSummary({ items, subtotal, shipping, total }) {
  const { t } = useLanguage()
  return (
    <div className="rounded-lg border border-brand-tan/20 bg-white p-5">
      <h3 className="mb-4 font-serif text-lg font-semibold">{t('orderSummary')}</h3>
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 text-sm">
            <img src={item.image} alt={item.name} className="h-12 w-12 rounded bg-brand-creamAlt object-contain" />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-brand-muted">{t('qty')} {item.quantity} · {item.weight}</p>
            </div>
            <span>{formatPrice(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2 border-t border-brand-tan/20 pt-3 text-sm">
        <div className="flex justify-between">
          <span className="text-brand-muted">{t('subtotal')}</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-brand-muted">{t('shipping')}</span>
          <span>{shipping === 0 ? t('free') : formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>{t('total')}</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  )
}
