import { CartCloseButton, CartCon, CartContainer} from "./styles"
import Close from '../../../assets/images/Icons/close.png'
import { useDispatch } from "react-redux"
import { Clicked } from "../../../store/slices/CartSlice"

type Props = {
    children: React.ReactNode
}

export const CartBody = ({children}: Props) => {
    const Dispatch = useDispatch()
    return (
        <CartContainer>
            <div className="Close">
                <CartCloseButton onClick={() => Dispatch(Clicked())} ><img src={Close} /></CartCloseButton>
            </div>
            <CartCon>
                <div className="ContainerChildren">
                    {children}
                </div>
                <div className="ContinueButton">
                </div>
            </CartCon>
        </CartContainer>
    )
}