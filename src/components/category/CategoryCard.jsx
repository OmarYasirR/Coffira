import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function CategoryCard({ category }) {
  const { t } = useLanguage()
  const label = category.nameKey ? t(category.nameKey) : category.name

  return (
    <Link to={`/category/${category.id}`} className="group flex flex-col items-center gap-3">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-brand-creamAlt ring-1 ring-brand-tan/20 transition-transform group-hover:scale-105 group-hover:ring-brand-rust/40">
        <img src={category.image} alt={label} className="h-full w-full object-cover" />
      </div>
      <span className="text-sm font-medium text-brand-dark">{label}</span>
    </Link>
  )
}
