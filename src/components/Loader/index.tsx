import { BeatLoader } from 'react-spinners'

import { Container } from './styles'
import { cores } from '../../styles'

const Loader = () => (
  <Container>
    <BeatLoader color={cores.corPrincipal} />
  </Container>
)
export default Loader
