import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('coffira_token')
      const parsed = token ? JSON.parse(token) : null
      if (parsed) headers.set('Authorization', `Bearer ${parsed}`)
      return headers
    },
  }),
  tagTypes: ['Product', 'Category', 'Order', 'User'],
  endpoints: () => ({}),
})
