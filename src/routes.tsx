import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Restaurant } from './pages/Restaurant'

const Rout = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id" element={<Restaurant />} />
  </Routes>
)
export default Rout
