import { createGlobalStyle } from 'styled-components';
import { APP_ROOT_DOM_NODE_ID } from '../constants';

export const lightTheme = {
  colors: {
    light: '#ffffff',
    dark: '#000000'
  }
}

export const darkTheme = {
  colors: {
    light: '#000000',
    dark: '#ffffff'
  }
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500');

  html{
    height: 100%;
  }

  body{
    margin: 0;
    padding: 0;
    min-height: 100%;
  }

  #${ APP_ROOT_DOM_NODE_ID } {
    font-family: 'Fira Sans', sans-serif;
    margin: 0;
    font-size: 14px;
    height: 100%;
    width: 100%;
    letter-spacing: normal;
    color: ${ ({ theme }) => theme.colors.black };

    textarea{
      font: 400 14px 'Fira Sans',sans-serif;
    }
  }
`
