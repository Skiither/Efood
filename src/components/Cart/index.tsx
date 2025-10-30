import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/checkout'
import { close, remove } from '../../store/reducers/cart'

import Button from '../Button'

import { formataPreco, getPrecoTotal } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const openCheckout = () => {
    closeCart()
    dispatch(open())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar className="SideBar">
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CardItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <strong>{formataPreco(item.preco)}</strong>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CardItem>
              ))}
            </ul>
            <S.CardInfoContainer>
              <p>Valor total</p>
              <strong>{formataPreco(getPrecoTotal(items))}</strong>
            </S.CardInfoContainer>
            <Button
              onClick={openCheckout}
              type="button"
              title="Clique aqui para continuar com a entrega"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <>
            <p className="msg-erro">
              O carrinho está vazio, adicione pelo menos um prato para continuar
              com a compra
            </p>
            <Button
              onClick={closeCart}
              type="button"
              title="Clique aqui para voltar a loja"
            >
              Voltar para loja
            </Button>
          </>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}
export default Cart
