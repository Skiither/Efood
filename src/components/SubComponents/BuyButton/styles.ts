import styled from 'styled-components'
import { Colors } from '../../../styles'

export const ButtonContainer = styled.button`
  padding: 4px 8px;
  background-color: ${Colors.BackgroundColor};
  color: ${Colors.TitleColor};
  border: none;
  cursor: pointer;
`

export const ButtonTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
`
