import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type TRadio = {
    label: string;
    className?: string;
    variant?: "left" | "rigth";
    color?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Radio = ({ className, variant = "left", label, name, color = "", ...props }: TRadio) => {
    return (
        <label className={className}>
            {label}
            <input id={name} name={name} type="radio" />
            <span></span>
        </label>
    );
};

export default Radio;
