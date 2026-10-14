import { NavLink } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../../context/LanguageContext'

export default function MobileNav({ open, onClose }) {
  const { t } = useLanguage()

  const links = [
    { to: '/', label: t('home') },
    { to: '/shop', label: t('shop') },
    { to: '/tea', label: t('navTea') },
    { to: '/cart', label: t('cart') },
    { to: '/wishlist', label: t('wishlist') },
    { to: '/account', label: t('account') },
  ]

  if (!open) return null
  return (
    <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={onClose}>
      <div
        className="absolute end-0 top-0 h-full w-64 bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="mb-6 text-brand-muted" aria-label="Close menu">
          ✕
        </button>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={onClose} className="text-brand-dark font-medium">
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-6">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
