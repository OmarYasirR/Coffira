import Button from '../../components/common/Button'
import { useLanguage } from '../../context/LanguageContext'

export default function Addresses() {
  const { t } = useLanguage()
  const addresses = []

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-xl font-bold text-brand-dark">{t('savedAddresses')}</h1>
        <Button variant="secondary">{t('addAddress')}</Button>
      </div>
      {addresses.length === 0 ? (
        <p className="text-sm text-brand-muted">{t('noAddressesYet')}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {addresses.map((addr) => (
            <div key={addr.id} className="rounded-lg border border-brand-tan/20 bg-white p-4 text-sm">
              {addr.line1}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
