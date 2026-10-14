import Input from '../common/Input'
import { useLanguage } from '../../context/LanguageContext'

export default function PaymentForm({ values, onChange }) {
  const { t } = useLanguage()
  const set = (key) => (e) => onChange({ ...values, [key]: e.target.value })

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold">{t('paymentDetails')}</h3>
      <Input label={t('cardNumber')} placeholder="1234 5678 9012 3456" value={values.cardNumber || ''} onChange={set('cardNumber')} />
      <div className="grid grid-cols-2 gap-4">
        <Input label={t('expiryDate')} placeholder="MM/YY" value={values.expiry || ''} onChange={set('expiry')} />
        <Input label={t('cvv')} placeholder="123" value={values.cvv || ''} onChange={set('cvv')} />
      </div>
      <Input label={t('nameOnCard')} value={values.cardName || ''} onChange={set('cardName')} />
    </div>
  )
}
