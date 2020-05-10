import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
*{

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;

  a{
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
}

html, body{
  font-size: 15px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: ${props => props.theme.colors.primary};
  
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
}
`
export default GlobalStyles
