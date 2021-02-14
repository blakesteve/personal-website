//
//	bball
//	NavItems.js
//
//	© 2021 Blake Ball

import React from 'react';

import NavItem from './NavItem';

const navItems = (props) => (
  <ul className='NavItems'>
    <NavItem link="/" exact>.about()</NavItem>
    <NavItem link="/work">.work()</NavItem>
    <NavItem link="/">.resume()</NavItem>
    <NavItem isExternal link="https://github.com/blakesteve">.gitHub()</NavItem>
    <NavItem isExternal link="https://www.linkedin.com/in/blake-ball-35845845/">.linkedIn()</NavItem>
    {/* { !props.isAuthenticated
      ? <NavItem link="/auth">Authenticate</NavItem>
      : <NavItem link="/logout">Logout</NavItem>
    } */}
  </ul>
);

export default navItems;
