import { configureStore } from '@reduxjs/toolkit'
import reducer from './slices/CartSlice'
import { api } from './api/api'
import { checkoutApi } from './api/postapi'

export const store = configureStore({
  reducer: {
    cart: reducer,
    [api.reducerPath]: api.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(checkoutApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
