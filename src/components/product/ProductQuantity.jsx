export default function ProductQuantity({ quantity, onChange, min = 1, max = 20 }) {
  return (
    <div className="inline-flex items-center rounded-md border border-brand-tan/50">
      <button
        className="px-3 py-2 text-brand-dark disabled:opacity-30"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
      >
        −
      </button>
      <span className="w-10 text-center text-sm font-medium">{quantity}</span>
      <button
        className="px-3 py-2 text-brand-dark disabled:opacity-30"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  )
}
