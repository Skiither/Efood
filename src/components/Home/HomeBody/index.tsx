import { useGetRestaurantsQuery } from '../../../store/api/api'
import { Card } from '../../SubComponents/Card'
import { HomeBodyContainer, BodyContainer, Loading } from './styles'

export const Body = () => {
  const { data, isLoading } = useGetRestaurantsQuery()

  return (
    <BodyContainer>
      <div className="container">
        {isLoading ? <Loading>{<h1>Loading...</h1>}</Loading> : ''}
        <HomeBodyContainer>
          {data?.map((RestaurantItem) => {
            return (
              <Card
                key={RestaurantItem.id}
                image={RestaurantItem.capa}
                title={RestaurantItem.titulo}
                rating={RestaurantItem.avaliacao}
                desc={RestaurantItem.descricao}
                link={`${RestaurantItem.id}`}
              />
            )
          })}
        </HomeBodyContainer>
      </div>
    </BodyContainer>
  )
}
