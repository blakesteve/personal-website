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

  h1 {
    font-size: 4rem;
    font-weight: 600;

    @media (max-width: 1020px) {
      font-size: 3rem;
    }

    @media (max-width: 950px) {
      font-size: 2.5rem;
    }

    @media (max-width: 800px) {
      font-size: 2rem;
    }
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
    transition: all .4s ease;
  }
  
  
  /* Spin n Shine */
.spin-n-shine {
	overflow: hidden;
}

.spin-n-shine::before {
	content: '';
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	-webkit-transform: translate3d(-101%,0,0);
	transform: translate3d(-101%,0,0);
	-webkit-transition: -webkit-transform 0.5s;
	transition: transform 0.5s;
}

.spin-n-shine:hover::before {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

.spin-n-shine span {
	display: inline-block;
	position: relative;
	-webkit-transform: perspective(1000px) rotate3d(0,1,0,0deg);
	transform: perspective(1000px) rotate3d(0,1,0,0deg);
	-webkit-transition: -webkit-transform 0.5s, color 0.5s;
	transition: transform 0.5s, color 0.5s;
}

.spin-n-shine:hover span {
	-webkit-transform: perspective(1000px) rotate3d(0,1,0,360deg);
  transform: perspective(1000px) rotate3d(0,1,0,360deg);
  -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.7) 30%, #000 50%, rgba(0,0,0,.7) 70%);
  -webkit-mask-size: 200%;
  animation: shine 2s infinite;
}

.spin-n-shine span:nth-child(4),
.spin-n-shine:hover span:first-child {
	-webkit-transition-delay: 0s;
	transition-delay: 0s;
}

.spin-n-shine span:nth-child(3),
.spin-n-shine:hover span:nth-child(2) {
	-webkit-transition-delay: 0.1s;
	transition-delay: 0.1s;
}

.spin-n-shine span:nth-child(2),
.spin-n-shine:hover span:nth-child(3) {
	-webkit-transition-delay: 0.2s;
	transition-delay: 0.2s;
}

.spin-n-shine span:first-child,
.spin-n-shine:hover span:nth-child(4) {
	-webkit-transition-delay: 0.3s;
	transition-delay: 0.3s;
}

@-webkit-keyframes shine {
  from {
    -webkit-mask-position: 150%;
  }
  
  to {
    -webkit-mask-position: -50%;
  }
}`