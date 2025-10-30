import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/checkout'
import { open } from '../../store/reducers/cart'

import Button from '../Button'

import { formataPreco, getPrecoTotal } from '../../utils'

import { CartContainer, Overlay } from '../Cart/styles'
import * as S from './styles'
import { clear } from '../../store/reducers/cart'

const Checkout = () => {
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      destinatario: '',
      endereco: '',
      cidade: '',
      cep: '',
      numeroDaCasa: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      destinatario: Yup.string()
        .matches(
          /^[A-Za-zÀ-ÿ\s]+$/,
          'O nome deve conter apenas letras e espaços'
        )
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatorio'),
      cidade: Yup.string().required('O campo é obrigatorio'),
      cep: Yup.string()
        .matches(
          /^\d{5}-?\d{3}$/,
          'CEP inválido (formato 12345-678 ou 12345678)'
        )
        .required('O campo é obrigatório'),
      numeroDaCasa: Yup.string().required('O campo é obrigatorio'),
      complemento: Yup.string().notRequired(),

      //Valida cartao

      nomeCartao: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatorio'),
      numeroCartao: Yup.string()
        .transform((value) => value.replace(/\s/g, '')) // remove todos os espaços
        .matches(/^\d+$/, 'Digite apenas números')
        .min(13, 'O campo precisa ter pelo menos 13 Numeros')
        .max(19, 'O campo precisa ter no máximo 19 Numeros')
        .required('O campo é obrigatorio'),
      cvv: Yup.string()
        .matches(/^\d+$/, 'Digite apenas números')
        .min(3, 'O campo precisa ter pelo menos 3 números')
        .max(4, 'O campo precisa ter no máximo 4 números')
        .required('O campo é obrigatorio'),
      mesVencimento: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido (use de 01 a 12)')
        .required('O campo é obrigatório'),
      anoVencimento: Yup.string()
        .matches(/^\d{2}$/, 'Ano inválido (use 2 dígitos numéricos)')
        .required('O campo é obrigatório')
        .test(
          'valid-expiration',
          'Cartão expirado ou data de vencimento inválida',
          function (value) {
            const { mesVencimento } = this.parent // Acessa o valor do mês de vencimento
            if (!value || !mesVencimento) {
              return true // Deixa a validação de "required" cuidar disso
            }

            const currentYear = new Date().getFullYear() % 100 // Últimos dois dígitos do ano atual
            const currentMonth = new Date().getMonth() + 1 // Mês atual (0-11, então +1)

            const expirationYear = parseInt(value, 10)
            const expirationMonth = parseInt(mesVencimento, 10)

            if (expirationYear < currentYear) {
              return false // Ano de vencimento é anterior ao ano atual
            }

            if (
              expirationYear === currentYear &&
              expirationMonth < currentMonth
            ) {
              return false // Ano é o atual, mas o mês de vencimento já passou
            }

            return true // Data de vencimento é válida
          }
        )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.destinatario,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numeroDaCasa),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputTemErro = (fieldName: string) => {
    const campoFoiTocado = fieldName in form.touched
    const campoEstaInvalido = fieldName in form.errors
    const temErro = campoFoiTocado && campoEstaInvalido

    return temErro
  }

  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCheckout = () => {
    dispatch(close())
  }

  const openCart = () => {
    closeCheckout()
    dispatch(open())
  }

  const [etapaAtual, setEtapaAtual] = useState<
    'entrega' | 'pagamento' | 'finalizado'
  >('entrega')

  const irParaPagamento = () => setEtapaAtual('pagamento')
  const irParaFinalizado = () => setEtapaAtual('finalizado')
  const voltarParaEntrega = () => setEtapaAtual('entrega')

  const enviarEntregaEIrParaPagamento = async () => {
    // valida todos os campos e recebe os erros atuais
    const erros = await form.validateForm()

    const camposEntrega = [
      'destinatario',
      'endereco',
      'cidade',
      'cep',
      'numeroDaCasa'
    ]

    // filtra os erros dos campos de entrega
    const errosEntrega = camposEntrega.filter(
      (campo) => erros[campo as keyof typeof erros]
    )

    if (errosEntrega.length === 0) {
      irParaPagamento()
    } else {
      // marca os campos de entrega como tocados para mostrar erros
      const touchedFields: Record<string, boolean> = {}
      camposEntrega.forEach((campo) => {
        touchedFields[campo] = true
      })
      form.setTouched(touchedFields)
    }
  }

  const enviarPagamentoEFinalizar = async () => {
    // Garante que a validação rode antes de enviar
    const isValid = await form.validateForm()

    if (Object.keys(isValid).length === 0) {
      form.handleSubmit()
      irParaFinalizado()
    } else {
      form.setTouched({
        nomeCartao: true,
        numeroCartao: true,
        cvv: true,
        mesVencimento: true,
        anoVencimento: true
      })
    }
  }

  useEffect(() => {
    if (isSuccess && data) {
      irParaFinalizado()
      dispatch(clear())
    }
  }, [isSuccess, data, dispatch])

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckout} />
      <S.Aside className="SideBar">
        <form onSubmit={form.handleSubmit}>
          {etapaAtual === 'entrega' ? (
            <>
              <h3>Entrega</h3>
              <S.FormContainer>
                <label htmlFor="destinatario">Quem irá receber</label>
                <S.Input
                  id="destinatario"
                  type="text"
                  value={form.values.destinatario}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputTemErro('destinatario') ? 'erro' : ''}
                />
                <label htmlFor="endereco">Endereço</label>
                <S.Input
                  id="endereco"
                  name="endereco"
                  type="text"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputTemErro('endereco') ? 'erro' : ''}
                />
                <label htmlFor="cidade">Cidade</label>
                <S.Input
                  id="cidade"
                  name="cidade"
                  type="text"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputTemErro('cidade') ? 'erro' : ''}
                />
                <S.Row>
                  <div>
                    <label htmlFor="cep">CEP</label>
                    <S.Input
                      as={InputMask}
                      maxWidth="155px"
                      id="cep"
                      name="cep"
                      type="text"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputTemErro('cep') ? 'erro' : ''}
                      mask="99999-999"
                    />
                  </div>
                  <div>
                    <label htmlFor="numeroDaCasa">Numero</label>
                    <S.Input
                      maxWidth="155px"
                      id="numeroDaCasa"
                      name="numeroDaCasa"
                      type="text"
                      value={form.values.numeroDaCasa}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputTemErro('numeroDaCasa') ? 'erro' : ''
                      }
                    />
                  </div>
                </S.Row>
                <label htmlFor="complemento">Complemento opcional</label>
                <S.Input
                  id="complemento"
                  name="complemento"
                  type="text"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.FormContainer>
              <S.ContainerButton>
                <Button
                  onClick={enviarEntregaEIrParaPagamento}
                  type="button"
                  title="Continue para comprar"
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  onClick={openCart}
                  type="button"
                  title="Voltar para as compras"
                >
                  Voltar para o carrinho
                </Button>
              </S.ContainerButton>
            </>
          ) : etapaAtual === 'pagamento' ? (
            <>
              <S.FormContainer>
                <h3>
                  Pagamento - Valor a pagar R${' '}
                  {formataPreco(getPrecoTotal(items))}
                </h3>
                <label htmlFor="nomeCartao">Nome no Cartao</label>
                <S.Input
                  id="nomeCartao"
                  name="nomeCartao"
                  type="text"
                  value={form.values.nomeCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputTemErro('nomeCartao') ? 'erro' : ''}
                />
                <S.Row>
                  <div>
                    <label htmlFor="numeroCartao">Número do Cartao</label>
                    <S.Input
                      as={InputMask}
                      maxWidth="228px"
                      id="numeroCartao"
                      name="numeroCartao"
                      type="text"
                      value={form.values.numeroCartao}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputTemErro('numeroCartao') ? 'erro' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV</label>
                    <S.Input
                      as={InputMask}
                      maxWidth="87px"
                      id="cvv"
                      name="cvv"
                      type="text"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputTemErro('cvv') ? 'erro' : ''}
                      mask="999"
                    />
                  </div>
                </S.Row>
                <S.Row>
                  <div>
                    <label htmlFor="mesVencimento">Mês de vencimento</label>
                    <S.Input
                      as={InputMask}
                      id="mesVencimento"
                      name="mesVencimento"
                      type="text"
                      value={form.values.mesVencimento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputTemErro('mesVencimento') ? 'erro' : ''
                      }
                      mask="99"
                    />
                  </div>
                  <div>
                    <label htmlFor="anoVencimento">Ano de vencimento</label>
                    <S.Input
                      as={InputMask}
                      id="anoVencimento"
                      name="anoVencimento"
                      type="text"
                      value={form.values.anoVencimento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputTemErro('anoVencimento') ? 'erro' : ''
                      }
                      mask="99"
                    />
                  </div>
                </S.Row>
              </S.FormContainer>
              <S.ContainerButton>
                <Button
                  onClick={enviarPagamentoEFinalizar}
                  type="submit"
                  title="Continue para comprar"
                  disabled={isLoading}
                >
                  {isLoading
                    ? 'Finalizando pagamento...'
                    : 'Finalizar pagamento'}
                </Button>
                <Button
                  onClick={voltarParaEntrega}
                  type="button"
                  title="Volte para editar seu endereço"
                >
                  Voltar para a edição de endereço
                </Button>
              </S.ContainerButton>
            </>
          ) : (
            <>
              {data && (
                <>
                  <h3>Pedido realizado - {data.orderId}</h3>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                  <S.ContainerButton onClick={closeCheckout}>
                    <Button
                      title="Seu pedido foi finalizado click e volte para home"
                      type="link"
                      to="/"
                    >
                      Concluir
                    </Button>
                  </S.ContainerButton>
                </>
              )}
            </>
          )}
        </form>
      </S.Aside>
    </CartContainer>
  )
}
export default Checkout
