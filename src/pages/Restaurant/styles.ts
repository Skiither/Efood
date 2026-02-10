import styled from "styled-components";
import { Colors } from "../../styles";

export const ErrorDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 728px;
        height: auto;
    }

    > span {
        font-size: 32px;
        color: ${Colors.TitleColor}
    }
`