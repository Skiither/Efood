import styled from 'styled-components'

import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.main`
  max-width: 320px;
  width: 100%;
  margin-top: 56px;
  padding: 8px;
  background-color: ${cores.corPrincipal};
  color: #fff;

  ${ButtonContainer} {
    width: 100%;
  }
`

export const ComidaFoto = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const ComidaNome = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const ComidaDescricao = styled.p`
  margin-top: 8px;
  max-height: 66px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
