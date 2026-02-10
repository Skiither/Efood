import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterSection>
    <Link to="/">
      <S.Logo src={logo} />
    </Link>
    <S.RedesContainer>
      <img src={instagram} alt="Logo instagram" />
      <img src={facebook} alt="Logo FaceBook" />
      <img src={twitter} alt="Logo Twitter (Passarinho)" />
    </S.RedesContainer>
    <S.Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Paragrafo>
  </S.FooterSection>
)

export default Footer
