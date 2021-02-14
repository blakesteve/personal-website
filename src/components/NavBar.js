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
	position: fixed;
	width: 100%;
`;

const NavigationBarTitle = styled.span`
	font-size: 40px;
	font-weight: 600;
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