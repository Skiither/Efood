import { Banner, RestaurantDesc, RestaurantDescDiv } from './styles'

type Props = {
  img: string
  title: string
  desc: string
}

export const RestaurantBanner = ({ img, title, desc }: Props) => {
  return (
    <Banner $background={img}>
      <RestaurantDescDiv>
        <RestaurantDesc $weight={100}>{title}</RestaurantDesc>
        <RestaurantDesc $weight={900}>{desc}</RestaurantDesc>
      </RestaurantDescDiv>
    </Banner>
  )
}
