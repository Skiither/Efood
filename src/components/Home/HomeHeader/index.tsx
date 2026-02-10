import { Background, Image, Title } from './styles'
import Logo from '../../../assets/images/logo.png'

export const Header = () => {
  return (
    <>
      <Background>
        <Image src={Logo} />
        <Title>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Title>
      </Background>
    </>
  )
}
