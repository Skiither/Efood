import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/indext";
import { CartItems } from '../../SubComponents/CartItem'
import { CartItemListDiv, Total, TotalWrite } from "./styles";
import { ContinueButton } from "../ContinueButton";
import { NextFunction } from "../../../store/slices/CartSlice";



export const ItemsList = () =>
    {
    const Dispatch = useDispatch()

    //Receving items from global cart state
    const items = useSelector((state: RootState) => state.cart.items)

    //verify empty cart
    const verifyCart = () => {
        if (items.length === 0) {
            return alert("Voce nao pode continuar com o carrinho vazio")
        }
        return Dispatch(NextFunction())
    }

    //Total Sum
    const TotalPrice = items.reduce((acc, item) => acc + Number(item.preco), 0).toLocaleString("pt-br", {style: 'currency', currency: "BRL"})

    return (
        <>
            <CartItemListDiv>
            {items.map((item) =>
                (
                    <CartItems key={item.nome} item={item} img={item.foto} price={item.preco} title={item.nome}/>
                ))}
            </CartItemListDiv>
            <Total>
                <TotalWrite>Valor Total:</TotalWrite>
                <TotalWrite>{TotalPrice}</TotalWrite>
            </Total>
            <ContinueButton onClick={() => verifyCart()}>Continuar para a Entrega</ContinueButton>
            </>
        )
}