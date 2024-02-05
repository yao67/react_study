import React from 'react';
import logo from './logo.svg';
import './index.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from 'components/Button';

const Container = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    margin-bottom: 32px;
`;

const Label = styled.span`
    margin: 0 16px;
    font-size: 1.2rem;
`;

/*const Button = styled.button`
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
`;*/

function Index() {
    const [counter, setCounter] = useState(0);

    const sub = () => {
        setCounter(counter - 1);
    }

    const add = () => {
        setCounter(counter + 1);
    }

    return (
        //<div className="Index">
        <Container>
            <Title>Counter App</Title>
            {/*<Button onClick={sub}>-</Button>*/}
            <Button label="-" onClick={sub}></Button>
            <Label>{counter}</Label>
            {/*<Button onClick={add}>+</Button>*/}
            <Button label="+" onClick={add}></Button>
        </Container>
        //</div>
    );
}

export default Index;
