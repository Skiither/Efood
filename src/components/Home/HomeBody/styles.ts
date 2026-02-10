import styled from 'styled-components'
import { Colors } from '../../../styles'

export const HomeBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 40px;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 120px;
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 32px;
    color: ${Colors.TitleColor}
  }
`