//
//	bball
//	App.js
//
//	© 2021 Blake Ball
//

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';

import './App.css';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import ToggleContainer from './components/Toggle';
import NavBar from './components/Nav/NavBar';
import About from './components/About';
import Home from './components/Home';
import Work from './components/Work';
// import useDebounce from './use-debounce';

const BodyContainer = styled.div`
  margin-top: 70px;
  padding: 10px 10%;
`

const ToggleContainerContainer = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;

  @media (max-width: 950px) {
    right: 60px;
  }
`

const StyledParticles = styled(Particles)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
  z-index: -1;
`;

const ParticlesParams = {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "color": {
      "value": ["#7DD56F", "#FFFFFF"]
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.02
    },
    "move": {
      "direction": "right",
      "speed": 0.05
    },
    "size": {
      "value": 1
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.05
      }
    }
  },
  "interactivity": {
    "events": {
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "push": {
        "particles_nb": 1
      }
    }
  },
  "retina_detect": true
}


function App() {

  // const for now, but if auth is introduced switch to let 
  const routes = (
    <Switch>
      <Route path="/work" render={props => <Work {...props} />} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Redirect to="/" />
    </Switch>
  )

  // State and setters
  // const [searchTerm, setSearchTerm] = useState('');
  // const [results, setResults] = useState([]);
  // const [isSearching, setIsSearching] = useState(false);
  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  // Now we call our hook, passing in the current searchTerm value.
  // The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 500ms since it was last called.
  // Otherwise, it will return the previous value of searchTerm.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  // const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // API search function
  // function searchCharacters(search) {
  //   const apiKey = '***';
  //   const queryString = `apikey=${apiKey}&titleStartsWith=${search}`;
  //   return fetch(
  //     `https://gateway.marvel.com/v1/public/comics?${queryString}`,
  //     {
  //       method: 'GET'
  //     }
  //   )
  //     .then(r => r.json())
  //     .then(r => r.data.results)
  //     .catch(error => {
  //       console.error(error);
  //       return [];
  //     });
  // }

  // useEffect(
  //   () => {
  //     // Make sure we have a value (user has entered something in input)
  //     if (debouncedSearchTerm) {
  //       // Set isSearching state
  //       setIsSearching(true);
  //       // Fire off our API call
  //       searchCharacters(debouncedSearchTerm).then(results => {
  //         // Set back to false since request finished
  //         setIsSearching(false);
  //         // Set results state
  //         setResults(results);
  //       });
  //     } else {
  //       setResults([]);
  //     }
  //   },
  //   // This is the useEffect input array
  //   // Our useEffect function will only execute if this value changes ...
  //   // ... and thanks to our hook it will only change if the original ...
  //   // value (searchTerm) hasn't changed for more than 500ms.
  //   [debouncedSearchTerm]
  // );

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <NavBar theme={theme === 'light' ? 'lightTheme' : 'darkTheme'} />
      <BodyContainer className="BodyContainer">
        {/* <input
          placeholder="Search Marvel Comics"
          onChange={e => setSearchTerm(e.target.value)}
        />

        {isSearching && <div>Searching ...</div>}

        {results.map(result => (
          <div key={result.id}>
            <h4>{result.title}</h4>
            <img
              src={`${result.thumbnail.path}/portrait_incredible.${
                result.thumbnail.extension
                }`}
            />
          </div>
        ))} */}
        <GlobalStyles />
        <ToggleContainerContainer>
          <ToggleContainer theme={theme} toggleTheme={toggleTheme} />
        </ToggleContainerContainer>
        {routes}
        {theme === "dark" ? <StyledParticles params={ParticlesParams} /> : null}
      </BodyContainer>
    </ThemeProvider>
  );
}

export default withRouter(App);
