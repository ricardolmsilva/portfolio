import React from "react"
import { ThemeProvider } from "styled-components"

import LightTheme from "./src/themes/light"

const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  list-style:none;

  a{
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
}

html, body{
  font-size: 15px;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.primary};
  
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
}
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={LightTheme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
