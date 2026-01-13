import styled from 'styled-components'
import { Colors } from '../../../styles'

type Props = {
  $weight?: number
  $background?: string
}

export const Banner = styled.div<Props>`
  background-image: url(${(props) => props.$background});
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Colors.BackgroundColor};
`

export const RestaurantDescDiv = styled.div`
  margin-top: 24px;
  margin-bottom: 32px;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const RestaurantDesc = styled.h2<Props>`
  font-size: 32px;
  font-weight: ${(props) => props.$weight};
`
