import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShippingForm from './ShippingForm'
import PaymentForm from './PaymentForm'
import Button from '../common/Button'
import { useCart } from '../../hooks/useCart'
import { useLanguage } from '../../context/LanguageContext'

export default function CheckoutForm() {
  const { t } = useLanguage()
  const [shipping, setShipping] = useState({})
  const [payment, setPayment] = useState({})
  const { clearCart } = useCart()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    clearCart()
    navigate('/order-success')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <ShippingForm values={shipping} onChange={setShipping} />
      <PaymentForm values={payment} onChange={setPayment} />
      <Button type="submit" variant="accent" className="w-full">{t('placeOrder')}</Button>
    </form>
  )
}
