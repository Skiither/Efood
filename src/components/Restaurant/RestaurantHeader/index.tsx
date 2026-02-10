import { Background, HeaderContainer, HeaderImg, Restaurant } from './styles'
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store/indext'
import { CartBody } from '../../SubComponents/Cart'
import { ItemsList } from '../../SubComponents/CartListItems'
import { CartEntrega } from '../../SubComponents/StepsCart/Adress'
import { PaymentCart } from '../../SubComponents/StepsCart/Payment'
import { FinishedCart } from '../../SubComponents/StepsCart/Finished'
import { Clicked } from '../../../store/slices/CartSlice'

export const RestaurantHeader = () => {
  //Processos cart
  const Processos = [
    <ItemsList />,
    <CartEntrega />,
    <PaymentCart />,
    <FinishedCart />
  ]

  const Dispatch = useDispatch()

  const ite = useSelector((state: RootState) => state.cart)
  const wasClicked = useSelector((state: RootState) => state.cart.clicked)

  return (
    <Background>
      {wasClicked ? (
        <CartBody>
          {Processos[ite.step]}
        </CartBody>
      ): null}
      <HeaderContainer>
        <Restaurant>
          <Link to="/">Restaurants</Link>
        </Restaurant>
        <HeaderImg src={Logo} />
        <Restaurant onClick={() => Dispatch(Clicked())}>{ite.items.length} Product(s) in cart</Restaurant>
      </HeaderContainer>
    </Background>
  )
}
