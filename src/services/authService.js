import { api } from './api'
import { storageService } from './storageService'

const TOKEN_KEY = 'coffira_token'

export const authService = {
  async login(credentials) {
    const data = await api.post('/auth/login', credentials)
    if (data?.token) storageService.set(TOKEN_KEY, data.token)
    return data
  },
  async register(payload) {
    const data = await api.post('/auth/register', payload)
    if (data?.token) storageService.set(TOKEN_KEY, data.token)
    return data
  },
  async forgotPassword(email) {
    return api.post('/auth/forgot-password', { email })
  },
  async resetPassword(payload) {
    return api.post('/auth/reset-password', payload)
  },
  logout() {
    storageService.remove(TOKEN_KEY)
  },
  getToken() {
    return storageService.get(TOKEN_KEY)
  },
  isAuthenticated() {
    return Boolean(storageService.get(TOKEN_KEY))
  },
}
