import ProductGrid from '../product/ProductGrid'
import { coffeeProducts } from '../../data/mockProducts'
import { useLanguage } from '../../context/LanguageContext'

export default function FeaturedProducts({ title, products }) {
  const { t } = useLanguage()
  const list = products || coffeeProducts.slice(0, 8)

  return (
    <section className="container-app py-12">
      <h2 className="mb-6 font-serif text-2xl font-bold text-brand-dark">{title || t('featuredProducts')}</h2>
      <ProductGrid products={list} />
    </section>
  )
}
