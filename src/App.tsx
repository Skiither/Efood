import { BrowserRouter } from 'react-router-dom'
import Rout from './Routes'
import { Styles } from './styles'

function App() {
  return (
    <BrowserRouter>
      <Styles />
      <Rout />
    </BrowserRouter>
  )
}

export default App
