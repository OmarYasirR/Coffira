import { Link } from 'react-router-dom'
import ProductGrid from '../product/ProductGrid'
import { getBestsellers } from '../../data/mockProducts'
import { useLanguage } from '../../context/LanguageContext'

export default function BestSellers() {
  const { t } = useLanguage()
  const products = getBestsellers()

  return (
    <section className="container-app py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-brand-dark">{t('bestSellers')}</h2>
          <p className="text-sm text-brand-muted">{t('bestSellersSubtitle')}</p>
        </div>
        <Link to="/shop" className="text-sm font-medium text-brand-rust">{t('viewAll')}</Link>
      </div>
      <ProductGrid products={products} />
    </section>
  )
}
