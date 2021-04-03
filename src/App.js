//
//  bball
//  App.js
//
//  © 2021 Blake Ball
//

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  Route, Switch, withRouter, Redirect,
} from 'react-router-dom';
import Particles from 'react-particles-js';

import './App.css';
import { lightTheme, darkTheme } from './theme';
import GlobalStyles from './global';
import ToggleContainer from './components/Toggle';
import NavBar from './components/Nav/NavBar';
import About from './components/About';
import Home from './components/Home';
import Work from './components/Work';

const BodyContainer = styled.div`
  margin-top: 70px;
  padding: 10px 10%;
`;

const ToggleContainerContainer = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;

  @media (max-width: 950px) {
    right: 60px;
  }
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ParticlesParams = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: ['#7DD56F', '#FFFFFF'],
    },
    line_linked: {
      enable: true,
      opacity: 0.02,
    },
    move: {
      direction: 'right',
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};

function App() {
  // const for now, but if auth is introduced switch to let
  const routes = (
    <Switch>
      <Route path="/work" render={(props) => <Work {...props} />} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Redirect to="/" />
    </Switch>
  );

  // State and setters
  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <NavBar theme={theme === 'light' ? 'lightTheme' : 'darkTheme'} />
      <BodyContainer className="BodyContainer">
        <GlobalStyles />
        <ToggleContainerContainer>
          <ToggleContainer theme={theme} toggleTheme={toggleTheme} />
        </ToggleContainerContainer>
        {routes}
        {theme === 'dark' ? <StyledParticles params={ParticlesParams} /> : null}
      </BodyContainer>
    </ThemeProvider>
  );
}

export default withRouter(App);
