import { useLanguage } from '../../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  return (
    <div className="container-app py-14 max-w-3xl">
      <h1 className="mb-4 font-serif text-3xl font-bold text-brand-dark">{t('aboutTitle')}</h1>
      <p className="mb-4 text-brand-muted leading-relaxed">{t('aboutText1')}</p>
      <p className="text-brand-muted leading-relaxed">{t('aboutText2')}</p>
    </div>
  )
}
