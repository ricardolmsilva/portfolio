import React from "react"
import { ThemeProvider } from "styled-components"

import LightTheme from "../../themes/light"

import GlobalStyles from "../../resources/styles/globalStyles"

const Layout = ({ children }) => (
  <ThemeProvider theme={LightTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Layout
