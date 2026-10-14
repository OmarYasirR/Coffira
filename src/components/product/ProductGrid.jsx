import ProductCard from './ProductCard'
import { useLanguage } from '../../context/LanguageContext'

export default function ProductGrid({ products }) {
  const { t } = useLanguage()
  if (!products?.length) {
    return <p className="py-12 text-center text-brand-muted">{t('noProducts')}</p>
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
