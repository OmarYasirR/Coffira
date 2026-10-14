import Button from '../../components/common/Button'
import { useAuth } from '../../hooks/useAuth'
import { useLanguage } from '../../context/LanguageContext'

export default function Settings() {
  const { logout } = useAuth()
  const { t } = useLanguage()

  return (
    <div>
      <h1 className="mb-6 font-serif text-xl font-bold text-brand-dark">{t('accountSettings')}</h1>
      <div className="space-y-4 max-w-md">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked /> {t('emailOrderUpdates')}
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked /> {t('emailPromotions')}
        </label>
        <Button variant="secondary" onClick={logout}>{t('signOut')}</Button>
      </div>
    </div>
  )
}
