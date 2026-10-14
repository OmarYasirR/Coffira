import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/formatPrice'
import Button from '../common/Button'
import { useLanguage } from '../../context/LanguageContext'

export default function CartSummary({ subtotal, shipping, total, checkoutTo = '/checkout' }) {
  const { t } = useLanguage()
  return (
    <div className="rounded-lg border border-brand-tan/20 bg-white p-5">
      <h3 className="mb-4 font-serif text-lg font-semibold">{t('orderSummary')}</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-brand-muted">{t('subtotal')}</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-brand-muted">{t('shipping')}</span>
          <span>{shipping === 0 ? t('free') : formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between border-t border-brand-tan/20 pt-2 text-base font-semibold">
          <span>{t('total')}</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
      <Link to={checkoutTo}>
        <Button variant="accent" className="mt-4 w-full">{t('proceedToCheckout')}</Button>
      </Link>
    </div>
  )
}
