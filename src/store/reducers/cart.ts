import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: PratoDetalhado[]
  isOpen: boolean
  entregaOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  entregaOpen: false
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PratoDetalhado>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('Este prato ja foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, close, open, remove, clear } = CartSlice.actions
export default CartSlice.reducer
