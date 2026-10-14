import { NavLink, Outlet } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function AccountLayout() {
  const { t } = useLanguage()

  const links = [
    { to: '/account', label: t('overview'), end: true },
    { to: '/account/profile', label: t('profile') },
    { to: '/account/orders', label: t('orders') },
    { to: '/account/addresses', label: t('addresses') },
    { to: '/account/settings', label: t('settings') },
  ]

  return (
    <div className="container-app py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      <aside className="md:col-span-1">
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-medium ${
                  isActive ? 'bg-brand-dark text-brand-cream' : 'text-brand-dark hover:bg-brand-cream'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <section className="md:col-span-3">
        <Outlet />
      </section>
    </div>
  )
}
