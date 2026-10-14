import { baseApi } from '../../redux/api/baseApi'

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/categories',
      providesTags: ['Category'],
    }),
  }),
})

export const { useGetCategoriesQuery } = categoryApi
