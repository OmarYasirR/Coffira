import Input from '../common/Input'
import { useLanguage } from '../../context/LanguageContext'

export default function ShippingForm({ values, onChange }) {
  const { t } = useLanguage()
  const set = (key) => (e) => onChange({ ...values, [key]: e.target.value })

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold">{t('shippingAddress')}</h3>
      <div className="grid grid-cols-2 gap-4">
        <Input label={t('firstName')} value={values.firstName || ''} onChange={set('firstName')} />
        <Input label={t('lastName')} value={values.lastName || ''} onChange={set('lastName')} />
      </div>
      <Input label={t('address')} value={values.address || ''} onChange={set('address')} />
      <div className="grid grid-cols-3 gap-4">
        <Input label={t('city')} value={values.city || ''} onChange={set('city')} />
        <Input label={t('state')} value={values.state || ''} onChange={set('state')} />
        <Input label={t('zipCode')} value={values.zip || ''} onChange={set('zip')} />
      </div>
      <Input label={t('phone')} value={values.phone || ''} onChange={set('phone')} />
    </div>
  )
}
