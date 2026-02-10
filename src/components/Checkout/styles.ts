import styled from 'styled-components'

import { breakPoints, cores } from '../../styles'
import { ButtonContainer, ButtonLink } from '../Button/styles'

type WidthProps = {
  maxWidth?: string
}

export const Aside = styled.aside`
  padding-top: 32px;
  font-weight: 700;
  color: ${cores.corSecundaria};

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 20px;
  }

  ${ButtonContainer} {
    max-width: 100%;
    height: 24px;
    padding: 0;
  }

  ${ButtonLink} {
    height: 24px;
    color: ${cores.corPrincipal};
    background-color: ${cores.corSecundaria};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakPoints.tablet}) {
    width: 50%; // Ocupa 50% da largura da tela
    max-width: none; // Remove o max-width para que 'width: 50%' funcione
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`

export const Input = styled.input<WidthProps>`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  background-color: ${cores.corSecundaria};
  border: none;
  outline: none;

  &.erro {
    border: 1px solid red;
  }

  @media (min-width: ${breakPoints.tablet}) {
    width: ${(props) => props.maxWidth || '100%'};
  }
`

export const Row = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  gap: 31px;

  & > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    width: 100%;
  }
`

export const ContainerParagrafo = styled.div`
  width: 344px;
  height: 100%;
  max-height: 186px;
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`
