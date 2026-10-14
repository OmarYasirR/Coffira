import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { authService } from '../../services/authService'
import { useLanguage } from '../../context/LanguageContext'

export default function ResetPassword() {
  const { t } = useLanguage()
  const [params] = useSearchParams()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirm) {
      setError(t('passwordsMismatch'))
      return
    }
    await authService.resetPassword({ token: params.get('token'), password }).catch(() => {})
    navigate('/login')
  }

  return (
    <div>
      <h1 className="mb-6 font-serif text-2xl font-bold text-brand-dark">{t('resetPasswordTitle')}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label={t('newPassword')} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Input label={t('confirmPassword')} type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" className="w-full">{t('resetPasswordBtn')}</Button>
      </form>
    </div>
  )
}
