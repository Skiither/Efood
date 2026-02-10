import { CartItem, CartItemContainer, CartItemImage, CartItemLogo, CartItemPrice, CartItemTitle } from "./styles"
import Logo from '../../../assets/images/Icons/lixeira-de-reciclagem 1.png'
import { useDispatch } from "react-redux"
import { RemoveItem } from "../../../store/slices/CartSlice"

type Props = {
    img: string
    title: string
    price: number
    item: any

}

export const CartItems = ({img, title, price, item}: Props) => {
    const Dispatch = useDispatch()

    //Remove item
    const Remove = (Item: any) => {
        Dispatch(RemoveItem(Item))
    }

    const itemPrice = price.toLocaleString("pt-br", {style: 'currency', currency: "BRL"})

    return (
    <CartItem>
        <CartItemContainer>
            <CartItemImage src={img} />
            <div>
                <CartItemTitle>{title}</CartItemTitle>
                <CartItemPrice>{itemPrice}</CartItemPrice>
                <CartItemLogo src={Logo} onClick={() => Remove(item)} />
            </div>
        </CartItemContainer>
    </CartItem>
    )
    }