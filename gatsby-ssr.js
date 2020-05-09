import React from "react"
import { ThemeProvider } from "styled-components"

import LightTheme from "./src/themes/light"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={LightTheme}>{element}</ThemeProvider>
)
