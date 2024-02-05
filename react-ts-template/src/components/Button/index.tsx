import React from 'react';
import styled from '@emotion/styled';

const Container = styled.button`
    padding: 8px 16px;
    background-color: hotpink;
    font-size: 24px;
    border: 0;
    border-radius: 4px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: cornflowerblue;
        opacity: 0.8;
    }
    
    &:active {
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

interface Porps {
    readonly label: string;
    readonly onClick: () => void;
}

export const Button = ({ label, onClick }: Porps) => {
    return <Container onClick={onClick}>{label}</Container>;
};
