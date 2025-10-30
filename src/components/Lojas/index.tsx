import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  imagem: string
  titulo: string
  nota: string
  descricao: string
  categoria: string
  destaque?: boolean
  id: number
}

import StarIcon from '../../assets/icons/StarIcons.svg'

const Lojas = ({
  imagem,
  titulo,
  nota,
  descricao,
  categoria,
  destaque = false,
  id
}: Props) => (
  <S.CardLoja>
    <S.ImagemCapa style={{ backgroundImage: `url(${imagem})` }}>
      <S.ContainerTag>
        {destaque && <Tag size="big">Destaque da semana</Tag>}
        <Tag>{categoria}</Tag>
      </S.ContainerTag>
    </S.ImagemCapa>
    <S.Container>
      <S.ContainerCabecalho>
        <S.Titulo>{titulo}</S.Titulo>
        <S.ContainerAvaliacao>
          <S.NotaAvaliacao>{nota}</S.NotaAvaliacao>
          <img src={StarIcon} alt="icone estrela" />
        </S.ContainerAvaliacao>
      </S.ContainerCabecalho>
      <S.Descricao>{descricao}</S.Descricao>
      <Button
        to={`/restaurante/${id}`}
        type="link"
        title="Clique aqui e conheca a loja"
      >
        Saiba mais
      </Button>
    </S.Container>
  </S.CardLoja>
)

export default Lojas
