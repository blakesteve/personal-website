//
//	bball
//	App.js
//
//	© 2021 Blake Ball
//import React from 'React';

import React from 'react';

import NavItems from './NavItems';

const NavBar = (props) => (
  <header className="header">
    <nav>
      <NavItems />
    </nav>
  </header>
);

export default NavBar;