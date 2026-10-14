import { Link } from 'react-router-dom'
import { teaCategories } from '../../data/categories'
import { teaProducts } from '../../data/mockProducts'
import { useLanguage } from '../../context/LanguageContext'
import { formatPrice } from '../../utils/formatPrice'
import { useCart } from '../../hooks/useCart'

export default function TeaSection() {
  const { t } = useLanguage()
  const { addItem } = useCart()
  const featured = teaProducts.slice(0, 4)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2E4F22] via-[#345A28] to-[#1D3617] py-16 text-brand-cream">
      {/* decorative leaf blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-white/5 blur-2xl" />

      <div className="container-app relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* left: intro + categories */}
          <div className="lg:col-span-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#B7D89A]">
              {t('teaKicker')}
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
              {t('teaTitle')}
            </h2>
            <p className="mt-4 max-w-md text-sm text-[#D8E8C8]">{t('teaSubtitle')}</p>
            <Link
              to="/tea"
              className="mt-6 inline-block rounded-md bg-brand-cream px-5 py-2.5 font-medium text-brand-dark hover:opacity-90 transition-opacity"
            >
              {t('shopTea')}
            </Link>

            <div className="mt-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#B7D89A]">
                {t('teaCategories')}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {teaCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className="group flex flex-col items-center gap-2 rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors"
                  >
                    <img src={cat.image} alt={t(cat.nameKey)} className="h-12 w-12 rounded-full transition-transform group-hover:scale-110" />
                    <span className="text-center text-xs font-medium text-[#EAF3DE]">{t(cat.nameKey)}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* right: featured tea products */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#B7D89A]">
              {t('featuredTeas')}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {featured.map((tea) => (
                <div key={tea.id} className="group rounded-lg bg-white/95 p-3 text-brand-dark shadow-sm">
                  <Link to={`/product/${tea.slug}`}>
                    <div className="aspect-square overflow-hidden rounded-md bg-brand-creamAlt">
                      <img
                        src={tea.image}
                        alt={tea.name}
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-2 line-clamp-1 text-xs font-semibold">{tea.name}</p>
                    <p className="text-xs text-brand-muted">{tea.type}</p>
                  </Link>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-serif text-sm font-bold">{formatPrice(tea.price)}</span>
                    <button
                      onClick={() => addItem(tea)}
                      aria-label={t('addToCart')}
                      className="rounded-full bg-brand-dark px-2 py-1 text-xs text-brand-cream hover:bg-brand-rust transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
