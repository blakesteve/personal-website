//
//	bball
//	Hamburger.js
//
//	© 2021 Blake Ball
//

import React, { useState } from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';

const StyledHamburger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 20;
  display: none;

  @media (max-width: 950px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme === "darkTheme" ? '#FAFAFA' : '#24292e'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Hamburger = (props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    console.log('YOU DID IT!');
    setOpen(!open);
  }

  return (
    <>
      <StyledHamburger open={open} theme={props.theme} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledHamburger>
      <NavItems open={open} clicked={toggleOpen} theme={props.theme} />
    </>
  )
};

export default Hamburger;