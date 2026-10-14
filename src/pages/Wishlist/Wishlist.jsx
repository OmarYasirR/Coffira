import { Link } from 'react-router-dom'
import ProductGrid from '../../components/product/ProductGrid'
import { useWishlist } from '../../hooks/useWishlist'
import { useLanguage } from '../../context/LanguageContext'

export default function Wishlist() {
  const { items } = useWishlist()
  const { t } = useLanguage()

  if (!items.length) {
    return (
      <div className="container-app py-20 text-center">
        <h1 className="mb-2 font-serif text-2xl font-bold text-brand-dark">{t('emptyWishlist')}</h1>
        <p className="mb-6 text-brand-muted">{t('emptyWishlistSubtitle')}</p>
        <Link to="/shop" className="btn-primary">{t('browseProducts')}</Link>
      </div>
    )
  }

  return (
    <div className="container-app py-8">
      <h1 className="mb-6 font-serif text-2xl font-bold text-brand-dark">{t('yourWishlist')}</h1>
      <ProductGrid products={items} />
    </div>
  )
}
