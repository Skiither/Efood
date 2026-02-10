import {
  RestaurantCardAddButton,
  RestaurantCardDesc,
  RestaurantCardDiv,
  RestaurantCardImage,
  RestaurantCardTitle,
} from './styles'

type Props = {
  id: number
  CardImg: string
  CardTitle: string
  CardDesc: string
  HandleChangeClicked: (data: boolean, id: number) => void
}

export const RestaurantCard = ({ CardDesc, CardImg, CardTitle,id, HandleChangeClicked }: Props) => {
  return (
    <RestaurantCardDiv>
      <div>
        <RestaurantCardImage src={CardImg} />
        <RestaurantCardTitle>{CardTitle}</RestaurantCardTitle>
        <RestaurantCardDesc>{CardDesc}</RestaurantCardDesc>
      </div>
      <RestaurantCardAddButton onClick={() => HandleChangeClicked(true, id)}>
        Ver mais
      </RestaurantCardAddButton>
    </RestaurantCardDiv>
  )
}
