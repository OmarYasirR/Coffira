import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar() {
  const { t } = useLanguage()

  const links = [
    { to: '/shop', label: t('navShop') },
    { to: '/category/coffee-beans', label: t('navSpecialtyCoffee') },
    { to: '/shop?sort=bestsellers', label: t('navBestSellers') },
    { to: '/category/coffee-beans', label: t('navCoffeeBeans') },
    { to: '/category/ground-coffee', label: t('navGroundCoffee') },
    { to: '/category/accessories', label: t('navAccessories') },
    { to: '/tea', label: t('navTea') },
  ]

  return (
    <nav className="hidden md:flex items-center gap-6 py-3 text-sm font-medium text-brand-dark">
      {links.map((link, i) => (
        <NavLink
          key={link.label + i}
          to={link.to}
          className={({ isActive }) => (isActive ? 'text-brand-rust' : 'hover:text-brand-rust transition-colors')}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
