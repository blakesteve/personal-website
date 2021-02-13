import React from 'react';

import NavItem from './NavItem';

const navItems = (props) => (
  <ul className='NavItems'>
    <NavItem link="/" exact>.home()</NavItem>
    <NavItem link="/work">.work()</NavItem>
    <NavItem link="/">.resume()</NavItem>
    <NavItem link="/">.gitHub()</NavItem>
    <NavItem link="/">.linkedIn()</NavItem>
    {/* { !props.isAuthenticated
      ? <NavItem link="/auth">Authenticate</NavItem>
      : <NavItem link="/logout">Logout</NavItem>
    } */}
  </ul>
);

export default navItems;
