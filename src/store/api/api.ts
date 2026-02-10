import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RestaurantType } from '../../pages/Restaurant'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantType[], void>({
      query: () => '',
    }),

    getRestaurantById: builder.query<RestaurantType, string | number>({
      query: (id) => `/${id}`,
    }),
  }),
})
export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
