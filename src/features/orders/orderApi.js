import { baseApi } from '../../redux/api/baseApi'

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => '/orders',
      providesTags: ['Order'],
    }),
    getOrderById: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: ['Order'],
    }),
    createOrder: builder.mutation({
      query: (payload) => ({ url: '/orders', method: 'POST', body: payload }),
      invalidatesTags: ['Order'],
    }),
  }),
})

export const { useGetOrdersQuery, useGetOrderByIdQuery, useCreateOrderMutation } = orderApi
