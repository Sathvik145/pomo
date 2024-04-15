import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createGlobalStyle,ThemeProvider} from "styled-components"
import StateProvider from './components/StateProvider.jsx';
//1 rem=16px

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  html,body{
    background-color: #121b53;
    font-size: 62.5%;//now 1rem=10px
  }
  body{
    font-size: 1.6rem;
    color: white;
  }
`;

const theme={
  colors:{
    primary:"#b85600",
    secondary:"#08002b",
    bg:"#220045"
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <StateProvider>
   <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle/>
    </ThemeProvider>
   </StateProvider>
  </React.StrictMode>,
)
