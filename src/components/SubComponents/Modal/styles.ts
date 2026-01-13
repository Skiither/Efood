import styled from 'styled-components'
import { Colors } from '../../../styles'

export const ModalContainer = styled.div`
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    position: relative;
  }

  .principalDesc {
    line-height: 22px;
  }
`

export const ModalItem = styled.div`
  width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${Colors.TitleColor};
  color: ${Colors.BackgroundColor};
  display: flex;
  align-items: center;

  & > div:last-child {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      display: inline-block;
      width: fit-content;
    }
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  margin-right: 24px;
  object-fit: cover;
`

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
`

export const ModalDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
`
export const ModalCloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
