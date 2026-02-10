import styled from "styled-components";
import { Colors } from "../../../styles";

export const RestaurantBodyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 120px;
    background-color: ${Colors.BackgroundColor};
`

export const RestaurantContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    column-gap: 32px;
    row-gap: 32px;
`