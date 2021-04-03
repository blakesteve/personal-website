//
//  bball
//  NavItems.js
//
//  © 2021 Blake Ball

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';
import { HiExternalLink } from 'react-icons/hi';
import {
  DiGithubAlt, DiReact, DiNodejsSmall, DiJavascript1,
} from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoIosPaw } from 'react-icons/io';

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 950px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => (theme === 'darkTheme' ? '#24292e' : '#7dd56f')};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
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

const HoverArg1 = styled.span`
  opacity: 0;
  letter-spacing: 0;
  font-size: 0rem;
  margin-left: -4px;
  transition: all .5s;
  
  & > svg {
    vertical-align: middle;
  }
  
  ${StyledLink}:hover & {
    opacity: 1;
    font-size: 14px;
    margin: 0;
  }
  ${StyledExternalink}:hover & {
    opacity: 1;
    font-size: 14px;
    margin: 0;
  }
`;

const HoverArg2 = styled(HoverArg1)`
  margin-left: 0;
  margin-right: -4px;
  transition: all .9s;
  
  ${StyledLink}:hover & {
    opacity: 1;
    font-size: 14px;
    margin: 0;
  }
  ${StyledExternalink}:hover & {
    opacity: 1;
    font-size: 14px;
    margin: 0;
  }
`;

const NavItems = ({ open, clicked, theme }) => (
  <StyledUl open={open} theme={theme} className="NavItems">
    <StyledLink onClick={clicked} className="Text NavigationItem" to="/about" exact>
      .about(
      <HoverArg1>
        <DiJavascript1 />
      </HoverArg1>
      {' '}
      <HoverArg2>
        <IoIosPaw />
      </HoverArg2>
      )
    </StyledLink>
    <StyledLink onClick={clicked} className="Text NavigationItem" to="/work">
      .work(
      <HoverArg1><DiReact /></HoverArg1>
      {' '}
      <HoverArg2><DiNodejsSmall /></HoverArg2>
      )
    </StyledLink>
    <StyledExternalink
      onClick={clicked}
      className="Text NavigationItem"
      href="https://github.com/blakesteve"
      target="_blank"
    >
      .gitHub(
      <HoverArg1><DiGithubAlt /></HoverArg1>
      {' '}
      <HoverArg2><FiExternalLink /></HoverArg2>
      )
    </StyledExternalink>
    <StyledExternalink
      onClick={clicked}
      className="Text NavigationItem"
      href="https://www.linkedin.com/in/blake-ball-35845845/"
      target="_blank"
    >
      .linkedIn(
      <HoverArg1><AiFillLinkedin /></HoverArg1>
      {' '}
      <HoverArg2><HiExternalLink /></HoverArg2>
      )
    </StyledExternalink>
  </StyledUl>
);

NavItems.propTypes = {
  open: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default NavItems;
