//
//	bball
//	NavItems.js
//
//	© 2021 Blake Ball

import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';
import Resume from '../../assets/Blake_Ball_Resume_Q1_2021.pdf';


const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 950px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme === "darkTheme" ? "#24292e" : "#7dd56f"};
    position: fixed;
    transform: ${ ({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    margin-top: 0;
    width: 300px;
    padding-left: 1rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const NavItems = ({ open, clicked, theme }) => (
  <StyledUl open={open} theme={theme} className='NavItems'>
    <NavItem link="/about" exact ><span onClick={clicked}>.about()</span></NavItem>
    <NavItem onClick={clicked} link="/work"><span onClick={clicked}>.work()</span></NavItem>
    <NavItem isExternal link="/Blake_Ball_Resume_Q1_2021.pdf"><span onClick={clicked}>.resume()</span></NavItem>
    <NavItem isExternal link="https://github.com/blakesteve"><span onClick={clicked}>.gitHub()</span></NavItem>
    <NavItem isExternal link="https://www.linkedin.com/in/blake-ball-35845845/"><span onClick={clicked}>.linkedIn()</span></NavItem>
    {/* { !props.isAuthenticated
      ? <NavItem link="/auth">Authenticate</NavItem>
      : <NavItem link="/logout">Logout</NavItem>
    } */}
  </StyledUl>
);

export default NavItems;
