import styled from 'styled-components'
import BackImg from '../../../assets/images/fundo.png'
import { Colors } from '../../../styles'

export const Background = styled.div`
  background-image: url(${BackImg});
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 64px;
  margin-bottom: 128px;
`

export const Title = styled.h1`
  color: ${Colors.TitleColor};
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 40px;
  text-align: center;
`
