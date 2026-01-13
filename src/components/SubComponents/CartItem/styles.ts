import styled from "styled-components"
import { Colors } from "../../../styles"

export const CartItem = styled.div`
    background-color: ${Colors.BackgroundColor};
    padding: 8px;
    margin-top: 16px;
    `

export const CartItemContainer = styled.div`
    max-height: 80px;
    height: 100%;
    color: ${Colors.TitleColor};
    display: flex;
    position: relative;
`

export const CartItemImage = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
`

export const CartItemTitle = styled.h2`
    font-size: 16px;
    font-weight: 900;
`

export const CartItemPrice = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
`

export const CartItemLogo = styled.img`
    width: 16px;
    height: 16px;
    color: ${Colors.BackgroundColor};
    position: absolute;
    bottom: 0px;
    right: 0px;
    cursor: pointer;
`