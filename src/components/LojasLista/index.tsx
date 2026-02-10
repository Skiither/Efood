import Lojas from '../Lojas'

import { ListaLoja } from './styles'
import { Container } from '../../styles'

type Props = {
  restaurantes: RestauranteDetalhado[]
}

const LojaLista = ({ restaurantes }: Props) => (
  <Container as="main">
    <ListaLoja>
      {restaurantes.map((restaurante) => (
        <Lojas
          key={restaurante.id}
          id={restaurante.id}
          imagem={restaurante.capa}
          destaque={restaurante.destacado}
          categoria={restaurante.tipo}
          titulo={restaurante.titulo}
          nota={restaurante.avaliacao}
          descricao={restaurante.descricao}
        />
      ))}
    </ListaLoja>
  </Container>
)

export default LojaLista
