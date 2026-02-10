import styled from 'styled-components'

import { cores } from '../../styles'

export const FooterSection = styled.footer`
  width: 100%;
  height: 298px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;
  margin-top: 120px;
  background-color: ${cores.corSecundaria};
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const RedesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`
export const Paragrafo = styled.p`
  max-width: 480px;
  width: 100%;
  font-size: 10px;
  text-align: center;
`
