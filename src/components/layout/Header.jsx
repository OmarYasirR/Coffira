import { useState } from 'react'
import { Link } from 'react-router-dom'
import TopBar from './TopBar'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import LanguageSwitcher from './LanguageSwitcher'
import { useCart } from '../../hooks/useCart'
import { useLanguage } from '../../context/LanguageContext'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { items } = useCart()
  const { t } = useLanguage()

  return (
    <header className="border-b border-brand-tan/30 bg-white"> 
      <TopBar />
      <div className="container-app flex items-center justify-between py-3">
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="/images/logo/coffira-logo-mark.svg" 
          alt="Coffira" 
          className="h-12 sm:h-16 md:h-20 w-auto object-contain" 
        />
      </Link>

        <div className="hidden md:block flex-1 max-w-md mx-8">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="input-field"
          />
        </div>

        <div className="flex items-center gap-4 text-sm">
          <LanguageSwitcher className="hidden sm:flex" />
          <Link to="/wishlist" className="hidden sm:inline hover:text-brand-rust">{t('wishlist')}</Link>
          <Link to="/account" className="hidden sm:inline hover:text-brand-rust">{t('account')}</Link>
          <Link to="/cart" className="relative hover:text-brand-rust">
            {t('cart')}
            {items.length > 0 && (
              <span className="absolute -end-3 -top-2 rounded-full bg-brand-rust px-1.5 text-xs text-white">
                {items.length}
              </span>
            )}
          </Link>
          <button className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            ☰
          </button>
        </div>
      </div>
      <div className="container-app border-t border-brand-tan/20">
        <Navbar />
      </div>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
