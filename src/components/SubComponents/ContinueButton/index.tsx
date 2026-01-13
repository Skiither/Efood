import { Button } from "./styles"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &{
    children: React.ReactNode
    onClick?: () => void
}

export const ContinueButton = ({onClick, children, ...rest}: Props) => {

    return (
        <Button onClick={onClick} {...rest}>
            {children}
        </Button>
    )
}