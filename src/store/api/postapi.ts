import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const checkoutApi = createApi({
  reducerPath: 'checkoutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/checkout',
  }),
  endpoints: (builder) => ({
      createOrder: builder.mutation({
        query: (orderData) => ({
          url: '',
          method: 'POST',
          body: orderData
        })
      })
    }),
  })
export const { useCreateOrderMutation } = checkoutApi
