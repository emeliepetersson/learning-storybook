import React from 'react';
import styled from 'styled-components';
import { ButtonProps, ButtonStyleProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
    return (
      <ScButton onClick={props.pressed} color={props.color}>
        {props.label}
      </ScButton>
    );
}

export default Button;

const ScButton = styled.button<ButtonStyleProps>`
    background-color: ${props => props.color ?? "#1CD6CE"};
    padding: 10px 15px;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    text-transform: uppercase;
`;