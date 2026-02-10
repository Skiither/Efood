import styled from 'styled-components'

import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${(props) => (props.size === 'big' ? '180px' : '80px')};
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  font-weight: 700;
  font-size: 12px;
  padding: 6px 4px;
  text-align: center;
`
