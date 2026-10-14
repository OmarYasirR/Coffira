import { useState } from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { useAuth } from '../../hooks/useAuth'
import { useLanguage } from '../../context/LanguageContext'

export default function Profile() {
  const { user } = useAuth()
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' })

  return (
    <div>
      <h1 className="mb-6 font-serif text-xl font-bold text-brand-dark">{t('profile')}</h1>
      <form className="max-w-md space-y-4">
        <Input label={t('fullName')} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input label={t('email')} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Button type="submit">{t('saveChanges')}</Button>
      </form>
    </div>
  )
}
