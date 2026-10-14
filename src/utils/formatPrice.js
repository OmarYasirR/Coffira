export function formatPrice(amount, currency = 'USD', locale = 'en-US') {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return ''
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount)
}

export function calculateDiscountPrice(price, discountPercent) {
  if (!discountPercent) return price
  return +(price - (price * discountPercent) / 100).toFixed(2)
}
