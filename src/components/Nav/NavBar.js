//
//	bball
//	NavBar.js
//
//	© 2021 Blake Ball

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Doggo from '../../assets/pupper.png';
import DoggoAlt from '../../assets/pupper-alt.png';
import Hamburger from './Hamburger';

const NavigationBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	padding: 0px 10%;
	position: fixed;
	width: 100%;
`;

const NavigationBarTitleContainer = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	text-decoration: none;
`;

const NavigationBarTitle = styled.span`
	font-size: 40px;
	font-weight: 600;
	letter-spacing: 1px;
	margin-left: 1rem;
	
	@media (max-width: 1090px) {
    font-size: 27px;
	}
	
	@media (max-width: 1020px) {
		font-size: 24px;
	}

	@media (max-width: 990px) {
		font-size: 22px;
	}

	@media (max-width: 980px) {
		font-size: 19px;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;

const Logo = styled.img`
	height: 50px;
	border-radius: 5px;
`;

const NavBar = (props) => (
	<>
		<NavigationBarContainer className="Header">
			<NavigationBarTitleContainer to="/">
				<Logo src={props.theme === "darkTheme" ? Doggo : DoggoAlt} />
				<NavigationBarTitle className="Text spin-n-shine">
					<span>B</span><span>l</span><span>a</span><span>k<span></span>e</span>
					<span>B</span><span>.</span><span>d</span><span>e</span><span>v</span>
				</NavigationBarTitle>
			</NavigationBarTitleContainer>
			<Hamburger theme={props.theme} />
		</NavigationBarContainer >
	</>
);

export default NavBar;