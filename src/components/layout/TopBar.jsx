import { useLanguage } from '../../context/LanguageContext'

export default function TopBar() {
  const { t } = useLanguage()
  return (
    <div className="bg-brand-dark py-2 text-center text-xs text-brand-cream">
      {t('freeShipping')}
    </div>
  )
}
