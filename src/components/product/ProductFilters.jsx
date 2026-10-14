import { ROAST_LEVELS, ORIGINS } from '../../utils/constants'
import { coffeeCategories } from '../../data/categories'
import { useLanguage } from '../../context/LanguageContext'

export default function ProductFilters({ filters, onChange }) {
  const { t } = useLanguage()

  return (
    <div className="space-y-6 text-sm">
      <div>
        <h4 className="mb-2 font-serif font-semibold text-brand-dark">{t('categories')}</h4>
        <ul className="space-y-1.5">
          {coffeeCategories.map((cat) => (
            <li key={cat.id}>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === cat.id}
                  onChange={() => onChange('category', cat.id)}
                />
                {t(cat.nameKey)}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 font-serif font-semibold text-brand-dark">{t('roastLevel')}</h4>
        <ul className="space-y-1.5">
          {ROAST_LEVELS.map((roast) => (
            <li key={roast}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.roast === roast}
                  onChange={() => onChange('roast', filters.roast === roast ? null : roast)}
                />
                {roast}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 font-serif font-semibold text-brand-dark">{t('origin')}</h4>
        <ul className="space-y-1.5 max-h-48 overflow-y-auto pr-2">
          {ORIGINS.map((origin) => (
            <li key={origin}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.origin === origin}
                  onChange={() => onChange('origin', filters.origin === origin ? null : origin)}
                />
                {origin}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
