import Button from '../Button'
import * as S from './styles'

type Props = {
  imagem: string
  nomePrato: string
  descricaoPrato: string
  onClick: () => void
}

const ComidaItem = ({ imagem, nomePrato, descricaoPrato, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 129) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <S.ComidaFoto src={imagem} alt={descricaoPrato} />
      <S.ComidaNome>{nomePrato}</S.ComidaNome>
      <S.ComidaDescricao>{getDescricao(descricaoPrato)}</S.ComidaDescricao>
      <Button
        onClick={onClick}
        type="button"
        title="clique e adicione sua comida"
      >
        Mais Detalhes
      </Button>
    </S.Card>
  )
}
export default ComidaItem
