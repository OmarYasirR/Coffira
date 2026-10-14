import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function Orders() {
  const { t } = useLanguage()
  const orders = []

  return (
    <div>
      <h1 className="mb-6 font-serif text-xl font-bold text-brand-dark">{t('orderHistory')}</h1>
      {orders.length === 0 ? (
        <p className="text-sm text-brand-muted">{t('noOrdersYet')}</p>
      ) : (
        <ul className="space-y-3">
          {orders.map((order) => (
            <li key={order.id}>
              <Link to={`/account/orders/${order.id}`} className="block rounded-lg border border-brand-tan/20 bg-white p-4">
                {t('orderNumber')} #{order.id}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
