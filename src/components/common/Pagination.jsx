import { useLanguage } from '../../context/LanguageContext'

export default function Pagination({ page, totalPages, onPageChange }) {
  const { t } = useLanguage()
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 py-6">
      <button
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="rounded-md border border-brand-tan/50 px-3 py-1.5 text-sm disabled:opacity-40"
      >
        {t('prev')}
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`rounded-md px-3 py-1.5 text-sm ${
            p === page ? 'bg-brand-dark text-brand-cream' : 'border border-brand-tan/50 text-brand-dark'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="rounded-md border border-brand-tan/50 px-3 py-1.5 text-sm disabled:opacity-40"
      >
        {t('next')}
      </button>
    </div>
  )
}
