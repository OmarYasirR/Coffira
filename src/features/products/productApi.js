import { baseApi } from '../../redux/api/baseApi'

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({ url: '/products', params }),
      providesTags: ['Product'],
    }),
    getProductBySlug: builder.query({
      query: (slug) => `/products/${slug}`,
      providesTags: ['Product'],
    }),
  }),
})

export const { useGetProductsQuery, useGetProductBySlugQuery } = productApi
