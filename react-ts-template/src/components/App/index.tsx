import React from 'react';
import logo from './logo.svg';
import './index.css';
import styled from '@emotion/styled';

const Container = styled.div`
    text-align: center;
`;

const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;

    &:hover {
        color: white;
    }
`

function Index() {
    return (
        //<div className="Index">
        <Container>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/Index.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Button>This my button component.</Button>
        </Container>
        //</div>
    );
}

export default Index;
