import { useMemo, useState } from 'react'
import ProductGrid from '../../components/product/ProductGrid'
import Pagination from '../../components/common/Pagination'
import MadLibFilter from '../../components/product/MadLibFilter'
import { coffeeProducts, groundCoffeeProducts, accessoryProducts } from '../../data/mockProducts'
import { coffeeCategories } from '../../data/categories'
import { ROAST_LEVELS, ORIGINS } from '../../utils/constants'
import { shopFilterSentence } from '../../i18n/filterSentences'
import { useLanguage } from '../../context/LanguageContext'

const PAGE_SIZE = 12
const SHOP_PRODUCTS = [...coffeeProducts, ...groundCoffeeProducts, ...accessoryProducts]
const PRICE_TIERS = [20, 30, 50]
const DEFAULTS = { category: 'any', roast: 'any', origin: 'any', price: '9999', sort: 'featured' }

export default function Shop() {
  const { t, lang } = useLanguage()
  const [choices, setChoices] = useState(DEFAULTS)
  const [page, setPage] = useState(1)

  const set = (key) => (value) => {
    setChoices((prev) => ({ ...prev, [key]: value }))
    setPage(1)
  }

  const reset = () => {
    setChoices(DEFAULTS)
    setPage(1)
  }

  const filtered = useMemo(() => {
    let list = [...SHOP_PRODUCTS]
    if (choices.category !== 'any') list = list.filter((p) => p.category === choices.category)
    if (choices.roast !== 'any') list = list.filter((p) => p.roast === choices.roast)
    if (choices.origin !== 'any') list = list.filter((p) => p.origin === choices.origin)
    list = list.filter((p) => p.price <= Number(choices.price))

    if (choices.sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (choices.sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (choices.sort === 'rating') list.sort((a, b) => b.rating - a.rating)

    return list
  }, [choices])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const fields = {
    category: {
      value: choices.category,
      onChange: set('category'),
      ariaLabel: t('categories'),
      options: [
        { value: 'any', label: t('categoryAny') },
        ...coffeeCategories.map((c) => ({ value: c.id, label: t(c.nameKey) })),
      ],
    },
    roast: {
      value: choices.roast,
      onChange: set('roast'),
      ariaLabel: t('roastLevel'),
      options: [
        { value: 'any', label: t('roastAny') },
        ...ROAST_LEVELS.map((r) => ({ value: r, label: t(`roast.${r}`) })),
      ],
    },
    origin: {
      value: choices.origin,
      onChange: set('origin'),
      ariaLabel: t('origin'),
      options: [
        { value: 'any', label: t('originAny') },
        ...ORIGINS.map((o) => ({ value: o, label: t(`origin.${o}`) })),
      ],
    },
    price: {
      value: choices.price,
      onChange: set('price'),
      ariaLabel: t('sortBy'),
      options: [
        { value: '9999', label: t('priceAny') },
        ...PRICE_TIERS.map((n) => ({ value: String(n), label: t('underPrice', { n }) })),
      ],
    },
    sort: {
      value: choices.sort,
      onChange: set('sort'),
      ariaLabel: t('sortBy'),
      options: [
        { value: 'featured', label: t('sortFeatured') },
        { value: 'price-asc', label: t('sortPriceAsc') },
        { value: 'price-desc', label: t('sortPriceDesc') },
        { value: 'rating', label: t('sortRating') },
      ],
    },
  }

  return (
    <div className="container-app py-10">
      <MadLibFilter sentence={shopFilterSentence[lang] || shopFilterSentence.en} fields={fields} />

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-brand-muted">
        <span>{t('matchingCount', { count: filtered.length, total: SHOP_PRODUCTS.length })}</span>
        <button
          onClick={reset}
          className="rounded-full border border-brand-tan/50 px-4 py-1.5 text-brand-dark transition-colors hover:border-brand-rust"
        >
          {t('clearChoices')}
        </button>
      </div>

      <div className="mt-8">
        {paginated.length > 0 ? (
          <ProductGrid products={paginated} />
        ) : (
          <p className="py-16 text-center text-lg text-brand-muted">{t('noProductsMatch')}</p>
        )}
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  )
}
