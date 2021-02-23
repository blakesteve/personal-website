//
//	bball
//	NavBar.js
//
//	© 2021 Blake Ball

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';


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

const NavigationBarTitleContainer = styled(Link)`
	display: flex;
	justify-content: flex-start;
	text-decoration: none;
`;

const StyledParticles = styled(Particles)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;


const Logo = styled.img`
	height: 50px;
	border-radius: 5px;
`;

const ParticlesParams = {
	"particles": {
		"number": {
			"value": 60,
			"density": {
				"enable": true,
				"value_area": 1500
			}
		},
		"line_linked": {
			"enable": true,
			"opacity": 0.02
		},
		"move": {
			"direction": "right",
			"speed": 0.05
		},
		"size": {
			"value": 1
		},
		"opacity": {
			"anim": {
				"enable": true,
				"speed": 1,
				"opacity_min": 0.05
			}
		}
	},
	"interactivity": {
		"events": {
			"onclick": {
				"enable": true,
				"mode": "push"
			}
		},
		"modes": {
			"push": {
				"particles_nb": 1
			}
		}
	},
	"retina_detect": true
}


const NavBar = (props) => (
	<>
		{props.theme === "darkTheme" ? <StyledParticles params={ParticlesParams} /> : null}
		<NavigationBarContainer className="Header">
			<NavigationBarTitleContainer to="/">
				<Logo src={Doggo} />
				<NavigationBarTitle className="Text">Blake Ball</NavigationBarTitle>
			</NavigationBarTitleContainer>
			<NavItems />
		</NavigationBarContainer >
	</>
);

export default NavBar;