//
//	bball
//	NavItem.js
//
//	© 2021 Blake Ball
//

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


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


const NavItem = (props) => (

  props.isExternal ?
    <StyledExternalink
      className="Text NavigationItem"
      href={props.link}
      target="_blank">
      {props.children}
    </StyledExternalink> :
    <StyledLink
      className='Text NavigationItem'
      to={props.link}> {props.children}
    </StyledLink>
)

export default NavItem;