import { Navigate } from 'react-router-dom'
import CheckoutForm from '../../components/checkout/CheckoutForm'
import OrderSummary from '../../components/checkout/OrderSummary'
import { useCart } from '../../hooks/useCart'
import { useLanguage } from '../../context/LanguageContext'

export default function Checkout() {
  const { items, subtotal, shipping, total } = useCart()
  const { t } = useLanguage()

  if (!items.length) return <Navigate to="/cart" replace />

  return (
    <div className="container-app py-8">
      <h1 className="mb-6 font-serif text-2xl font-bold text-brand-dark">{t('checkout')}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <CheckoutForm />
        </div>
        <div className="md:col-span-1">
          <OrderSummary items={items} subtotal={subtotal} shipping={shipping} total={total} />
        </div>
      </div>
    </div>
  )
}
