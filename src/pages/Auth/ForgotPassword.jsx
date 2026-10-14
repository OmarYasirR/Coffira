import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { authService } from '../../services/authService'
import { useLanguage } from '../../context/LanguageContext'

export default function ForgotPassword() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await authService.forgotPassword(email).catch(() => {})
    setSent(true)
  }

  return (
    <div>
      <h1 className="mb-2 font-serif text-2xl font-bold text-brand-dark">{t('forgotPasswordTitle')}</h1>
      <p className="mb-6 text-sm text-brand-muted">{t('forgotPasswordSubtitle')}</p>
      {sent ? (
        <p className="text-sm text-brand-rust">{t('checkInboxReset')}</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label={t('email')} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Button type="submit" className="w-full">{t('sendResetLink')}</Button>
        </form>
      )}
      <Link to="/login" className="mt-4 inline-block text-sm text-brand-rust">{t('backToSignIn')}</Link>
    </div>
  )
}
