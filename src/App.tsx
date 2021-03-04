import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  *{
   font-size: 62.5%;
}
  body {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
  }
  html{
  scroll-behavior: smooth;
  font-family: "Inter", sans-serif;



  }
`;

const App: React.FC = () => {
  const theme = {};

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <TopBar />
          <NavBar />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
