import { useParams } from 'react-router'
import { RestaurantBanner } from '../../components/Restaurant/RestaurantBanner'
import { RestaurantBody } from '../../components/Restaurant/RestaurantBody'
import { RestaurantHeader } from '../../components/Restaurant/RestaurantHeader'
import { Footer } from '../../components/SubComponents/Footer'
import { useState } from 'react'
import Erro from '../../assets/images/404.jpg'
import { ErrorDiv } from './styles'
import { Modal } from '../../components/SubComponents/Modal'
import { useGetRestaurantByIdQuery } from '../../store/api/api'

export type RestaurantType = {
  id: number
  titulo: string
  descricao: string
  tipo: string
  capa: string
  avaliacao: number
  cardapio: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }[]
}

export const Restaurant = () => {
  //useParams and API importing
  const { id } = useParams()
  const { data, isLoading } = useGetRestaurantByIdQuery(Number(id))

  //clickedApi, and saving the clicked restaurant
  const [clicked, setClicked] = useState(false)
  const [ItemSelected, setItemSelected] = useState(-1)

  //funcion to close
  const HandleCloseClicked = (n: boolean) => {
    setClicked(n)
  }

  //function to change clicked
  const HandleChangeClicked = (data: boolean, id: number) => {
    if (!data) return
    setItemSelected(id)
    setClicked(data)
  }

  //waiting the loading
  if (isLoading)
    return (
      <ErrorDiv>
        <span>Loading...</span>
      </ErrorDiv>
    )

  //error prevention
  if (!data)
    return (
      <ErrorDiv>
        <img src={Erro} alt="Erro 404, 404, error, error 404" />
      </ErrorDiv>
    )

  //returning restaurant page
  return (
    <>
      {clicked && data && ( 
        <Modal prato={data.cardapio[ItemSelected]} Clicked={HandleCloseClicked} key={data.titulo} />
      )}
      <RestaurantHeader/>
      <RestaurantBanner desc={data.titulo} title={data.tipo} img={data.capa} />
      <RestaurantBody HandleChangeClicked={HandleChangeClicked} Cardapio={data ? data.cardapio : []} />
      <Footer />
    </>
  )
}
