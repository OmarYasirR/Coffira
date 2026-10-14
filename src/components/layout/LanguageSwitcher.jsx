import { useLanguage } from '../../context/LanguageContext'

export default function LanguageSwitcher({ className = '' }) {
  const { lang, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1 rounded-md border border-brand-tan/50 px-2.5 py-1 text-xs font-semibold text-brand-dark hover:bg-brand-cream transition-colors ${className}`}
      aria-label="Switch language"
    >
      <span className={lang === 'en' ? 'text-brand-rust' : 'text-brand-muted'}>EN</span>
      <span className="text-brand-muted">/</span>
      <span className={lang === 'ar' ? 'text-brand-rust' : 'text-brand-muted'}>عربي</span>
    </button>
  )
}
