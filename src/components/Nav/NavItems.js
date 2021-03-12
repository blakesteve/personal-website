//
//	bball
//	NavItems.js
//
//	© 2021 Blake Ball

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import NavItem from './NavItem';

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

const StyledLink = styled(NavLink)`
	text-decoration: none;
	font-size: 14px;
  letter-spacing: 1px;
  margin: 0 10px;

  @media (max-width: 950px) {
    font-size: 25px;
    margin: .1rem 0;
  }
`;

const StyledExternalink = StyledLink.withComponent('a');


const StyledItem = styled(NavItem)`
  color: blue;
  opacity: 0;
`

const HoverArg1 = styled.span`
  opacity: 0;
  letter-spacing: 0;
  font-size: 0rem;
  margin-left: -4px;
  transition: all .5s;
  ${StyledLink}:hover & {
    opacity: 1;
    font-size: 14px;
    margin: 0;
`
const HoverArg2 = styled(HoverArg1)`
  margin-left: 0;
  margin-right: -4px;
  transition: all .9s;
  ${StyledLink}:hover & {
    opacity: 1;
    font-size: 14px;
    margin: 0;
`

const NavItems = ({ open, clicked, theme }) => (
  <StyledUl open={open} theme={theme} className='NavItems'>
    <StyledLink className='Text NavigationItem' to="/about" exact >
      <span onClick={clicked}>.about(<HoverArg1>nice,</HoverArg1> <HoverArg2>clean</HoverArg2>)</span></StyledLink>
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
