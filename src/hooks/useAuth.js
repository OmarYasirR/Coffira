import { useSelector, useDispatch } from 'react-redux'
import { loginThunk, registerThunk, logout as logoutAction } from '../features/auth/authSlice'

export function useAuth() {
  const dispatch = useDispatch()
  const { user, status, error, isAuthenticated } = useSelector((state) => state.auth)

  const login = (credentials) => dispatch(loginThunk(credentials))
  const register = (payload) => dispatch(registerThunk(payload))
  const logout = () => dispatch(logoutAction())

  return { user, status, error, isAuthenticated, login, register, logout }
}
