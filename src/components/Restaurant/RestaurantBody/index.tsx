import { RestaurantCard } from '../RestaurantCard'
import { RestaurantBodyContainer, RestaurantContainer } from './styles'

type Props = {
  Cardapio: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }[]
  HandleChangeClicked: (data: boolean, id: number) => void
}

export const RestaurantBody = ({ Cardapio, HandleChangeClicked }: Props) => {
  return (
    <RestaurantBodyContainer>
      <RestaurantContainer>
        {Cardapio.map((item, index) => (
          <RestaurantCard
            key={item.nome}
            id={index}
            CardImg={item.foto}
            CardDesc={item.descricao}
            CardTitle={item.nome}
            HandleChangeClicked={HandleChangeClicked}
          />
        ))}
      </RestaurantContainer>
    </RestaurantBodyContainer>
  )
}
