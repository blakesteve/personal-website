
//
//	bball
//  global.js
//
//	© 2021 Blake Ball

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Montserrat-Medium, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  .Header {
    background: ${({ theme }) => theme.header};
  }

  .Text {
    color: ${({ theme }) => theme.text};
    font-family: FiraCode, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  .active {
    color: ${({ theme }) => theme.active};
  }

  .NavigationItem {
    font-family: FiraCode, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  
  .NavigationItem:hover {
    color: ${({ theme }) => theme.active};
  }`