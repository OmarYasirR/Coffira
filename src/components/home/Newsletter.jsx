import { useState } from 'react'
import Button from '../common/Button'
import { useLanguage } from '../../context/LanguageContext'

export default function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="container-app py-12">
      <div className="rounded-xl bg-brand-cream p-8 text-center">
        <h2 className="font-serif text-2xl font-bold text-brand-dark">{t('newsletterTitle')}</h2>
        <p className="mt-2 text-sm text-brand-muted">{t('newsletterSubtitle')}</p>
        {submitted ? (
          <p className="mt-4 text-brand-rust font-medium">{t('subscribeThanks')}</p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-4 flex max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              className="input-field"
            />
            <Button type="submit" variant="primary">{t('subscribe')}</Button>
          </form>
        )}
      </div>
    </section>
  )
}
