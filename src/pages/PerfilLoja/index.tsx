import { useParams } from 'react-router-dom'

import { Container } from '../../styles'
import { useGetPerfilQuery } from '../../services/api'

import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListaDeComidas from '../../components/ListaDeComidas'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import Loader from '../../components/Loader'

const PerfilLoja = () => {
  const { id } = useParams<{ id: string }>()

  const { data: restaurante, isLoading } = useGetPerfilQuery(id || '')

  if (isLoading) {
    return <Loader />
  }

  if (!restaurante) {
    return <div>Restaurante não encontrado.</div>
  }

  const prato = restaurante.cardapio

  return (
    <>
      <HeaderPerfil heroBanner={restaurante} />
      <Container>
        <ListaDeComidas Pratos={prato} />
      </Container>
      <Cart />
      <Checkout />
      <Footer />
    </>
  )
}

export default PerfilLoja
