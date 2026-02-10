import { useDispatch, useSelector } from 'react-redux'
import { ContinueButton } from '../../ContinueButton'
import { FinishedCardDesc, FinishedCartTitle } from './styles'
import { Clicked, ResetStep } from '../../../../store/slices/CartSlice'
import type { RootState } from '../../../../store/indext'

export const FinishedCart = () => {
  const Dispatch = useDispatch()
  const OrderId = useSelector((state: RootState) => state.cart.orderId)

  const Finished = () => {
    Dispatch(ResetStep())
    Dispatch(Clicked())
  }
  return (
    <>
      <FinishedCartTitle>
        Pedido Realizado - <span>{OrderId}</span>
      </FinishedCartTitle>
      <FinishedCardDesc>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve,
        será entregue no endereço fornecido.
      </FinishedCardDesc>
      <FinishedCardDesc>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças
        extras.
      </FinishedCardDesc>
      <FinishedCardDesc>
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo
        assim sua segurança e bem-estar durante a refeição.
      </FinishedCardDesc>
      <FinishedCardDesc>
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </FinishedCardDesc>
      <ContinueButton onClick={() => Finished()}>Concluir</ContinueButton>
    </>
  )
}
