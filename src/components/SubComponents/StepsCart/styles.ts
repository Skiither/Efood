import styled from "styled-components";
import { Colors } from "../../../styles";
import { Field } from "formik";

export const EntregaDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: ${Colors.BackgroundColor};
    font-weight: 700;

    & > .buttons {
        margin-top: 16px;

        & > .buttons2 {
            margin-top: 8px;
        }
    }
`

export const EntregaTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 16px;
`
export const EntregaInfoDiv = styled.div`
    margin-bottom: 8px;
    position: relative;   
`

export const EntregaInfoDivGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;

`

export const EntregaLabel = styled.label`
    font-size: 14px;
`

export const EntregaInput = styled(Field)`
    width: 100%;
    background-color: ${Colors.BackgroundColor};
    color: #4b4b4b;
    font-weight: bold;
    border: none;
    padding-left: 8px;
    height: 32px;
    margin-top: 4px;
`
