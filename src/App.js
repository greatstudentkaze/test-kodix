import React from "react";
import { createGlobalStyle } from 'styled-components';

import './css/fonts.css';

import Button from './components/Button';

const GlobalStyle = createGlobalStyle`
  // normalize
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  a {
    background-color: transparent;
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  
  button,
  input {
    overflow: visible;
  }
  
  button,
  select {
    text-transform: none;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  
  textarea {
    overflow: auto;
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  // /normalize
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  img {
    max-width: 100%;
  }
  
  a {
    text-decoration: none;
  }
  
  html,
  body {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  
    font-family: "Lab Grotesque", "Tahoma", sans-serif;
    font-style: normal;
    font-weight: normal;
  
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
    cursor: default;
  }
  
  .visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden {
    position: absolute;
  
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  
    white-space: nowrap;
  
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Button />
    </>
  );
}

export default App;
