//
//	bball
//	NavBar.js
//
//	© 2021 Blake Ball

import React from 'react';
import styled from 'styled-components';

import NavItems from './NavItems';
import Doggo from '../assets/pupper.png';

const NavigationBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	padding: 0px 10%;
	position: fixed;
	width: 100%;
`;

const NavigationBarTitle = styled.span`
	font-size: 40px;
	font-weight: 600;
	letter-spacing: 1px;
	margin-left: 1rem;
`;

const NavigationBarTitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const Logo = styled.img`
	height: 50px;
	border-radius: 5px;
`;


const NavBar = (props) => (
	<NavigationBarContainer className="Header">
		<NavigationBarTitleContainer>
			<Logo src={Doggo} />
			<NavigationBarTitle className="Text">Blake Ball</NavigationBarTitle>
		</NavigationBarTitleContainer>
		<NavItems />
	</NavigationBarContainer>
);

export default NavBar;