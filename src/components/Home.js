//
//	bball
//  Home.js
//
//	© 2021 Blake Ball

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlakeContainer = styled(Link)`
  color: #7DD56F;
  position: relative;
`

const HomeGreetingContainer = styled.div`
  max-width: 695px;
`

function Home() {
  return (
    <HomeGreetingContainer>
      <h1>Hi, hello!</h1>
      <h1> I'm&nbsp;
        <BlakeContainer to="/about">
          <span className="spin-n-shine"><span> B</span><span>l</span><span>a</span><span>k</span><span>e</span></span>
        </BlakeContainer>. I'm a front end web developer based in Austin, TX.
      </h1>
    </HomeGreetingContainer>
  )
}

export default Home;