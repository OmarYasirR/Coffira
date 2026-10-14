import { useState } from 'react'
import ProductRating from './ProductRating'
import ProductQuantity from './ProductQuantity'
import Button from '../common/Button'
import { formatPrice } from '../../utils/formatPrice'
import { useCart } from '../../hooks/useCart'
import { WEIGHT_OPTIONS } from '../../utils/constants'
import { useLanguage } from '../../context/LanguageContext'

export default function ProductInfo({ product }) {
  const { t } = useLanguage()
  const [weight, setWeight] = useState(product.weight || WEIGHT_OPTIONS[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-serif text-2xl font-bold text-brand-dark">{product.name}</h1>
        <div className="mt-2">
          <ProductRating rating={product.rating} reviews={product.reviews} />
        </div>
      </div>

      <p className="font-serif text-2xl font-bold text-brand-rust">{formatPrice(product.price)}</p>

      <p className="text-sm text-brand-muted leading-relaxed">
        {product.description ||
          `A carefully sourced ${product.type || product.grind || product.roast?.toLowerCase() + ' roast'} from ${
            product.origin || 'our trusted growers'
          }, roasted in small batches for peak freshness.`}
      </p>

      <dl className="grid grid-cols-2 gap-y-2 text-sm">
        {product.roast && (
          <>
            <dt className="text-brand-muted">{t('roastLevel')}</dt>
            <dd className="font-medium">{product.roast}</dd>
          </>
        )}
        {product.origin && (
          <>
            <dt className="text-brand-muted">{t('origin')}</dt>
            <dd className="font-medium">{product.origin}</dd>
          </>
        )}
      </dl>

      {(product.category === 'accessories') ? null : (
        <div>
          <p className="mb-2 text-sm font-medium text-brand-dark">{t('weight')}</p>
          <div className="flex gap-2">
            {WEIGHT_OPTIONS.map((w) => (
              <button
                key={w}
                onClick={() => setWeight(w)}
                className={`rounded-md border px-3 py-1.5 text-sm ${
                  weight === w ? 'border-brand-dark bg-brand-dark text-brand-cream' : 'border-brand-tan/50'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <ProductQuantity quantity={quantity} onChange={setQuantity} />
        <Button
          variant="accent"
          className="flex-1"
          onClick={() => addItem({ ...product, weight, quantity })}
        >
          {t('addToCart')}
        </Button>
      </div>
    </div>
  )
}
