import { useDispatch, useSelector } from 'react-redux'
import { EntregaDiv, EntregaInfoDiv, EntregaInput, EntregaLabel, EntregaTitle } from '../styles'
import { ContinueButton } from '../../ContinueButton'
import { AttOrderId, Finish, NextFunction, PrevFunction, ResetFunction, SavePayment } from '../../../../store/slices/CartSlice'
import { EntregaInfoDivGrid, EntregaInfoDivGridMesAno, ErrorTooltip } from './styles'
import { ErrorMessage, Form, Formik } from 'formik'
import { useCreateOrderMutation } from '../../../../store/api/postapi'
import * as Yup from 'yup'
import { store, type RootState } from '../../../../store/indext'

export const PaymentCart = () => {
  const Dispatch = useDispatch()

  //Pegando os itens do estado global, e puxando o mutate da api
  const [createOrder] = useCreateOrderMutation()

  //Verification
  const EntregaSchema = Yup.object({
    Nome: Yup.string().required('Digite o nome que está no cartão'),

    Numero: Yup.string()
      .matches(/^\d{14,20}$/, 'Digite um cartão valido')
      .required('Digite o número do cartão'),

    CVV: Yup.string()
      .matches(/^\d{3}$/, 'Digite um cartão valido')
      .required('Digite o CVV'),

    Mes: Yup.string()
      .matches(/^\d{2}$/, 'Digite um cartão valido')
      .typeError('Digite um mês valido')
      .required('Mes Invalido'),

    Ano: Yup.string()
      .matches(/^\d{4}$/, 'Digite um cartão valido')
      .typeError('Digite um Ano válido')
      .required('Ano Invalido'),
  })
  const items = useSelector((state: RootState) => state.cart.payment?.card)

  return (
    <Formik
      initialValues={{
        Nome: items?.name ?? '',
        Numero: items?.number ?? '',
        CVV: '',
        Mes: '',
        Ano: '',
      }}
      validationSchema={EntregaSchema}
      onSubmit={ async (value) => {
        const Payload = {
          card: {
            name: value.Nome,
            number: value.Numero,
            code: Number(value.CVV),
            expires: {
              month: Number(value.Mes),
              year: Number(value.Ano),
            },
          },
        }
        Dispatch(SavePayment(Payload))
        Dispatch(Finish())
        try {
          const finished = store.getState().cart.finish
          const result = await createOrder(finished).unwrap()
          Dispatch(AttOrderId(result.orderId))
          Dispatch(NextFunction())
          Dispatch(ResetFunction())
        } catch (err){
          console.error(err)
          alert("Falha ao completar o pedido")
        }
      }}
    >
      <Form>
        <EntregaDiv>
          <EntregaTitle>Entrega</EntregaTitle>
          <EntregaInfoDiv>
            <EntregaLabel>Nome</EntregaLabel>
            <EntregaInput name="Nome" placeholder="Nome" />
            <ErrorMessage name="Nome" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
          </EntregaInfoDiv>
          <EntregaInfoDivGrid>
            <EntregaInfoDiv>
              <EntregaLabel>Numero do Cartao</EntregaLabel>
              <EntregaInput name="Numero" placeholder="Numero" />
              <ErrorMessage name="Numero" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
            </EntregaInfoDiv>
            <EntregaInfoDiv>
              <EntregaLabel>CVV</EntregaLabel>
              <EntregaInput name="CVV" placeholder="CVV" />
              <ErrorMessage name="CVV" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
            </EntregaInfoDiv>
          </EntregaInfoDivGrid>
          <EntregaInfoDivGridMesAno>
            <EntregaInfoDiv>
              <EntregaLabel>Mês de Vencimento</EntregaLabel>
              <EntregaInput name="Mes" placeholder="Mês" />
              <ErrorMessage name="Mes" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
            </EntregaInfoDiv>
            <EntregaInfoDiv>
              <EntregaLabel>Ano de Vencimento</EntregaLabel>
              <EntregaInput name="Ano" placeholder="Ano" />
              <ErrorMessage name="Ano" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
            </EntregaInfoDiv>
          </EntregaInfoDivGridMesAno>
          <div className="buttons">
            <ContinueButton type="submit">Finalizar Compra</ContinueButton>
            <div className="buttons2">
              <ContinueButton onClick={() => Dispatch(PrevFunction())}>
                Voltar para o Endereço
              </ContinueButton>
            </div>
          </div>
        </EntregaDiv>
      </Form>
    </Formik>
  )
}
