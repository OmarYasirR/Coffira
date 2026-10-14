const styles = {
  default: 'bg-brand-cream text-brand-dark',
  accent: 'bg-brand-rust text-white',
  dark: 'bg-brand-dark text-brand-cream',
}

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
