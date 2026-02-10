import { useDispatch, useSelector } from 'react-redux'
import { ContinueButton } from '../../ContinueButton'
import {
  EntregaDiv,
  EntregaInfoDiv,
  EntregaInfoDivGrid,
  EntregaInput,
  EntregaLabel,
  EntregaTitle,
} from '../styles'
import { NextFunction, PrevFunction, SaveDelivery } from '../../../../store/slices/CartSlice'
import { ErrorMessage, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { ErrorTooltip } from '../Payment/styles'
import type { RootState } from '../../../../store/indext'

export const CartEntrega = () => {
  //Verification
  const EntregaSchema = Yup.object({
    Nome: Yup.string().required('Digite o nome de quem irá receber'),

    Rua: Yup.string().required('Digite o nome da rua'),

    Cidade: Yup.string().required('Informe a cidade'),

    CEP: Yup.string()
      .matches(/^\d{5}-?\d{3}$/, 'CEP inválido')
      .required('Informe o CEP'),

    Numero: Yup.string().notRequired(),

    Complemento: Yup.string().notRequired(),
  })
  const Dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.delivery)
  return (
    <Formik
      initialValues={{
        Nome: items?.receiver ?? '',
        Rua: items?.address.description ?? '',
        Cidade: items?.address.city ?? '',
        CEP: items?.address.zipCode ?? '',
        Numero: items?.address.number ?? '',
        Complemento: items?.address.complement ?? '',
      }}
      validationSchema={EntregaSchema}
      onSubmit={(value) => {
        const Payload = {
          receiver: value.Nome,
          address: {
            description: value.Rua,
            city: value.Cidade,
            zipCode: value.CEP,
            number: Number(value.Numero),
            complement: value.Complemento,
          },
        }
        Dispatch(SaveDelivery(Payload))
        Dispatch(NextFunction())
      }}
    >
      <Form>
        <EntregaDiv>
          <EntregaTitle>Entrega</EntregaTitle>
          <EntregaInfoDiv>
            <EntregaLabel>Quem irá receber</EntregaLabel>
            <EntregaInput name="Nome" placeholder="Nome" />
            <ErrorMessage name="Nome" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
          </EntregaInfoDiv>
          <EntregaInfoDiv>
            <EntregaLabel>Endereço</EntregaLabel>
            <EntregaInput name="Rua" placeholder="Rua" />
            <ErrorMessage name="Rua" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
          </EntregaInfoDiv>
          <EntregaInfoDiv>
            <EntregaLabel>Cidade</EntregaLabel>
            <EntregaInput name="Cidade" placeholder="Cidade" />
            <ErrorMessage name="Cidade" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
          </EntregaInfoDiv>
          <EntregaInfoDivGrid>
            <EntregaInfoDiv>
              <EntregaLabel>CEP</EntregaLabel>
              <EntregaInput inputMode="numeric" pattern="[0-9]*" name="CEP" placeholder="CEP" />
              <ErrorMessage name="CEP" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
            </EntregaInfoDiv>
            <EntregaInfoDiv>
              <EntregaLabel>Número</EntregaLabel>
              <EntregaInput inputMode="numeric" pattern="[0-9]*" name="Numero" placeholder="Número" />
              <ErrorMessage name="Numero" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
            </EntregaInfoDiv>
          </EntregaInfoDivGrid>
          <EntregaInfoDiv>
            <EntregaLabel>Complemento (Opcional)</EntregaLabel>
            <EntregaInput name="Complemento" placeholder="Complemento" />
            <ErrorMessage name="Complemento" render={(msn) => <ErrorTooltip>{msn}</ErrorTooltip>} />
          </EntregaInfoDiv>
          <div className="buttons">
            <ContinueButton type="submit">Continuar para o Pagamento</ContinueButton>
            <div className="buttons2">
              <ContinueButton type="button" onClick={() => Dispatch(PrevFunction())}>
                Voltar para o Carrinho
              </ContinueButton>
            </div>
          </div>
        </EntregaDiv>
      </Form>
    </Formik>
  )
}
