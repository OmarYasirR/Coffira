import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function OrderSuccess() {
  const { t } = useLanguage()
  return (
    <div className="container-app py-24 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-rust text-2xl text-white">
        ✓
      </div>
      <h1 className="mb-2 font-serif text-2xl font-bold text-brand-dark">{t('orderPlacedTitle')}</h1>
      <p className="mb-6 text-brand-muted">{t('orderPlacedSubtitle')}</p>
      <Link to="/shop" className="btn-primary">{t('continueShopping')}</Link>
    </div>
  )
}
