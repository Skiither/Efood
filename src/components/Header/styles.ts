import styled from 'styled-components'

import HeroHeader from '../../assets/images/HeroHeader.svg'

export const Hero = styled.header`
  background-image: url(${HeroHeader});
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 80px;

  h1 {
    line-height: 0;
    margin-top: 40px;
  }
`
export const LogoImg = styled.img`
  max-width: 100%;
  height: auto;
`
export const SubTitulo = styled.h2`
  font-size: 2.25rem;
  font-weight: 900;
  max-width: 539px;
  height: 84px;
  text-align: center;
`
