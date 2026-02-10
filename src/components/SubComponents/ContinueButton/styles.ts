import styled from "styled-components";
import { Colors } from "../../../styles";

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${Colors.BackgroundColor};
    color: ${Colors.TitleColor};
    font-size: 14px;
    font-weight: 700;
    padding: 6px 0;
    cursor: pointer;
`