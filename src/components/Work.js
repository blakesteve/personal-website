//
//  bball
//  Work.js
//
//  © 2021 Blake Ball

import React from 'react';
import styled from 'styled-components';

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3rem;
  width: 100%;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 0;
    flex-flow: column nowrap;
  }
`;

const StyledH1 = styled.h1`
  margin-top: 0;
`;

const StyledP = styled.p`
  max-width: 95%;
`;

const StyledLink = styled.a`
  color: #7DD56F;
  text-decoration: none;
`;

function Work() {
  return (
    <WorkContainer>
      <StyledH1>Work</StyledH1>
      <StyledP>
        A collection of my portfolio projects, this portfolio is always a work in progress.
      </StyledP>
    </WorkContainer>
  );
}

export default Work;
