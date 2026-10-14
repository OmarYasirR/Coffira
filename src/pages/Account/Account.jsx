import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useLanguage } from '../../context/LanguageContext'

export default function Account() {
  const { user } = useAuth()
  const { t } = useLanguage()

  const links = [
    { to: '/account/orders', label: t('orderHistory') },
    { to: '/account/profile', label: t('profileDetails') },
    { to: '/account/addresses', label: t('savedAddresses') },
    { to: '/account/settings', label: t('accountSettings') },
  ]

  return (
    <div>
      <h1 className="mb-2 font-serif text-2xl font-bold text-brand-dark">
        {t('welcomeBack')}{user?.name ? `, ${user.name}` : ''}
      </h1>
      <p className="mb-6 text-sm text-brand-muted">{t('manageAccount')}</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {links.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-lg border border-brand-tan/20 bg-white p-5 hover:shadow-md transition-shadow"
          >
            <span className="font-medium text-brand-dark">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
