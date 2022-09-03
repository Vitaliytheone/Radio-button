import styled from 'styled-components'
import { TVariant } from './radio';

const getBoxPosition = (variant: TVariant) => {
    return variant === 'left' ? 'left: 0' : 'right: -28px;'
}

export const Span = styled.span``;

export const Input = styled.input``;

export const RadioStyled = styled.label<{$color: string, $variant: TVariant}>`
    display: inline-block;
    position: relative;
    padding-left: ${({$variant}) => $variant === 'left' ? '28px' : 0 };
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;

    ${Input} {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked ~ span {
            background-color: #fff;
            
            &:after {
                display: block;
            }
        }
    }

    ${Span} {
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid ${({$color}) => $color };
        ${({$variant}) => getBoxPosition($variant) };

        &:after {
            content: "";
            position: absolute;
            display: none;
            top: 3px;
            left: 3px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: ${({$color}) => $color };
        }
    }
`
