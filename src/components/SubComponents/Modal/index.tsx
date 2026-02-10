import { BuyButton } from '../BuyButton'
import {
  ModalCloseButton,
  ModalContainer,
  ModalDesc,
  ModalImage,
  ModalItem,
  ModalTitle,
} from './styles'
import Close from '../../../assets/images/Icons/close.png'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store/indext'
import { addItem } from '../../../store/slices/CartSlice'

type Props = {
  prato: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }
  Clicked: (data: boolean) => void
}

export const Modal = ({ prato, Clicked }: Props) => {
  const Dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  //Function to verify addItem
  const AddItem = (prato: Props['prato']) => {
    const Exist = items.some((item) => item.id === prato.id)

    if (!Exist) {
      Dispatch(addItem(prato))
    } else {
      alert("Item já adicionado ao carrinho!")
    }
  }

  //Function AddItem and CloseModal
  const Final = () => {
    AddItem(prato)
    Clicked(false)
  }

  const PratoPreco = prato.preco.toLocaleString("pt-br", {style: 'currency', currency: "BRL"})

  return (
    <>
      <ModalContainer>
        <div>
          <ModalItem>
            <ModalCloseButton onClick={() => Clicked(false)} src={Close} />
            <ModalImage src={prato.foto} />
            <div>
              <ModalTitle>{prato.nome}</ModalTitle>
              <ModalDesc className="principalDesc">{prato.descricao}</ModalDesc>
              <ModalDesc>
                Serve: <span>{prato.porcao}</span>
              </ModalDesc>
              <BuyButton onClick={() => Final()} value={PratoPreco} />
            </div>
          </ModalItem>
        </div>
      </ModalContainer>
    </>
  )
}
