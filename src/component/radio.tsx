import { RadioStyled, Input, Span } from "./styles";

export type TVariant = "left" | "right";

type TRadio = {
    label?: React.ReactNode;
    className?: string;
    variant?: TVariant;
    color?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ className, variant = "left", label, name, color = "#2F46B0", ...props }: TRadio) => {
    return (
        <RadioStyled className={className} $color={color} $variant={variant}>
            {label}
            <Input {...props} id={name} type="radio" />
            <Span></Span>
        </RadioStyled>
    );
};

export default Radio;
