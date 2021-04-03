//
//  bball
//  Work.js
//
//  © 2021 Blake Ball

import React from 'react';
import styled from 'styled-components';

import Site from '../assets/images/previewSite.png';

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const StyledCard = styled.div`
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  margin: 2rem 0;
`;

const PreviewPhoto = styled.img`
  border: 2px solid rgba(54, 53, 55, .1);
  border-radius: 5px;
  width: 320px;
  height: 200px;
  @media (max-width: 950px) {
    height: auto;
  }
`;

const StyledBlurb = styled.div`
  margin-left: 1rem;
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

const StyledH2 = styled.h2`
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
        A collection of personal projects. This portfolio is always a work in progress.
      </StyledP>
      <StyledCard>
        <StyledLink
          href="https://github.com/blakesteve/personal-website"
          target="_blank"
        >
          <PreviewPhoto src={Site} />
        </StyledLink>
        <StyledBlurb>
          <StyledH2>
            <StyledLink
              href="https://github.com/blakesteve/personal-website"
              target="_blank"
              className="Text spin-n-shine"
            >
              <span>B</span>
              <span>l</span>
              <span>a</span>
              <span>k</span>
              <span>e</span>
              <span>B</span>
              <span>.</span>
              <span>d</span>
              <span>e</span>
              <span>v</span>
            </StyledLink>
          </StyledH2>
          <StyledP>
            My website (the one you&apos;re looking at) built in React.
          </StyledP>
        </StyledBlurb>
      </StyledCard>

    </WorkContainer>
  );
}

export default Work;
