import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductGrid from '../../components/product/ProductGrid'
import Pagination from '../../components/common/Pagination'
import MadLibFilter from '../../components/product/MadLibFilter'
import { teaProducts } from '../../data/mockProducts'
import { teaCategories } from '../../data/categories'
import { teaFilterSentence } from '../../i18n/filterSentences'
import { useLanguage } from '../../context/LanguageContext'

const PAGE_SIZE = 12
const PRICE_TIERS = [10, 15, 20]
const DEFAULTS = { category: 'any', price: '9999', sort: 'featured' }

export default function ShopTea() {
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
    let list = [...teaProducts]
    if (choices.category !== 'any') list = list.filter((p) => p.category === choices.category)
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
      ariaLabel: t('teaCategories'),
      options: [
        { value: 'any', label: t('teaTypeAny') },
        ...teaCategories.map((c) => ({ value: c.id, label: t(c.nameKey) })),
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
    <div>
      <section className="bg-gradient-to-br from-[#2E4F22] via-[#345A28] to-[#1D3617] py-14 text-brand-cream">
        <div className="container-app">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#B7D89A]">
            {t('teaKicker')}
          </p>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">{t('teaTitle')}</h1>
          <p className="mt-3 mb-8 max-w-lg text-sm text-[#D8E8C8]">{t('teaSubtitle')}</p>

          <MadLibFilter
            sentence={teaFilterSentence[lang] || teaFilterSentence.en}
            fields={fields}
            className="text-brand-cream"
          />
        </div>
      </section>

      <div className="container-app py-8">
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-brand-muted">
          <span>{t('matchingCount', { count: filtered.length, total: teaProducts.length })}</span>
          <button
            onClick={reset}
            className="rounded-full border border-brand-tan/50 px-4 py-1.5 text-brand-dark transition-colors hover:border-brand-rust"
          >
            {t('clearChoices')}
          </button>
        </div>

        {paginated.length > 0 ? (
          <ProductGrid products={paginated} />
        ) : (
          <p className="py-16 text-center text-lg text-brand-muted">{t('noProductsMatch')}</p>
        )}
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

        <div className="mt-10 text-center">
          <Link to="/shop" className="text-sm font-medium text-brand-rust">
            {t('navShop')} → {t('navCoffeeBeans')}
          </Link>
        </div>
      </div>
    </div>
  )
}
