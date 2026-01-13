import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Address = {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

type Delivery = {
  receiver: string
  address: Address
}

type Payment = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

type Finish = {
  products: object[]
  delivery: Delivery
  payment: Payment
}

type CartState = {
  items: Prato[]
  step: number
  clicked: boolean
  delivery: Delivery
  payment: Payment
  finish: Finish | null
  orderId: string
}
const initialState: CartState = {
  items: [],
  step: 0,
  clicked: false,
  delivery: {
    receiver: "",
    address: {
      description: "",
      city: "",
      zipCode: "",
      number: 0,
      complement: ""
    }
  },

  payment: {
    card: {
      name: "",
      number: "",
      code: 0,
      expires: {
        month: 0,
        year: 0
      }
    }
  },

  finish: null,
  orderId: ''
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload)
    },
    RemoveItem: (state, action: PayloadAction<Prato>) => {
      state.items = state.items.filter((item) => item.nome !== action.payload.nome)
    },
    NextFunction: (state) => {
      state.step += 1
    },
    PrevFunction: (state) => {
      state.step -= 1
    },
    ResetFunction: (state) => {
      state.delivery = {
        receiver: "",
        address: {
          description: "",
          city: "",
          zipCode: "",
          number: 0,
          complement: ""
        }
      }
      state.payment = {
        card: {
          name: "",
          number: "",
          code: 0,
          expires: {
            month: 0,
            year: 0
          }
        }
      }
      state.items = []
    },
    Clicked: (state) => {
      state.clicked = !state.clicked
    },
    SaveDelivery: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload
    },
    SavePayment: (state, action: PayloadAction<Payment>) => {
      state.payment = action.payload
    },
    AttOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
    Finish:  (state) => {
      const itens = state.items.map((item) => ({
        id: item.id,
        price: item.preco
      }))

      state.finish = {
        products: itens,
        delivery: state.delivery,
        payment: state.payment
      }
    },
    ResetStep: (state) => {
      state.step = 0
    }
  },
})

export const {
  Clicked,
  ResetFunction,
  addItem,
  RemoveItem,
  NextFunction,
  PrevFunction,
  SaveDelivery,
  SavePayment,
  Finish,
  AttOrderId,
  ResetStep
} = cartSlice.actions
export default cartSlice.reducer
