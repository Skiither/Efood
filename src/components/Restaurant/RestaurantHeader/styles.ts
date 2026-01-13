import styled from "styled-components";
import BackImg from "../../../assets/images/fundo.png"
import { Colors } from "../../../styles";

export const Background = styled.div`
  background-image: url(${BackImg});
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.TitleColor};
  padding: 48px 0;
`

export const HeaderContainer = styled.div`
  width: 1200px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Restaurant = styled.button`
    font-weight: 900;
    font-size: 18px;
    border: none;
    background-color: transparent;
    color: ${Colors.TitleColor};
    cursor: pointer;

    a {
      text-decoration: none;
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
    }
`

export const HeaderImg = styled.img`
    width: 125px;
    height: 58px;
`
