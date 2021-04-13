import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Orbitron', sans-serif;
  }

  html, body, #root {
    height: 100%;
    min-height: 768px;
    min-width: 1024px;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }
`
