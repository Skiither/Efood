import logo from '../../assets/images/logo.svg'

import * as S from './styles'

const Header = () => (
  <S.Hero>
    <h1>
      <S.LogoImg src={logo} alt="EFOOD" />
    </h1>

    <S.SubTitulo>
      Viva experiências gastronômicas no conforto da sua casa
    </S.SubTitulo>
  </S.Hero>
)

export default Header
