import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
`;

const NavButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#333' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
`;

const Header = ({ activeComponent, setActiveComponent }) => {
  return (
    <HeaderWrapper>
      <nav>
        <NavButton isActive={activeComponent === 'counter'} onClick={() => setActiveComponent('counter')}>
          Counter
        </NavButton>
        <NavButton isActive={activeComponent === 'todolist'} onClick={() => setActiveComponent('todolist')}>
          TodoList
        </NavButton>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
