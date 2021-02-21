//
//	bball
//	App.js
//
//	© 2021 Blake Ball
//

import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import ToggleContainer from './components/Toggle';
import NavBar from './components/NavBar';
import About from './components/About';
import Work from './components/Work';
import useDebounce from './use-debounce';

const BodyContainer = styled.div`
  margin-top: 70px;
  padding: 10px 10%;
`

function App() {

  // const for now, but if auth is introduced switch to let 
  const routes = (
    <Switch>
      <Route path="/work" render={props => <Work {...props} />} />
      <Route path="/" component={About} />
      <Redirect to="/" />
    </Switch>
  )

  // State and setter for search term
  const [searchTerm, setSearchTerm] = useState('');
  // State and setter for search results
  const [results, setResults] = useState([]);
  // State for search status (whether there is a pending API request)
  const [isSearching, setIsSearching] = useState(false);

  // State for site theme
  const [theme, setTheme] = useState('dark');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
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
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // API search function
  function searchCharacters(search) {
    const apiKey = '***';
    const queryString = `apikey=${apiKey}&titleStartsWith=${search}`;
    return fetch(
      `https://gateway.marvel.com/v1/public/comics?${queryString}`,
      {
        method: 'GET'
      }
    )
      .then(r => r.json())
      .then(r => r.data.results)
      .catch(error => {
        console.error(error);
        return [];
      });
  }

  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        setIsSearching(true);
        // Fire off our API call
        searchCharacters(debouncedSearchTerm).then(results => {
          // Set back to false since request finished
          setIsSearching(false);
          // Set results state
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    // This is the useEffect input array
    // Our useEffect function will only execute if this value changes ...
    // ... and thanks to our hook it will only change if the original ...
    // value (searchTerm) hasn't changed for more than 500ms.
    [debouncedSearchTerm]
  );

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <NavBar />
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
        <ToggleContainer theme={theme} toggleTheme={toggleTheme} />
        {routes}
      </BodyContainer>
    </ThemeProvider>
  );
}

export default App;
