import { useParams, Link } from 'react-router-dom'
import ProductImages from '../../components/product/ProductImages'
import ProductInfo from '../../components/product/ProductInfo'
import ProductGrid from '../../components/product/ProductGrid'
import { getProductBySlug, allProducts } from '../../data/mockProducts'
import { useLanguage } from '../../context/LanguageContext'

export default function ProductDetails() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <div className="container-app py-16 text-center">
        <p className="text-brand-muted">{t('noProducts')}</p>
        <Link to="/shop" className="text-brand-rust font-medium">{t('continueShopping')}</Link>
      </div>
    )
  }

  const related = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container-app py-8">
      <nav className="mb-6 text-sm text-brand-muted">
        <Link to="/">{t('home')}</Link> / <Link to="/shop">{t('shop')}</Link> / <span className="text-brand-dark">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ProductImages images={[product.image]} name={product.name} />
        <ProductInfo product={product} />
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-brand-dark">{t('relatedProducts')}</h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  )
}
