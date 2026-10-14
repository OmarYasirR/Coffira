import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { useAuth } from '../../hooks/useAuth'
import { useLanguage } from '../../context/LanguageContext'

export default function Register() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const { register, status, error } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(form)
    navigate('/account')
  }

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-bold text-brand-dark">{t('createAccount')}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label={t('fullName')} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <Input label={t('email')} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <Input label={t('password')} type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" className="w-full" disabled={status === 'loading'}>
          {status === 'loading' ? t('creatingAccount') : t('createAccount')}
        </Button>
      </form>
      <p className="mt-4 text-sm text-brand-muted">
        {t('alreadyHaveAccount')} <Link to="/login" className="text-brand-rust">{t('signIn')}</Link>
      </p>
    </div>
  )
}
