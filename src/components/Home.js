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

  @media (max-width: 590px) {
    display: none;
  }
`
const StyledH1 = styled.h1`

  @media (max-width: 950px) {
    margin-top: 0;
  }
`

const BlakeMobileContainer = styled(Link)`
  color: #7DD56F;
  display: none;

  @media (max-width: 590px) {
    display: inline;
    text-decoration: none;
  }
`

const HomeGreetingContainer = styled.div`
  max-width: 695px;
`

function Home() {
  return (
    <HomeGreetingContainer>
      <StyledH1>Hi, hello!</StyledH1>
      <h1> I'm&nbsp;
        <BlakeContainer to="/about">
          <span className="spin-n-shine"><span> B</span><span>l</span><span>a</span><span>k</span><span>e</span></span>
        </BlakeContainer>
        <BlakeMobileContainer to="/about">
          Blake
        </BlakeMobileContainer>. I'm a front end web developer based in Austin, TX.
      </h1>
    </HomeGreetingContainer>
  )
}

export default Home;