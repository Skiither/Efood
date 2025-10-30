import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { store } from './store'

import { GlobalStyles } from './styles'
import Home from './pages/Home'
import PerfilLoja from './pages/PerfilLoja'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurante/:id',
    element: <PerfilLoja />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={rotas} />
      </Provider>
    </>
  )
}

export default App
