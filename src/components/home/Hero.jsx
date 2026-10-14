import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="bg-brand-cream">
      <div className="container-app grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-rust">
            {t('heroKicker')}
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
            {t('heroTitle')}
          </h1>
          <p className="mt-4 max-w-md text-brand-muted">{t('heroSubtitle')}</p>
          <div className="mt-6 flex gap-4">
            <Link to="/shop" className="btn-primary">{t('shopNow')}</Link>
            <Link to="/category/coffee-beans" className="btn-secondary">{t('exploreBlends')}</Link>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-xl bg-brand-tan/20 flex items-center justify-center">
          <img src="/images/logo/coffira-logo-mark.svg" alt="Coffira" className="h-32 w-32 opacity-80" />
        </div>
      </div>
    </section>
  )
}
