import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { RadioStyled, Input, Span } from "./styles";

type TRadio = {
    label: string;
    className?: string;
    variant?: "left" | "rigth";
    color?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Radio = ({ className, variant = "left", label, name, color = "#2F46B0", ...props }: TRadio) => {
    return (
        <RadioStyled className={className} $color={color}>
            {label}
            <Input id={name} name={name} type="radio" onClick={props.onClick} />
            <Span></Span>
        </RadioStyled>
    );
};

export default Radio;
