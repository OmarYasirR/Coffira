import { Link } from 'react-router-dom'
import CategoryGrid from '../category/CategoryGrid'
import { coffeeCategories } from '../../data/categories'
import { useLanguage } from '../../context/LanguageContext'

export default function ShopByCategory() {
  const { t } = useLanguage()
  return (
    <section className="container-app py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-brand-dark">{t('shopByCategory')}</h2>
          <p className="text-sm text-brand-muted">{t('shopByCategorySubtitle')}</p>
        </div>
        <Link to="/shop" className="text-sm font-medium text-brand-rust">{t('viewAll')}</Link>
      </div>
      <CategoryGrid categories={coffeeCategories} />
    </section>
  )
}
