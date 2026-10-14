import { useParams } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function OrderDetails() {
  const { orderId } = useParams()
  const { t } = useLanguage()

  return (
    <div>
      <h1 className="mb-6 font-serif text-xl font-bold text-brand-dark">{t('orderNumber')} #{orderId}</h1>
      <p className="text-sm text-brand-muted">{t('orderDetailsPlaceholder')}</p>
    </div>
  )
}
