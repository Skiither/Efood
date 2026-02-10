import styled from 'styled-components'

import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const CardLoja = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const ImagemCapa = styled.div`
  display: block;
  width: 100%;
  height: 217px;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
`

export const ContainerTag = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`

export const Container = styled.div`
  padding: 8px;
  border-left: 1px solid ${cores.corPrincipal};
  border-right: 1px solid ${cores.corPrincipal};
  border-bottom: 1px solid ${cores.corPrincipal};
  border-top: none;

  ${ButtonLink} {
    display: block;
    max-width: 82px;
    width: 100%;
    height: 24px;
    border: none;
  }
`

export const ContainerCabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const ContainerAvaliacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const NotaAvaliacao = styled.span`
  font-size: 18px;
  font-weight: 700;
  padding-right: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
  text-align: left;
`
