import { styled } from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  cursor: pointer;
  border: 1px solid ${cores.corPrincipal};
  text-decoration: none;
`

export const ButtonContainer = styled.button`
  background-color: ${cores.corSecundaria};
  color: ${cores.corPrincipal};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 84px;
  cursor: pointer;
  border: 1px solid ${cores.corSecundaria};
  white-space: nowrap;
`
