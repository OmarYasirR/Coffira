import { useLanguage } from '../../context/LanguageContext'

export default function Spinner({ size = 24 }) {
  const { t } = useLanguage()
  return (
    <div
      className="inline-block animate-spin rounded-full border-2 border-brand-tan border-t-brand-dark"
      style={{ width: size, height: size }}
      role="status"
      aria-label={t('loading')}
    />
  )
}
