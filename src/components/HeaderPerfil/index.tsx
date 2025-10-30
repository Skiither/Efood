import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'
import { Container } from '../../styles'

import logo from '../../assets/images/logo.svg'

type Props = {
  heroBanner: RestauranteDetalhado
}

const HeaderPerfil = ({ heroBanner }: Props) => {
  const dispath = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const cartOpen = () => {
    dispath(open())
  }

  return (
    <header>
      <S.Section>
        <Container>
          <a href="/">Restaurantes</a>
          <Link to="/" className="logo-primeiro">
            <h1>
              <img src={logo} alt="" />
            </h1>
          </Link>
          <span role="button" onClick={cartOpen}>
            {items.length} produto(s) no carrinho
          </span>
        </Container>
      </S.Section>
      <S.Capa style={{ backgroundImage: `url(${heroBanner.capa})` }}>
        <S.Transparente />
        <Container>
          <S.Paragrafo>{heroBanner.tipo}</S.Paragrafo>
          <S.NomeRestaurante>{heroBanner.titulo}</S.NomeRestaurante>
        </Container>
      </S.Capa>
    </header>
  )
}
export default HeaderPerfil
