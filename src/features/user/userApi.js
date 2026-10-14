import { baseApi } from '../../redux/api/baseApi'

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => '/user/profile',
      providesTags: ['User'],
    }),
    updateProfile: builder.mutation({
      query: (payload) => ({ url: '/user/profile', method: 'PATCH', body: payload }),
      invalidatesTags: ['User'],
    }),
    getAddresses: builder.query({
      query: () => '/user/addresses',
      providesTags: ['User'],
    }),
  }),
})

export const { useGetProfileQuery, useUpdateProfileMutation, useGetAddressesQuery } = userApi
