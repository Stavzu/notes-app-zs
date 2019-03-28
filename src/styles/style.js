import React from 'react'
import { createGlobalStyle } from "styled-components"
import CSSReset from  '../ResetCSS'
import * as variables from './variables'

export const GlobalStyle = createGlobalStyle`
  ${CSSReset} 

  *,
  *:before,
  *:after {
      box-sizing: border-box;
  }

  html { 
      font-size: 62.5%; 
      overflow-x: hidden; 
      color: ${variables.colors.hellGrey};
    }

  a { 
      text-decoration: none !important; 
      color: ${variables.colors.hellGrey};
    }

  body { 
      font-size: 1.6rem; 
      margin:0;
      padding:0;
      font-family: 'Roboto', sans-serif;
    } 
  h1  { 
      font-size: 2.4rem; 
    } 


  textarea[type="text"]:hover, 
  input[type="text"]:hover, 
  textarea:active, 
  input[type="text"]:active, 
  textarea:focus, 
  input[type="text"]:focus,
  button:focus,
  button:active,
  button:hover,
  label:focus,
  .btn:active,
  .btn.active
  {
      outline:none;
      -webkit-appearance:none;
  }
`