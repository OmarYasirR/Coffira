export default function Rating({ value = 0, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1 text-brand-dark">
      <span style={{ fontSize: size }} className="text-brand-rust">★</span>
      <span className="text-sm font-medium">{value.toFixed(1)}</span>
      {count !== undefined && <span className="text-xs text-brand-muted">({count})</span>}
    </div>
  )
}
