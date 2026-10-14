import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <div className="container-app flex flex-col items-center justify-center py-24 text-center">
      <h1 className="font-serif text-5xl font-bold text-brand-dark">{t('notFoundTitle')}</h1>
      <p className="mt-3 mb-6 text-brand-muted">{t('notFoundSubtitle')}</p>
      <Link to="/" className="btn-primary">{t('backToHome')}</Link>
    </div>
  )
}
