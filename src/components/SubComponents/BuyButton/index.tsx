import { ButtonContainer, ButtonTitle } from './styles'

type Props = {
  value: string
  onClick?: () => void
}

export const BuyButton = ({ value, onClick }: Props) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonTitle>Adicionar ao Carrinho - {value}</ButtonTitle>
    </ButtonContainer>
  )
}
