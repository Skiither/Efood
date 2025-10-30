import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { add, open } from '../../store/reducers/cart'
import { Container } from '../../styles'

import ComidaItem from '../Comida'
import Button from '../Button'

import { formataPreco } from '../../utils'

import * as S from './styles'
import fechar from '../../assets/images/close.png'

export type Props = {
  Pratos: PratoDetalhado[]
}

const ListaDeComidas = ({ Pratos }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] =
    useState<PratoDetalhado | null>(null)

  const abrirModal = (prato: PratoDetalhado) => {
    setPratoSelecionado(prato)
    setModalEstaAberto(true)
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
    setPratoSelecionado(null) // Limpa o prato selecionado ao fechar o modal
  }

  const dispatch = useDispatch()

  const addCart = () => {
    if (pratoSelecionado) {
      dispatch(add(pratoSelecionado))
      dispatch(open())
    }
  }

  return (
    <Container as="main">
      <S.ListaDeComida>
        {Pratos.map((Prato) => (
          <ComidaItem
            key={Prato.id}
            imagem={Prato.foto}
            descricaoPrato={Prato.descricao}
            nomePrato={Prato.nome}
            onClick={() => abrirModal(Prato)} // Adiciona um onClick para abrir o modal com o prato certo
          />
        ))}
      </S.ListaDeComida>

      {/* O modal só é renderizado se estiver aberto E se houver um prato selecionado */}
      {modalEstaAberto && pratoSelecionado && (
        <S.Modal className={modalEstaAberto ? 'visivel' : ''}>
          <S.ModalContent>
            <S.BotaoFechar src={fechar} onClick={fecharModal} />
            <S.ImageModal src={pratoSelecionado.foto} />
            <div>
              <S.NomeComida>{pratoSelecionado.nome}</S.NomeComida>
              <S.Descricao>
                {pratoSelecionado.descricao}
                <span>{pratoSelecionado.porcao}</span>
              </S.Descricao>
              <Button
                onClick={addCart}
                type="button"
                title="Clique aqui e adicione"
              >
                Adicionar ao carrinho - {formataPreco(pratoSelecionado.preco)}
              </Button>
            </div>
          </S.ModalContent>
          <div onClick={fecharModal} className="overlay"></div>
        </S.Modal>
      )}
    </Container>
  )
}

export default ListaDeComidas
