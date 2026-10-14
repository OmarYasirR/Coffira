import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="container-app grid grid-cols-1 gap-8 py-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center">
          <img 
            src="/images/logo/coffira-logo-mark (1).svg" 
            alt="Coffira" 
            className="h-12 sm:h-16 md:h-20 w-auto object-contain" 
          />
        </Link>
          <p className="text-sm text-brand-tan/80">{t('footerTagline')}</p>
        </div>

        <div>
          <h4 className="mb-3 font-serif font-semibold">{t('footerShop')}</h4>
          <ul className="space-y-2 text-sm text-brand-tan/80">
            <li><Link to="/shop">{t('footerAllProducts')}</Link></li>
            <li><Link to="/category/coffee-beans">{t('navCoffeeBeans')}</Link></li>
            <li><Link to="/category/ground-coffee">{t('navGroundCoffee')}</Link></li>
            <li><Link to="/category/espresso">{t('category.espresso')}</Link></li>
            <li><Link to="/category/accessories">{t('navAccessories')}</Link></li>
            <li><Link to="/tea">{t('navTea')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-serif font-semibold">{t('footerCustomerCare')}</h4>
          <ul className="space-y-2 text-sm text-brand-tan/80">
            <li><Link to="/contact">{t('footerContactUs')}</Link></li>
            <li><Link to="/contact">{t('footerShipping')}</Link></li>
            <li><Link to="/contact">{t('footerReturns')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-serif font-semibold">{t('footerAbout')}</h4>
          <ul className="space-y-2 text-sm text-brand-tan/80">
            <li><Link to="/about">{t('footerOurStory')}</Link></li>
            <li><Link to="/contact">{t('footerWholesale')}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-tan/70">
        © {new Date().getFullYear()} Coffira. {t('footerRights')}
      </div>
    </footer>
  )
}
