import { Tag } from '../Tag'
import { CardImage, TagContainer, CardContainer, CardDiv, CardTitle, CardDesc } from './styles'
import Star from '../../../assets/images/estrela.png'

type Props = {
  image: string
  title: string
  rating: number
  desc: string
  link?: string
}

export const Card = ({ image, title, rating, desc, link }: Props) => {
  const LinkAdress = link
  return (
    <CardContainer>
      <TagContainer>
        <Tag title={title} />
      </TagContainer>
      <CardImage src={image} alt="" />
      <CardDiv>
        <CardTitle>
          {title}
          <div>
            {rating}
            <img src={Star} />
          </div>
        </CardTitle>
        <CardDesc>{desc}</CardDesc>
        <Tag link={LinkAdress} title="Learn More" />
      </CardDiv>
    </CardContainer>
  )
}
