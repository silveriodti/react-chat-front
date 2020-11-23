import { createGlobalStyle } from 'styled-components'
import { colors } from '../colors'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${colors.Gray900}
  }

  body{
    overflow-x: hidden;
  }
`


export default GlobalStyle
