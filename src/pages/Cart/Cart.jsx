import { Link } from 'react-router-dom'
import CartItem from '../../components/cart/CartItem'
import CartSummary from '../../components/cart/CartSummary'
import { useCart } from '../../hooks/useCart'
import { useLanguage } from '../../context/LanguageContext'

export default function Cart() {
  const { items, subtotal, shipping, total } = useCart()
  const { t } = useLanguage()

  if (!items.length) {
    return (
      <div className="container-app py-20 text-center">
        <h1 className="mb-2 font-serif text-2xl font-bold text-brand-dark">{t('emptyCart')}</h1>
        <p className="mb-6 text-brand-muted">{t('emptyCartSubtitle')}</p>
        <Link to="/shop" className="btn-primary">{t('continueShopping')}</Link>
      </div>
    )
  }

  return (
    <div className="container-app py-8">
      <h1 className="mb-6 font-serif text-2xl font-bold text-brand-dark">{t('yourCart')}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="md:col-span-1">
          <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
        </div>
      </div>
    </div>
  )
}
