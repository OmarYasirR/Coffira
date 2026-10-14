import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { translate } from '../i18n/translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'coffira_lang'
const RTL_LANGS = ['ar']

function getInitialLang() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'ar') return stored
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  const isRTL = RTL_LANGS.includes(lang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang, isRTL])

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'))
  }, [])

  const t = useCallback((key, vars) => translate(lang, key, vars), [lang])

  const value = { lang, setLang, toggleLanguage, isRTL, t }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
