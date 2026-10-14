export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function isValidPassword(password) {
  return typeof password === 'string' && password.length >= 8
}

export function isValidPhone(phone) {
  return /^[+]?[\d\s-()]{7,}$/.test(phone)
}

export function isRequired(value) {
  return value !== undefined && value !== null && String(value).trim().length > 0
}

export function isValidZip(zip) {
  return /^\d{4,10}(-\d{4})?$/.test(zip)
}
