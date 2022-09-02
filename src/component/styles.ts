import styled from 'styled-components'

export const Span = styled.span``;

export const Input = styled.input``;

export const RadioStyled = styled.label`
    display: block;
    position: relative;
    padding-left: 28px;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
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
        top: 1px;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #2F46B0;

        &:after {
            content: "";
            position: absolute;
            display: none;
            top: 3px;
            left: 3px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #2F46B0;
        }
    }
`
