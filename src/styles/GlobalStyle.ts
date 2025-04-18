'use client'

import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.white};
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family.inter};
    }
  `}

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
