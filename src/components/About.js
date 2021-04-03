//
//  bball
//  About.js
//
//  © 2021 Blake Ball

import React from 'react';
import styled from 'styled-components';

import Blake from '../assets/images/blake-pedernales.jpg';

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 0;
    flex-flow: column nowrap;
  }
`;

const BlakePhoto = styled.img`
  border-radius: 5px;
  margin-top: 1rem;
  width: 300px;
  height: 300px;

  @media (max-width: 950px) {
    height: auto;
    width: 100%;
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

const StyledP = styled.p`
  max-width: 95%;
`;

const StyledLink = styled.a`
  color: #7DD56F;
  text-decoration: none;
`;

function About() {
  return (
    <AboutContainer>
      <div>
        <StyledH1> Howdy!</StyledH1>
        <StyledP>
          I&apos;m a front end web developer with over ten years of experience based in Austin, TX.
          I specialize in modern technologies such as React, Angular, Node, and GraphQL.
        </StyledP>
        <StyledP>
          I also enjoy hiking, photography, carpentry, drawing, making (and consuming) music, and am
          passionate about dogs. I am absolutely fascinated by fungus and the mycelial networks
          ubiquitous in our world.
        </StyledP>
        <StyledP>
          My
          <StyledLink href="/Blake_Ball_Resume_Q1_2021.pdf" target="_blank">&nbsp;résumé</StyledLink>
          {' '}
          is in PDF format and opens in a new tab.
        </StyledP>
      </div>
      <BlakePhoto src={Blake} />
    </AboutContainer>
  );
}

export default About;
