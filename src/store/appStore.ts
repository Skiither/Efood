import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Dish = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type CartState = {
  items: Dish[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Dish>) => {
      const itemExists = state.items.some((item) => item.id === action.payload.id)

      if (!itemExists) {
        state.items.push(action.payload)
      }

      state.isOpen = true
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    clearCart: (state) => {
      state.items = []
      state.isOpen = false
    }
  }
})

export const { addItem, clearCart, closeCart, openCart, removeItem } =
  cartSlice.actions

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
