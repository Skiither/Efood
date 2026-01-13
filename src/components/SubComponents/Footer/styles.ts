import styled from 'styled-components'
import { Colors } from '../../../styles'

export const FooterContainer = styled.footer`
  background-color: ${Colors.SecondaryBackground};
  color: ${Colors.TitleColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-weight: 400;
      font-size: 10px;
      margin-top: 80px;
      display: flex;
      text-align: center;
      margin-bottom: 40px;
    }
  }
`

export const IconsFooter = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
  img {
    width: 24px;
    height: 24px;
  }
`
