import styled from 'styled-components'
import { breakPoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.7;
`

export const SideBar = styled.aside`
  ${ButtonContainer} {
    width: 100%;
    height: 24px;
    padding: 0;
  }

  .msg-erro {
    line-height: 22px;
    color: ${cores.corSecundaria};
    text-align: center;
    margin-bottom: 50px;
  }
`

export const CardItem = styled.li`
  display: flex;
  max-width: 344px;
  width: 100%;
  padding: 8px;
  background-color: ${cores.corSecundaria};
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  strong {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-image: url(${lixeira});
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 74px;
    left: 320px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    h3 {
      font-size: 12px;
    }
    button {
      left: 163px;
    }
  }
`

export const CardInfoContainer = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 16px;
  justify-content: space-between;
  color: ${cores.corSecundaria};

  p,
  strong {
    font-size: 14px;
    font-weight: 700;
  }
`
