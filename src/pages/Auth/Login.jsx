import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { useAuth } from '../../hooks/useAuth'
import { useLanguage } from '../../context/LanguageContext'

export default function Login() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ email: '', password: '' })
  const { login, status, error } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(form)
    navigate('/account')
  }

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-bold text-brand-dark">{t('signIn')}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label={t('email')}
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Input
          label={t('password')}
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" className="w-full" disabled={status === 'loading'}>
          {status === 'loading' ? t('signingIn') : t('signIn')}
        </Button>
      </form>
      <div className="mt-4 flex justify-between text-sm">
        <Link to="/forgot-password" className="text-brand-rust">{t('forgotPassword')}</Link>
        <Link to="/register" className="text-brand-rust">{t('createAccount')}</Link>
      </div>
    </div>
  )
}
