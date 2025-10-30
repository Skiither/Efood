import styled from 'styled-components'

import { ButtonContainer } from '../Button/styles'
import { breakPoints, cores } from '../../styles'

export const ListaDeComida = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 0px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.73);
  }

  ${ButtonContainer} {
    max-width: 218px;
    width: 100%;
    height: 24px;
    padding: 4px 6px;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.corPrincipal};
  padding: 32px;
  max-width: 1024px;
  position: relative;
  display: flex;
  z-index: 1;

  @media (max-width: ${breakPoints.tablet}) {
    flex-direction: column;
    top: 0;
    left: 0;
    height: auto;
    width: 80%;

    img {
      margin: 0;
    }

    div {
      margin-top: 10px;
      text-align: center;

      p {
        text-align: justify;
      }
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    align-items: center;
  }
`

export const BotaoFechar = styled.img`
  right: 0;
  top: 0;
  position: absolute;
  padding: 8px;
  cursor: pointer;
`

export const ImageModal = styled.img`
  max-width: 280px;
  width: 100%;
  height: 280px;
  margin-right: 24px;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${breakPoints.tablet}) {
    max-width: 230px;
    height: 230px;
  }
`

export const NomeComida = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #fff;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #fff;

  span {
    display: block;
    margin-top: 32px;
    margin-bottom: 16px;
  }
`
