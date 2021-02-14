//
//	bball
//	Toggle.js
//
//	© 2021 Blake Ball

import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from '../assets/moon.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';

const ToggleContainer = styled.button`
  :focus {outline:0 !important;}
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 3.5rem;
  height: 2rem;

  svg {
    height: auto;
    width: 1rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(-50px)'};
      visibility: ${({ lightTheme }) => lightTheme ? 'visible' : 'hidden'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(50px)' : 'translateX(0)'};
      visibility: ${({ lightTheme }) => lightTheme ? 'hidden' : 'visible'};

    }
  }
  @keyframes arc {
    0%{
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100%{
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon fill="#fcfc97" />
      <MoonIcon fill="#cfcfcf" />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;