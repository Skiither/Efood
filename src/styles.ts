import styled, { createGlobalStyle } from 'styled-components'

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const cores = {
  corDeFundo: '#FFF8F2',
  corPrincipal: '#E66767',
  corSecundaria: '#FFEBD9'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.corDeFundo};
    color: ${cores.corPrincipal};
  }

  .SideBar {
    max-width: 360px;
    width: 100%;
    padding: 32px 8px 0 8px;
    background-color: ${cores.corPrincipal};
    z-index: 1;
  }

    @media (max-width: ${breakPoints.tablet}) {
      .SideBar {
        max-width: 200px;
      }
    }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: ${cores.corDeFundo};

  @media (max-width: ${breakPoints.desktop}) {
    width: 90%;
  }
`

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
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
