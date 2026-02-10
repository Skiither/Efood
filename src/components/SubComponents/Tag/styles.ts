import styled from 'styled-components'
import { Colors } from '../../../styles'

export const TagItem = styled.div`
  background-color: ${Colors.TitleColor};
  color: ${Colors.BackgroundColor};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline;

  a {
    text-decoration: none;
    border: none;
    color: inherit;
  }
`
