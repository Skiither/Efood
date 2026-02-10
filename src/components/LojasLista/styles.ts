import styled from 'styled-components'

import { breakPoints } from '../../styles'

export const ListaLoja = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  align-items: stretch;

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
