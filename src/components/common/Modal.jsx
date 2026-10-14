import { useLanguage } from '../../context/LanguageContext'

export default function Modal({ open, onClose, title, children }) {
  const { t } = useLanguage()
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          {title && <h3 className="font-serif text-lg font-semibold">{title}</h3>}
          <button onClick={onClose} aria-label={t('close')} className="text-brand-muted hover:text-brand-dark">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
