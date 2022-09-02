import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { RadioStyled, Input, Span } from "./styles";

type TRadio = {
    label: string;
    className?: string;
    variant?: "left" | "rigth";
    color?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Radio = ({ className, variant = "left", label, name, color = "", ...props }: TRadio) => {
    return (
        <RadioStyled className={className}>
            {label}
            <Input id={name} name={name} type="radio" />
            <Span></Span>
        </RadioStyled>
    );
};

export default Radio;
