export default function Input({ label, id, error, className = '', ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-brand-dark">
          {label}
        </label>
      )}
      <input id={id} className={`input-field ${className}`} {...props} />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  )
}
