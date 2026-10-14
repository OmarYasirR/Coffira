import { useLanguage } from '../../context/LanguageContext'

export default function ProductSort({ value, onChange }) {
  const { t } = useLanguage()
  const options = [
    { value: 'featured', label: t('sortFeatured') },
    { value: 'price-asc', label: t('sortPriceAsc') },
    { value: 'price-desc', label: t('sortPriceDesc') },
    { value: 'rating', label: t('sortRating') },
  ]

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md border border-brand-tan/50 bg-white px-3 py-2 text-sm"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {t('sortBy')}: {opt.label}
        </option>
      ))}
    </select>
  )
}
