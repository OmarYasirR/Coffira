import { baseApi } from '../../redux/api/baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({ url: '/auth/login', method: 'POST', body: credentials }),
    }),
    register: builder.mutation({
      query: (payload) => ({ url: '/auth/register', method: 'POST', body: payload }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({ url: '/auth/forgot-password', method: 'POST', body: { email } }),
    }),
    resetPassword: builder.mutation({
      query: (payload) => ({ url: '/auth/reset-password', method: 'POST', body: payload }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi
