//
//	bball
//	NavBar.js
//
//	© 2021 Blake Ball

import React from 'react';
import styled from 'styled-components';

import NavItems from './NavItems';

const NavigationBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	padding: 0px 20px;
	width: 100%;
`;

const NavigationBarTitle = styled.span`
	text-transform: uppercase;
	font-size: 20px;
	letter-spacing: 1px;
	color: white;
`;


const NavBar = (props) => (
  <NavigationBarContainer className="Header">
    <NavigationBarTitle className="Text">Blake Ball</NavigationBarTitle>
    <NavItems />
  </NavigationBarContainer>
);

export default NavBar;