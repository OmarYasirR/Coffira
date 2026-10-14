import { useState } from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { useLanguage } from '../../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="container-app py-14 max-w-xl">
      <h1 className="mb-6 font-serif text-3xl font-bold text-brand-dark">{t('contactTitle')}</h1>
      {sent ? (
        <p className="text-brand-rust font-medium">{t('contactThanks')}</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label={t('name')} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <Input label={t('email')} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-brand-dark">{t('message')}</label>
            <textarea
              className="input-field min-h-32"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <Button type="submit">{t('sendMessage')}</Button>
        </form>
      )}
    </div>
  )
}
