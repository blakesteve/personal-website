//
//	bball
//	App.js
//
//	© 2021 Blake Ball
//

import React from 'react';
import { Link } from 'react-router-dom';


// const Children = styled.span`
// 	position: relative;
// `;

const NavItem = (props) => (
  <Link className='navigation-bar-item' to={props.link}> {props.children}
  </Link>
)

export default NavItem;