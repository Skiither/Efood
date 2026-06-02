import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import logo from './assets/images/logo.png'
import fundo from './assets/images/fundo.png'
import estrela from './assets/images/estrela.png'
import lixeira from './assets/images/lixeira.png'
import type { AppDispatch, Dish, RootState } from './store/appStore'
import { addItem, clearCart, closeCart, openCart, removeItem } from './store/appStore'

type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

type CheckoutForm = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
  cardName: string
  cardNumber: string
  cardCode: string
  cardMonth: string
  cardYear: string
}

const API_URL = 'https://api-ebac.vercel.app/api/efood'

const formatPrice = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #fff8f2;
    color: #e66767;
    font-family: Arial, Helvetica, sans-serif;
  }

  button,
  input {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: calc(100% - 32px);
  }
`

const HeaderHome = styled.header`
  background: #fff8f2 url(${fundo}) center / cover;
  min-height: 360px;
  padding: 40px 0;
  text-align: center;

  img {
    height: 58px;
    margin-bottom: 120px;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
    line-height: 1.2;
    margin: 0 auto;
    max-width: 560px;
  }

  @media (max-width: 640px) {
    min-height: 300px;

    img {
      margin-bottom: 72px;
    }

    h1 {
      font-size: 28px;
    }
  }
`

const HeaderRestaurant = styled.header`
  background: #fff8f2 url(${fundo}) center / cover;
  padding: 24px 0;

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  img {
    height: 58px;
  }

  button,
  a {
    background: transparent;
    border: 0;
    color: #e66767;
    font-size: 18px;
    font-weight: 900;
  }

  @media (max-width: 640px) {
    .container {
      gap: 16px;
      text-align: center;
    }

    button,
    a {
      font-size: 14px;
    }
  }
`

const Grid = styled.main`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 56px 0 96px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  background: #fff;
  border: 1px solid #e66767;
  color: #e66767;
  min-height: 398px;
  position: relative;

  > img {
    display: block;
    height: 217px;
    object-fit: cover;
    width: 100%;
  }

  .tags {
    display: flex;
    gap: 8px;
    position: absolute;
    right: 8px;
    top: 16px;
  }

  .tag {
    background: #e66767;
    color: #ffebd9;
    font-size: 12px;
    font-weight: 700;
    padding: 6px;
  }

  .content {
    padding: 8px;
  }

  .title-row {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  .rating {
    align-items: center;
    display: flex;
    font-size: 18px;
    font-weight: 900;
    gap: 8px;
  }

  .rating img {
    height: 21px;
    width: 21px;
  }

  p {
    color: #e66767;
    font-size: 14px;
    line-height: 22px;
    min-height: 88px;
  }
`

const Button = styled.button`
  background: #e66767;
  border: 0;
  color: #ffebd9;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  margin-top: 16px;
  padding: 6px 12px;
`

const LinkButton = styled(Link)`
  background: #e66767;
  color: #ffebd9;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  margin-top: 16px;
  padding: 6px 12px;
`

const Banner = styled.section<{ image: string }>`
  background:
    linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${({ image }) => image}) center / cover;
  color: #fff;
  min-height: 280px;
  padding: 32px 0;

  .container {
    display: flex;
    flex-direction: column;
    height: 216px;
    justify-content: space-between;
  }

  span {
    font-size: 32px;
    font-weight: 100;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
  }
`

const MenuGrid = styled.main`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 56px 0 96px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const DishCard = styled.article`
  background: #e66767;
  color: #ffebd9;
  display: flex;
  flex-direction: column;
  min-height: 338px;
  padding: 8px;

  img {
    height: 167px;
    object-fit: cover;
    width: 100%;
  }

  h2 {
    font-size: 16px;
    font-weight: 900;
    margin-top: 8px;
  }

  p {
    flex: 1;
    font-size: 14px;
    line-height: 22px;
    margin: 8px 0;
  }

  button {
    background: #ffebd9;
    border: 0;
    color: #e66767;
    font-size: 14px;
    font-weight: 700;
    padding: 6px;
    width: 100%;
  }
`

const Footer = styled.footer`
  background: #ffebd9;
  padding: 40px 0;
  text-align: center;

  img {
    height: 58px;
    margin-bottom: 24px;
  }

  p {
    font-size: 12px;
    line-height: 18px;
    margin: 0 auto;
    max-width: 480px;
  }
`

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.72);
  inset: 0;
  position: fixed;
  z-index: 10;
`

const ModalCard = styled.div`
  background: #e66767;
  color: #ffebd9;
  display: grid;
  gap: 24px;
  grid-template-columns: 280px 1fr;
  left: 50%;
  max-width: 1024px;
  padding: 32px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 32px);
  z-index: 11;

  > img {
    height: 280px;
    object-fit: cover;
    width: 100%;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background: #ffebd9;
    border: 0;
    color: #e66767;
    font-size: 14px;
    font-weight: 700;
    padding: 6px;
  }

  .close {
    background: transparent;
    color: #ffebd9;
    font-size: 28px;
    line-height: 1;
    position: absolute;
    right: 8px;
    top: 4px;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;

    > img {
      height: 220px;
    }
  }
`

const Drawer = styled.aside<{ isOpen: boolean }>`
  background: #e66767;
  color: #ffebd9;
  height: 100vh;
  max-width: 360px;
  overflow-y: auto;
  padding: 32px 8px;
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? '0' : '-380px')};
  top: 0;
  transition: right 0.2s ease;
  width: calc(100% - 32px);
  z-index: 20;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    background: #ffebd9;
    border: 1px solid #ffebd9;
    color: #4b4b4b;
    display: block;
    height: 32px;
    margin-bottom: 8px;
    padding: 8px;
    width: 100%;
  }

  .row {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
  }

  .actions {
    display: grid;
    gap: 8px;
    margin-top: 16px;
  }

  .actions button {
    background: #ffebd9;
    border: 0;
    color: #e66767;
    font-size: 14px;
    font-weight: 700;
    padding: 6px;
    width: 100%;
  }
`

const CartItem = styled.li`
  background: #ffebd9;
  color: #e66767;
  display: grid;
  gap: 8px;
  grid-template-columns: 80px 1fr 24px;
  list-style: none;
  margin-bottom: 16px;
  padding: 8px;

  img {
    height: 80px;
    object-fit: cover;
    width: 80px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  button {
    align-self: end;
    background: transparent;
    border: 0;
  }

  button img {
    height: 16px;
    width: 16px;
  }
`

const Total = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  justify-content: space-between;
  margin: 24px 0 16px;
`

const Message = styled.div`
  padding: 64px 0 96px;
  text-align: center;
`

function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${API_URL}/restaurantes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha ao carregar restaurantes')
        }

        return response.json()
      })
      .then((data: Restaurant[]) => setRestaurants(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return { error, isLoading, restaurants }
}

function Home() {
  const { error, isLoading, restaurants } = useRestaurants()

  return (
    <>
      <HeaderHome>
        <img src={logo} alt="efood" />
        <h1>Viva experiencias gastronomicas no conforto da sua casa</h1>
      </HeaderHome>
      <Grid className="container">
        {isLoading && <p>Carregando restaurantes...</p>}
        {error && <p>{error}</p>}
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id}>
            <img src={restaurant.capa} alt={restaurant.titulo} />
            <div className="tags">
              {restaurant.destacado && <span className="tag">Destaque</span>}
              <span className="tag">{restaurant.tipo}</span>
            </div>
            <div className="content">
              <div className="title-row">
                <h2>{restaurant.titulo}</h2>
                <span className="rating">
                  {restaurant.avaliacao}
                  <img src={estrela} alt="" />
                </span>
              </div>
              <p>{restaurant.descricao}</p>
              <LinkButton to={`/restaurante/${restaurant.id}`}>Saiba mais</LinkButton>
            </div>
          </Card>
        ))}
      </Grid>
      <Footer>
        <img src={logo} alt="efood" />
        <p>
          A efood e uma plataforma para divulgacao de estabelecimentos. A responsabilidade pela entrega e qualidade dos produtos e toda do restaurante contratado.
        </p>
      </Footer>
    </>
  )
}

function RestaurantPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const items = useSelector((state: RootState) => state.cart.items)

  useEffect(() => {
    setIsLoading(true)

    fetch(`${API_URL}/restaurantes/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Restaurante nao encontrado')
        }

        return response.json()
      })
      .then((data: Restaurant) => setRestaurant(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [id])

  if (isLoading) {
    return <Message>Carregando restaurante...</Message>
  }

  if (error || !restaurant) {
    return <Message>{error || 'Restaurante nao encontrado'}</Message>
  }

  return (
    <>
      <HeaderRestaurant>
        <div className="container">
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="efood" />
          <button type="button" onClick={() => dispatch(openCart())}>
            {items.length} produto(s) no carrinho
          </button>
        </div>
      </HeaderRestaurant>
      <Banner image={restaurant.capa}>
        <div className="container">
          <span>{restaurant.tipo}</span>
          <h1>{restaurant.titulo}</h1>
        </div>
      </Banner>
      <MenuGrid className="container">
        {restaurant.cardapio.map((dish) => (
          <DishCard key={dish.id}>
            <img src={dish.foto} alt={dish.nome} />
            <h2>{dish.nome}</h2>
            <p>{dish.descricao}</p>
            <button type="button" onClick={() => setSelectedDish(dish)}>
              Ver mais
            </button>
          </DishCard>
        ))}
      </MenuGrid>
      <Footer>
        <img src={logo} alt="efood" />
        <p>
          A efood e uma plataforma para divulgacao de estabelecimentos. A responsabilidade pela entrega e qualidade dos produtos e toda do restaurante contratado.
        </p>
      </Footer>
      {selectedDish && (
        <ProductModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onAdd={() => {
            dispatch(addItem(selectedDish))
            setSelectedDish(null)
          }}
        />
      )}
    </>
  )
}

function ProductModal({
  dish,
  onAdd,
  onClose
}: {
  dish: Dish
  onAdd: () => void
  onClose: () => void
}) {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalCard>
        <button className="close" type="button" onClick={onClose}>
          x
        </button>
        <img src={dish.foto} alt={dish.nome} />
        <div>
          <h2>{dish.nome}</h2>
          <p>{dish.descricao}</p>
          <p>Serve: {dish.porcao}</p>
          <button type="button" onClick={onAdd}>
            Adicionar ao carrinho - {formatPrice(dish.preco)}
          </button>
        </div>
      </ModalCard>
    </>
  )
}

function CartAndCheckout() {
  const dispatch = useDispatch<AppDispatch>()
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'success'>('cart')
  const [orderId, setOrderId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState<CheckoutForm>({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
    cardName: '',
    cardNumber: '',
    cardCode: '',
    cardMonth: '',
    cardYear: ''
  })

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.preco, 0),
    [items]
  )

  const handleClose = () => {
    dispatch(closeCart())
    if (step !== 'success') {
      setStep('cart')
    }
  }

  const updateField = (field: keyof CheckoutForm, value: string) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value
    }))
  }

  const submitOrder = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    const payload = {
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: form.receiver,
        address: {
          description: form.address,
          city: form.city,
          zipCode: form.zipCode,
          number: Number(form.number),
          complement: form.complement
        }
      },
      payment: {
        card: {
          name: form.cardName,
          number: form.cardNumber.replace(/\D/g, ''),
          code: Number(form.cardCode),
          expires: {
            month: Number(form.cardMonth),
            year: Number(form.cardYear)
          }
        }
      }
    }

    try {
      const response = await fetch(`${API_URL}/checkout`, {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      if (!response.ok) {
        throw new Error('Falha ao finalizar pedido')
      }

      const data = await response.json()
      setOrderId(data.orderId)
      dispatch(clearCart())
      setStep('success')
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Falha ao finalizar pedido')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isOpen && <Overlay onClick={handleClose} />}
      <Drawer isOpen={isOpen}>
        {step === 'cart' && (
          <>
            {items.length === 0 ? (
              <>
                <p>O carrinho esta vazio.</p>
                <div className="actions">
                  <button type="button" onClick={handleClose}>
                    Voltar para loja
                  </button>
                </div>
              </>
            ) : (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <strong>{formatPrice(item.preco)}</strong>
                      </div>
                      <button type="button" onClick={() => dispatch(removeItem(item.id))}>
                        <img src={lixeira} alt="Remover" />
                      </button>
                    </CartItem>
                  ))}
                </ul>
                <Total>
                  <span>Valor total</span>
                  <span>{formatPrice(total)}</span>
                </Total>
                <div className="actions">
                  <button type="button" onClick={() => setStep('delivery')}>
                    Continuar com a entrega
                  </button>
                </div>
              </>
            )}
          </>
        )}
        {step === 'delivery' && (
          <>
            <h2>Entrega</h2>
            <label htmlFor="receiver">Quem ira receber</label>
            <input id="receiver" required value={form.receiver} onChange={(event) => updateField('receiver', event.target.value)} />
            <label htmlFor="address">Endereco</label>
            <input id="address" required value={form.address} onChange={(event) => updateField('address', event.target.value)} />
            <label htmlFor="city">Cidade</label>
            <input id="city" required value={form.city} onChange={(event) => updateField('city', event.target.value)} />
            <div className="row">
              <div>
                <label htmlFor="zipCode">CEP</label>
                <input id="zipCode" required value={form.zipCode} onChange={(event) => updateField('zipCode', event.target.value)} />
              </div>
              <div>
                <label htmlFor="number">Numero</label>
                <input id="number" required value={form.number} onChange={(event) => updateField('number', event.target.value)} />
              </div>
            </div>
            <label htmlFor="complement">Complemento</label>
            <input id="complement" value={form.complement} onChange={(event) => updateField('complement', event.target.value)} />
            <div className="actions">
              <button type="button" onClick={() => setStep('payment')}>
                Continuar com o pagamento
              </button>
              <button type="button" onClick={() => setStep('cart')}>
                Voltar para o carrinho
              </button>
            </div>
          </>
        )}
        {step === 'payment' && (
          <form onSubmit={submitOrder}>
            <h2>Pagamento - Valor a pagar {formatPrice(total)}</h2>
            <label htmlFor="cardName">Nome no cartao</label>
            <input id="cardName" required value={form.cardName} onChange={(event) => updateField('cardName', event.target.value)} />
            <label htmlFor="cardNumber">Numero do cartao</label>
            <input id="cardNumber" required value={form.cardNumber} onChange={(event) => updateField('cardNumber', event.target.value)} />
            <div className="row">
              <div>
                <label htmlFor="cardCode">CVV</label>
                <input id="cardCode" required value={form.cardCode} onChange={(event) => updateField('cardCode', event.target.value)} />
              </div>
              <div>
                <label htmlFor="cardMonth">Mes</label>
                <input id="cardMonth" required value={form.cardMonth} onChange={(event) => updateField('cardMonth', event.target.value)} />
              </div>
            </div>
            <label htmlFor="cardYear">Ano de vencimento</label>
            <input id="cardYear" required value={form.cardYear} onChange={(event) => updateField('cardYear', event.target.value)} />
            <div className="actions">
              <button disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Finalizando...' : 'Finalizar pagamento'}
              </button>
              <button type="button" onClick={() => setStep('delivery')}>
                Voltar para entrega
              </button>
            </div>
          </form>
        )}
        {step === 'success' && (
          <>
            <h2>Pedido realizado - {orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido ja esta em processo de preparacao e em breve sera entregue no endereco fornecido.
            </p>
            <p>
              Nossos entregadores nao estao autorizados a realizar cobrancas extras.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa experiencia gastronomica. Bom apetite!
            </p>
            <div className="actions">
              <button type="button" onClick={handleClose}>
                Concluir
              </button>
            </div>
          </>
        )}
      </Drawer>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<RestaurantPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <CartAndCheckout />
    </BrowserRouter>
  )
}

export default App
