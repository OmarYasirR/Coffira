import { Link } from 'react-router-dom'
import Rating from '../common/Rating'
import Badge from '../common/Badge'
import { formatPrice } from '../../utils/formatPrice'
import { useWishlist } from '../../hooks/useWishlist'
import { useLanguage } from '../../context/LanguageContext'

export default function ProductCard({ product }) {
  const { isInWishlist, toggleItem } = useWishlist()
  const { t } = useLanguage()
  const inWishlist = isInWishlist(product.id)

  return (
    <div className="filter-card group relative rounded-lg border border-brand-tan/20 bg-white p-3 transition-shadow hover:shadow-md">
      {product.bestseller && (
        <Badge variant="dark" className="absolute start-4 top-4 z-10">{t('bestseller')}</Badge>
      )}
      <button
        onClick={() => toggleItem(product)}
        aria-label={t('wishlist')}
        className="absolute end-4 top-4 z-10 text-lg"
      >
        {inWishlist ? '♥' : '♡'}
      </button>
      <Link to={`/product/${product.slug}`}>
        <div className="aspect-square overflow-hidden rounded-md bg-brand-creamAlt">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform group-hover:scale-105"
          />
        </div>
        <div className="mt-3 space-y-1">
          <h3 className="text-sm font-semibold text-brand-dark line-clamp-1">{product.name}</h3>
          <p className="text-xs text-brand-muted">{product.roast || product.type || product.grind} · {product.weight}</p>
          <div className="flex items-center justify-between pt-1">
            <span className="font-serif text-base font-bold text-brand-dark">{formatPrice(product.price)}</span>
            <Rating value={product.rating} count={product.reviews} />
          </div>
        </div>
      </Link>
    </div>
  )
}
