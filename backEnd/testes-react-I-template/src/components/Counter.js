import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 32px;
  border-radius: 8px;
`;

const CounterDisplay = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const CounterButton = styled.button`
  font-size: 24px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #ffffff;
  border: none;
  margin: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2c3e50;
  }
`;

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <Wrapper>
            <Title>Counter</Title>
            <CounterContainer>
                <CounterDisplay>{count}</CounterDisplay>
                <CounterButton onClick={incrementCount}>+</CounterButton>
                <CounterButton onClick={decrementCount}>-</CounterButton>
            </CounterContainer>
        </Wrapper>
    );
};

export default Counter;
