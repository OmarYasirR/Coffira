import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from '../../services/authService'

export const loginThunk = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    return await authService.login(credentials)
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const registerThunk = createAsyncThunk('auth/register', async (payload, { rejectWithValue }) => {
  try {
    return await authService.register(payload)
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: authService.isAuthenticated(),
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      authService.logout()
      state.user = null
      state.isAuthenticated = false
    },
    setUser(state, action) {
      state.user = action.payload
      state.isAuthenticated = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload?.user ?? null
        state.isAuthenticated = true
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(registerThunk.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload?.user ?? null
        state.isAuthenticated = true
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { logout, setUser } = authSlice.actions
export default authSlice.reducer
