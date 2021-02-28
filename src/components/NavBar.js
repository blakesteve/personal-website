//
//	bball
//	NavBar.js
//
//	© 2021 Blake Ball

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavItems from './NavItems';
import Doggo from '../assets/pupper.png';
import DoggoAlt from '../assets/pupper-alt.png';

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

const NavigationBarTitleContainer = styled(Link)`
	display: flex;
	justify-content: flex-start;
	text-decoration: none;
`;

const Logo = styled.img`
	height: 50px;
	border-radius: 5px;
`;



const NavBar = (props) => (
	<>
		{/* {props.theme === "darkTheme" ? <StyledParticles params={ParticlesParams} /> : null} */}
		<NavigationBarContainer className="Header">
			<NavigationBarTitleContainer to="/">
				<Logo src={props.theme === "darkTheme" ? Doggo : DoggoAlt} />
				<NavigationBarTitle className="Text spin-n-shine">
					<span>B</span><span>l</span><span>a</span><span>k<span></span>e</span>
					<span>B</span><span>.</span><span>d</span><span>e</span><span>v</span>
				</NavigationBarTitle>
			</NavigationBarTitleContainer>
			<NavItems />
		</NavigationBarContainer >
	</>
);

export default NavBar;